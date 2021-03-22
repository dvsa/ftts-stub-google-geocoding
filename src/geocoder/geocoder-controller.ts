// eslint-disable-next-line import/no-unresolved
import { HttpRequest } from '@azure/functions';
import {
  geocodingResponse,
  errorMissingAddress,
  errorInternalServer,
  errorOverDailyLimit,
  errorOverQueryLimit,
  errorInvalidRequest,
  errorUnknown,
  warningZeroResults,
  warningRequestDenied,
} from '../stubs/repository';
import { GeocodingError } from '../interfaces/geocoding-error';
import { ERROR_TRIGGER, WARNING_TRIGGER } from '../lib/enums';

const statusErrorResponses = [
  { status: ERROR_TRIGGER.INTERNAL_SERVER, errorResponse: errorInternalServer },
  { status: ERROR_TRIGGER.OVER_DAILY_LIMIT, errorResponse: errorOverDailyLimit },
  { status: ERROR_TRIGGER.OVER_QUERY_LIMIT, errorResponse: errorOverQueryLimit },
  { status: ERROR_TRIGGER.INVALID_REQUEST, errorResponse: errorInvalidRequest },
  { status: ERROR_TRIGGER.UNKNOWN_ERROR, errorResponse: errorUnknown },
];

const statusWarningResponses = [
  { status: WARNING_TRIGGER.ZERO_RESULTS, response: warningZeroResults },
  { status: WARNING_TRIGGER.REQUEST_DENIED, response: warningRequestDenied },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleRequest = async (req: HttpRequest): Promise<any | GeocodingError> => {
  const mappedErrors = statusErrorResponses.filter((statusErrorResponse) => statusErrorResponse.status === req.params.address);
  const mappedWarnings = statusWarningResponses.filter((statusWarningResponse) => statusWarningResponse.status === req.params.address);

  if (mappedErrors[0]) {
    return Promise.reject(mappedErrors[0].errorResponse);
  }

  if (mappedWarnings[0]) {
    return Promise.resolve(mappedWarnings[0].response);
  }

  if (!req.params.address) {
    return Promise.reject(errorMissingAddress);
  }

  if (!req.params.key) {
    return Promise.resolve(warningRequestDenied);
  }

  return geocodingResponse;
};

export default handleRequest;
