/* istanbul ignore file */
import { MockResponse } from '../interfaces/geocode';
import { GeocodingErrorResponse } from '../interfaces/geocoding-error';

export const geocodingResponse: MockResponse = {
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
            lat: -1.9065228,
            lng: 52.4783213,
          },
        },
        location: {
          lat: 52.4784748,
          lng: -1.9062131,
        },
        location_type: 'ROOFTOP',
        viewport: {
          northeast: {
            lat: -1.9059596,
            lng: 52.4787608,
          },
          southwest: {
            lat: -1.9065228,
            lng: 52.4783213,
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

export const geocodingResponseScotland: MockResponse = {
  results: [
    {
      address_components: [
        {
          long_name: '99',
          short_name: '99',
          types: [
            'street_number',
          ],
        },
        {
          long_name: 'Gordon Street',
          short_name: 'Gordon St',
          types: [
            'route',
          ],
        },
        {
          long_name: 'Glasgow',
          short_name: 'Glasgow',
          types: [
            'postal_town',
          ],
        },
        {
          long_name: 'Glasgow City',
          short_name: 'Glasgow City',
          types: [
            'administrative_area_level_2',
            'political',
          ],
        },
        {
          long_name: 'Scotland',
          short_name: 'Scotland',
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
          long_name: 'G1 3SF',
          short_name: 'G1 3SF',
          types: [
            'postal_code',
          ],
        },
      ],
      formatted_address: '99 Gordon St, Glasgow G1 3SF, UK',
      geometry: {
        bounds: {
          northeast: {
            lat: -4.257368719708498,
            lng: 55.8612048802915,
          },
          southwest: {
            lat: -4.260066680291502,
            lng: 55.8585069197085,
          },
        },
        location: {
          lat: 55.8598559,
          lng: -4.2587177,
        },
        location_type: 'ROOFTOP',
        viewport: {
          northeast: {
            lat: -4.257368719708498,
            lng: 55.8612048802915,
          },
          southwest: {
            lat: -4.260066680291502,
            lng: 55.8585069197085,
          },
        },
      },
      place_id: 'ChIJ0aCmaJ5GiEgRJrYDVn7jhhI',
      types: [
        'establishment',
        'lodging',
        'point_of_interest',
      ],
    },
  ],
  status: 'OK',
};

export const geocodingResponseWales: MockResponse = {
  results: [
    {
      address_components: [
        {
          long_name: '86-88',
          short_name: '86-88',
          types: [
            'street_number',
          ],
        },
        {
          long_name: 'Adam Street',
          short_name: 'Adam St',
          types: [
            'route',
          ],
        },
        {
          long_name: 'Cardiff',
          short_name: 'Cardiff',
          types: [
            'postal_town',
          ],
        },
        {
          long_name: 'Cardiff',
          short_name: 'Cardiff',
          types: [
            'administrative_area_level_2',
            'political',
          ],
        },
        {
          long_name: 'Wales',
          short_name: 'Wales',
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
          long_name: 'CF24 2FN',
          short_name: 'CF24 2FN',
          types: [
            'postal_code',
          ],
        },
      ],
      formatted_address: '86-88 Adam St, Cardiff CF24 2FN, UK',
      geometry: {
        bounds: {
          northeast: {
            lat: -3.168013019708498,
            lng: 51.48035898029149,
          },
          southwest: {
            lat: -3.170710980291502,
            lng: 51.4776610197085,
          },
        },
        location: {
          lat: 51.47901,
          lng: -3.169362,
        },
        location_type: 'ROOFTOP',
        viewport: {
          northeast: {
            lat: -3.168013019708498,
            lng: 51.48035898029149,
          },
          southwest: {
            lat: -3.170710980291502,
            lng: 51.4776610197085,
          },
        },
      },
      place_id: 'ChIJQ8igIbYcbkgRvaNJc_xOEYA',
      types: [
        'establishment',
        'point_of_interest',
        'university',
      ],
    },
  ],
  status: 'OK',
};

export const geocodingResponseNottingham: MockResponse = {
  results: [
    {
      address_components: [
        {
          long_name: 'Axis Tower',
          short_name: 'Axis Tower',
          types: [
            'premise',
          ],
        },
        {
          long_name: 'Nottingham',
          short_name: 'Nottingham',
          types: [
            'postal_town',
          ],
        },
        {
          long_name: 'Nottinghamshire',
          short_name: 'Nottinghamshire',
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
          long_name: 'NG1 4EE',
          short_name: 'NG1 4EE',
          types: [
            'postal_code',
          ],
        },
      ],
      formatted_address: 'Axis Tower, Nottingham NG1 4EE, UK',
      geometry: {
        bounds: {
          northeast: {
            lat: 52.9546712,
            lng: -1.1537710,
          },
          southwest: {
            lat: 52.9546711,
            lng: -1.1537709,
          },
        },
        location: {
          lat: 52.9546712,
          lng: -1.1537710,
        },
        location_type: 'ROOFTOP',
        viewport: {
          northeast: {
            lat: 52.9546712255473,
            lng: -1.153771061734251,
          },
          southwest: {
            lat: 52.9546712255472,
            lng: -1.153771061734251,
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

export const geocodingResponseSheffield: MockResponse = {
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
          long_name: 'Sheffield',
          short_name: 'Sheffield',
          types: [
            'postal_town',
          ],
        },
        {
          long_name: 'South Yorkshire',
          short_name: 'South Yorkshire',
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
            lat: 53.3778153,
            lng: -1.4665608,
          },
          southwest: {
            lat: 53.3778153,
            lng: -1.4665608,
          },
        },
        location: {
          lat: 53.3778153,
          lng: -1.4665608,
        },
        location_type: 'ROOFTOP',
        viewport: {
          northeast: {
            lat: 53.377815375326,
            lng: -1.46656083191002,
          },
          southwest: {
            lat: 53.377815375326,
            lng: -1.46656083191002,
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

export const errorMissingAddress: GeocodingErrorResponse = {
  error_message: 'Invalid request. Missing the \'address\', \'components\', \'latlng\' or \'place_id\' parameter.',
  status: 'INVALID_REQUEST',
  results: [],
  status_code: 400,
};

export const errorInternalServer: GeocodingErrorResponse = {
  error_message: 'Internal Server Error',
  status: 'INTERNAL_SERVER_ERROR',
  results: [],
  status_code: 500,
};

export const errorOverDailyLimit: GeocodingErrorResponse = {
  error_message: 'Over daily limit',
  status: 'OVER_DAILY_LIMIT',
  results: [],
  status_code: 500,
};

export const errorOverQueryLimit: GeocodingErrorResponse = {
  error_message: 'Over query limit',
  status: 'OVER_QUERY_LIMIT',
  results: [],
  status_code: 500,
};

export const errorInvalidRequest: GeocodingErrorResponse = {
  error_message: 'Invalid request',
  status: 'INVALID_REQUEST',
  results: [],
  status_code: 500,
};

export const errorUnknown: GeocodingErrorResponse = {
  error_message: 'Unknown error',
  status: 'UNKNOWN_ERROR',
  results: [],
  status_code: 500,
};

export const warningRequestDenied: GeocodingErrorResponse = {
  error_message: 'Request denied',
  status: 'REQUEST_DENIED',
  results: [],
};

export const warningZeroResults: GeocodingErrorResponse = {
  status: 'ZERO_RESULTS',
  results: [],
};
