/* eslint-disable @typescript-eslint/no-explicit-any */
export interface GeocodingError {
  error_message: string;
  status: string;
  results: any[];
  status_code: number;
}
