import { Context, Logger } from '@azure/functions';
import { Http2ServerResponse } from 'http2';
import httpTriggerSender from '../../src/geocoder';
import { logger } from '../../src/lib/logger';

jest.mock('../../src/lib/logger', () => ({
  logger: {
    debug: jest.fn(),
  },
}));
jest.mock('../../src/geocoder/geocoder-controller', () => () => {
  throw Error('Bad data');
});

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
  done: (): void => {},
};

jest.spyOn(mockedContext, 'done');

describe('Geocoder http trigger handles errors', () => {
  test('general error is caught', async () => {
    const response = await httpTriggerSender(mockedContext) as Http2ServerResponse;

    expect(response).toBeUndefined();
    expect(mockedContext.done).toHaveBeenCalledWith(Error('Bad data'));
  });
});
