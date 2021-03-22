// eslint-disable-next-line import/no-unresolved
import { AzureFunction, Context, HttpRequest } from '@azure/functions';

import handleRequest from './geocoder-controller';

const httpTriggerSender: AzureFunction = async (context: Context, req: HttpRequest): Promise<void> => {
  if (context.res) {
    context.res.headers = { 'Content-Type': 'application/json' };
  }

  try {
    const body = await handleRequest(req);
    console.log(`Stub responding with: ${JSON.stringify({ ...context.res, body })}`);
    context.res = { ...context.res, body };
    return context.done();
  } catch (e) {
    const status = e.status_code ? e.status_code : 500;
    const body = e;
    console.log(`Stub responding with: ${JSON.stringify({ ...context.res, body, status })}`);
    context.res = { ...context.res, body, status };

    return context.done();
  }
};

export default httpTriggerSender;
