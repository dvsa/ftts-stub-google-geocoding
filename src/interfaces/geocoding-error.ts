import { GeocoderResult } from './geocode';

export class GeocodingError extends Error {
  public error_message: string | undefined;

  public status: string;

  public results: GeocoderResult[];

  public status_code: number | undefined;

  constructor(geocodingErrorResponse: GeocodingErrorResponse) {
    super();

    this.error_message = geocodingErrorResponse.error_message;
    this.status = geocodingErrorResponse.status;
    this.results = geocodingErrorResponse.results;
    this.status_code = geocodingErrorResponse.status_code;
  }
}

export type GeocodingErrorResponse = {
  error_message?: string,
  status: string,
  results: GeocoderResult[],
  status_code?: number,
};
