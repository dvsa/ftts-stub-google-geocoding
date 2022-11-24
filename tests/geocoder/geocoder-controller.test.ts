import { HttpRequest } from '@azure/functions';
import {
  geocodingResponse, errorMissingAddress, errorInternalServer, errorOverDailyLimit, errorOverQueryLimit, errorInvalidRequest, errorUnknown, warningRequestDenied, warningZeroResults, geocodingResponseScotland, geocodingResponseWales,
} from '../../src/stubs/repository';
import handleRequest from '../../src/geocoder/geocoder-controller';
import { ErrorTrigger, WarningTrigger } from '../../src/lib/enums';
import { GeocodingError } from '../../src/interfaces/geocoding-error';

describe('Geocoder', () => {
  test('it successfully returns response with coordinates', () => {
    const request = {
      params: { address: 'address-here', key: 'apikey' },
    } as unknown as HttpRequest;

    const actual = handleRequest(request);

    expect(actual).toStrictEqual(geocodingResponse);
  });

  test('it successfully returns scotland response with coordinates', () => {
    const request = {
      params: { address: 'scotland', key: 'apikey' },
    } as unknown as HttpRequest;

    const actual = handleRequest(request);

    expect(actual).toStrictEqual(geocodingResponseScotland);
  });

  test('it successfully returns wales response with coordinates', () => {
    const request = {
      params: { address: 'wales', key: 'apikey' },
    } as unknown as HttpRequest;

    const actual = handleRequest(request);

    expect(actual).toStrictEqual(geocodingResponseWales);
  });

  test('missing address throws and responds with error', () => {
    const request = {
      params: { address: 'address-here' },
    } as unknown as HttpRequest;

    expect(() => handleRequest(request))
      .toThrow(new GeocodingError(warningRequestDenied));
  });

  test('missing api key resolves to a request denied warning', () => {
    const request = {
      params: { key: 'apikey' },
    } as unknown as HttpRequest;

    expect(() => handleRequest(request))
      .toThrow(new GeocodingError(errorMissingAddress));
  });

  test('address with error trigger throws an internal server error', () => {
    const request: HttpRequest = {
      params: { address: ErrorTrigger.INTERNAL_SERVER, key: 'apikey' },
    } as unknown as HttpRequest;

    expect(() => handleRequest(request))
      .toThrow(new GeocodingError(errorInternalServer));
  });

  test('address with error trigger throws an over daily limit error', () => {
    const request = {
      params: { address: ErrorTrigger.OVER_DAILY_LIMIT, key: 'apikey' },
    } as unknown as HttpRequest;

    expect(() => handleRequest(request))
      .toThrow(new GeocodingError(errorOverDailyLimit));
  });

  test('address with error trigger throws an over query limit error', () => {
    const request: any = {
      params: { address: ErrorTrigger.OVER_QUERY_LIMIT, key: 'apikey' },
    };

    expect(() => handleRequest(request as HttpRequest))
      .toThrow(new GeocodingError(errorOverQueryLimit));
  });

  test('address with error trigger throws an invalid request error', () => {
    const request: any = {
      params: { address: ErrorTrigger.INVALID_REQUEST, key: 'apikey' },
    };

    expect(() => handleRequest(request as HttpRequest))
      .toThrow(new GeocodingError(errorInvalidRequest));
  });

  test('address with error trigger throws an unknown error', () => {
    const request: any = {
      params: { address: ErrorTrigger.UNKNOWN_ERROR, key: 'apikey' },
    };

    expect(() => handleRequest(request as HttpRequest))
      .toThrow(new GeocodingError(errorUnknown));
  });

  test('address with warning trigger resolves to be a request denied warning', () => {
    const request: any = {
      params: { address: WarningTrigger.REQUEST_DENIED, key: 'apikey' },
    };

    expect(() => handleRequest(request as HttpRequest))
      .toThrow(new GeocodingError(warningRequestDenied));
  });

  test('address with warning trigger resolves to be a zero results warning', () => {
    const request = {
      params: { address: WarningTrigger.ZERO_RESULTS, key: 'apikey' },
    } as unknown as HttpRequest;

    expect(() => handleRequest(request))
      .toThrow(new GeocodingError(warningZeroResults));
  });
});
