import { GeocodingError } from '../interfaces/geocoding-error';

export const geocodingResponse = {
  results: [
    {
      address_components: [
        {
          long_name: 'Alpha Tower',
          short_name: 'Alpha Tower',
          types: [
            'premise',
          ],
        },
        {
          long_name: 'Birmingham',
          short_name: 'Birmingham',
          types: [
            'postal_town',
          ],
        },
        {
          long_name: 'West Midlands',
          short_name: 'West Midlands',
          types: [
            'administrative_area_level_2',
            'political',
          ],
        },
        {
          long_name: 'England',
          short_name: 'England',
          types: [
            'administrative_area_level_1',
            'political',
          ],
        },
        {
          long_name: 'United Kingdom',
          short_name: 'GB',
          types: [
            'country',
            'political',
          ],
        },
        {
          long_name: 'B1 1TT',
          short_name: 'B1 1TT',
          types: [
            'postal_code',
          ],
        },
      ],
      formatted_address: 'Alpha Tower, Birmingham B1 1TT, UK',
      geometry: {
        bounds: {
          northeast: {
            lat: 52.4787608,
            lng: -1.9059596,
          },
          southwest: {
            lat: 52.4783213,
            lng: -1.9065228,
          },
        },
        location: {
          lat: 52.4784748,
          lng: -1.9062131,
        },
        location_type: 'ROOFTOP',
        viewport: {
          northeast: {
            lat: 52.4798900302915,
            lng: -1.904892219708498,
          },
          southwest: {
            lat: 52.4771920697085,
            lng: -1.907590180291502,
          },
        },
      },
      place_id: 'ChIJKeXor_S8cEgRa9Q_05tNl2k',
      types: [
        'premise',
      ],
    },
  ],
  status: 'OK',
};

export const errorMissingAddress: GeocodingError = {
  error_message: 'Invalid request. Missing the \'address\', \'components\', \'latlng\' or \'place_id\' parameter.',
  status: 'INVALID_REQUEST',
  results: [],
  status_code: 400,
};

export const errorInternalServer: GeocodingError = {
  error_message: 'Internal Server Error',
  status: 'INTERNAL_SERVER_ERROR',
  results: [],
  status_code: 500,
};

export const errorOverDailyLimit: GeocodingError = {
  error_message: 'Over daily limit',
  status: 'OVER_DAILY_LIMIT',
  results: [],
  status_code: 500,
};

export const errorOverQueryLimit: GeocodingError = {
  error_message: 'Over query limit',
  status: 'OVER_QUERY_LIMIT',
  results: [],
  status_code: 500,
};

export const errorInvalidRequest: GeocodingError = {
  error_message: 'Invalid request',
  status: 'INVALID_REQUEST',
  results: [],
  status_code: 500,
};

export const errorUnknown: GeocodingError = {
  error_message: 'Unknown error',
  status: 'UNKNOWN_ERROR',
  results: [],
  status_code: 500,
};

export const warningRequestDenied = {
  error_message: 'Request denied',
  status: 'REQUEST_DENIED',
  results: [],
};

export const warningZeroResults = {
  status: 'ZERO_RESULTS',
  results: [],
};
