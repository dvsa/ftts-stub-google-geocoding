import { Context, Logger } from '@azure/functions';
import { Http2ServerResponse } from 'http2';
import httpTriggerSender from '../../src/geocoder';
import { GeocodingError } from '../../src/interfaces/geocoding-error';
import { logger } from '../../src/lib/logger';
import { errorUnknown } from '../../src/stubs/repository';

jest.mock('../../src/lib/logger', () => ({
  logger: {
    debug: jest.fn(),
  },
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
  done: (): void => {},
};

jest.spyOn(mockedContext, 'done');

describe('Geocoder http trigger handles errors', () => {
  test('geocoding error is caught', async () => {
    mockedContext.req = {
      method: 'GET',
      url: '/',
      headers: {},
      query: {},
      params: {
        address: 'errorOverDailyLimit',
      },
    };
    const response = await httpTriggerSender(mockedContext, mockedContext.req) as Http2ServerResponse;

    expect(mockedContext.res).toStrictEqual({
      headers: {
        'Content-Type': 'application/json',
      },
      body: new GeocodingError(errorUnknown),
      status: 500,
    });
    expect(logger.debug).toHaveBeenCalledWith('Stub responding with: {"headers":{"Content-Type":"application/json"},"body":{"error_message":"Over daily limit","status":"OVER_DAILY_LIMIT","results":[],"status_code":500},"status":500}');
    expect(response).toBeUndefined();
    expect(mockedContext.done).toHaveBeenCalled();
  });
});
