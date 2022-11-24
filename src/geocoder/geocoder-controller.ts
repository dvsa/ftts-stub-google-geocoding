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
  geocodingResponseScotland,
  geocodingResponseWales,
  geocodingResponseNottingham,
  geocodingResponseSheffield,
} from '../stubs/repository';
import { GeocodingError } from '../interfaces/geocoding-error';
import { ErrorTrigger, WarningTrigger } from '../lib/enums';
import { MockResponse } from '../interfaces/geocode';
import { logger } from '../lib/logger';

const statusErrorResponses = [
  { status: ErrorTrigger.INTERNAL_SERVER, errorResponse: errorInternalServer },
  { status: ErrorTrigger.OVER_DAILY_LIMIT, errorResponse: errorOverDailyLimit },
  { status: ErrorTrigger.OVER_QUERY_LIMIT, errorResponse: errorOverQueryLimit },
  { status: ErrorTrigger.INVALID_REQUEST, errorResponse: errorInvalidRequest },
  { status: ErrorTrigger.UNKNOWN_ERROR, errorResponse: errorUnknown },
];

const statusWarningResponses = [
  { status: WarningTrigger.ZERO_RESULTS, response: warningZeroResults },
  { status: WarningTrigger.REQUEST_DENIED, response: warningRequestDenied },
];

const handleRequest = (req: HttpRequest): MockResponse => {
  logger.debug(`Request Params: ${JSON.stringify(req.params)}`);
  //  Stripping UK region from address param. As this value has been hardcoded in the location api
  //  to address an issue where invalid locations outside of the UK were being returned.
  const reqAddressParam = req.params.address?.replace(',%20UK', '').replace(', UK', '');

  const mappedErrors = statusErrorResponses.filter((statusErrorResponse) => statusErrorResponse.status === reqAddressParam);
  const mappedWarnings = statusWarningResponses.filter((statusWarningResponse) => statusWarningResponse.status === reqAddressParam);

  if (mappedErrors[0]) {
    throw new GeocodingError(mappedErrors[0].errorResponse);
  }

  if (mappedWarnings[0]) {
    throw new GeocodingError(mappedWarnings[0].response);
  }

  if (!reqAddressParam) {
    throw new GeocodingError(errorMissingAddress);
  }

  if (!req.params.key) {
    throw new GeocodingError(warningRequestDenied);
  }

  const searchCriteria = (reqAddressParam || '').trim().toLowerCase();

  switch (searchCriteria) {
    case 'scotland': {
      return geocodingResponseScotland;
    }

    case 'wales': {
      return geocodingResponseWales;
    }

    case 'nottingham': {
      return geocodingResponseNottingham;
    }

    case 'sheffield': {
      return geocodingResponseSheffield;
    }

    default: {
      return geocodingResponse;
    }
  }
};

export default handleRequest;
