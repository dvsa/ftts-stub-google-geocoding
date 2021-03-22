import {
  geocodingResponse, errorMissingAddress, errorInternalServer, errorOverDailyLimit, errorOverQueryLimit, errorInvalidRequest, errorUnknown, warningRequestDenied, warningZeroResults,
} from '../src/stubs/repository';
import handleRequest from '../src/geocoder/geocoder-controller';
import { ERROR_TRIGGER, WARNING_TRIGGER } from '../src/lib/enums';

describe('Geocoder', () => {
  test('it successfully returns response with coordinates', async () => {
    // arrange
    const request: any = {
      params: { address: 'address-here', key: 'apikey' },
    };

    // act
    const actual = await handleRequest(request);

    // assert
    expect(actual).toEqual(geocodingResponse);
  });

  test('missing address throws and responds with error', async () => {
    // arrange
    const request: any = {
      params: { address: 'address-here' },
    };

    // act and assert
    await expect(handleRequest(request))
      .resolves.toBe(warningRequestDenied);
  });

  test('missing api key resolves to a request denied warning', async () => {
    // arrange
    const request: any = {
      params: { key: 'apikey' },
    };

    // act and assert
    await expect(handleRequest(request))
      .rejects.toBe(errorMissingAddress);
  });

  test('address with error trigger throws an internal server error', async () => {
    // arrange
    const request: any = {
      params: { address: ERROR_TRIGGER.INTERNAL_SERVER, key: 'apikey' },
    };

    // act and assert
    await expect(handleRequest(request))
      .rejects.toBe(errorInternalServer);
  });

  test('address with error trigger throws an over daily limit error', async () => {
    // arrange
    const request: any = {
      params: { address: ERROR_TRIGGER.OVER_DAILY_LIMIT, key: 'apikey' },
    };

    // act and assert
    await expect(handleRequest(request))
      .rejects.toBe(errorOverDailyLimit);
  });

  test('address with error trigger throws an over query limit error', async () => {
    // arrange
    const request: any = {
      params: { address: ERROR_TRIGGER.OVER_QUERY_LIMIT, key: 'apikey' },
    };

    // act and assert
    await expect(handleRequest(request))
      .rejects.toBe(errorOverQueryLimit);
  });

  test('address with error trigger throws an invalid request error', async () => {
    // arrange
    const request: any = {
      params: { address: ERROR_TRIGGER.INVALID_REQUEST, key: 'apikey' },
    };

    // act and assert
    await expect(handleRequest(request))
      .rejects.toBe(errorInvalidRequest);
  });

  test('address with error trigger throws an unknown error', async () => {
    // arrange
    const request: any = {
      params: { address: ERROR_TRIGGER.UNKNOWN_ERROR, key: 'apikey' },
    };

    // act and assert
    await expect(handleRequest(request))
      .rejects.toBe(errorUnknown);
  });

  test('address with warning trigger resolves to be a request denied warning', async () => {
    // arrange
    const request: any = {
      params: { address: WARNING_TRIGGER.REQUEST_DENIED, key: 'apikey' },
    };

    // act and assert
    await expect(handleRequest(request))
      .resolves.toBe(warningRequestDenied);
  });

  test('address with warning trigger resolves to be a zero results warning', async () => {
    // arrange
    const request: any = {
      params: { address: WARNING_TRIGGER.ZERO_RESULTS, key: 'apikey' },
    };

    // act and assert
    await expect(handleRequest(request))
      .resolves.toBe(warningZeroResults);
  });
});
