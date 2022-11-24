import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { MockResponse } from '../interfaces/geocode';
import { GeocodingError } from '../interfaces/geocoding-error';
import { logger } from '../lib/logger';

import handleRequest from './geocoder-controller';
import waitForRandomLatency from '../utils/latency/LatencyGenerator';

const httpTriggerSender: AzureFunction = async (context: Context, req: HttpRequest): Promise<void> => {
  await waitForRandomLatency();
  if (context.res) {
    context.res.headers = { 'Content-Type': 'application/json' };
  }

  try {
    const body: MockResponse = handleRequest(req);
    logger.debug(`Stub responding with: ${JSON.stringify({ ...context.res, body })}`);
    context.res = {
      ...context.res,
      body,
    };
    return context.done();
  } catch (e) {
    if (e instanceof GeocodingError) {
      const status = e.status_code ?? 500;
      const body = e;
      logger.debug(`Stub responding with: ${JSON.stringify({ ...context.res, body, status })}`);
      context.res = { ...context.res, body, status };
      return context.done();
    }
    return context.done(e as Error);
  }
};

export default httpTriggerSender;
