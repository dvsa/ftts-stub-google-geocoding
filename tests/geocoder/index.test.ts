import { Context, Logger } from '@azure/functions';
import { Http2ServerResponse } from 'http2';
import httpTriggerSender from '../../src/geocoder';
import { logger } from '../../src/lib/logger';

jest.mock('../../src/lib/logger', () => ({
  logger: {
    debug: jest.fn(),
  },
}));
jest.mock('../../src/geocoder/geocoder-controller', () => () => ({
  exampleLocation: 'Birmingham',
}));

const mockedContext: Context = {
  invocationId: '',
  executionContext: {
    invocationId: '',
    functionName: '',
    functionDirectory: '',
  },
  bindings: {},
  bindingData: {},
  traceContext: {
    traceparent: null,
    tracestate: null,
    attributes: {},
  },
  res: {},
  bindingDefinitions: [],
  log: logger as unknown as Logger,
  done: (): void => { },
};

jest.spyOn(mockedContext, 'done');

describe('Geocoder http trigger', () => {
  test('request is sent', async () => {
    const response = await httpTriggerSender(mockedContext) as Http2ServerResponse;

    expect(mockedContext.res).toStrictEqual({
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        exampleLocation: 'Birmingham',
      },
    });
    expect(logger.debug).toHaveBeenCalledWith('Stub responding with: {"headers":{"Content-Type":"application/json"},"body":{"exampleLocation":"Birmingham"}}');
    expect(response).toBeUndefined();
    expect(mockedContext.done).toHaveBeenCalled();
  });

  test('request is sent without headers', async () => {
    delete mockedContext.res;
    const response = await httpTriggerSender(mockedContext) as Http2ServerResponse;

    expect(mockedContext.res).toStrictEqual({
      body: {
        exampleLocation: 'Birmingham',
      },
    });
    expect(logger.debug).toHaveBeenCalledWith('Stub responding with: {"body":{"exampleLocation":"Birmingham"}}');
    expect(response).toBeUndefined();
    expect(mockedContext.done).toHaveBeenCalled();
  });
});
