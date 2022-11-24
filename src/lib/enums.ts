export enum ErrorTrigger {
  UNKNOWN_ERROR = 'errorUnknownError',
  INVALID_REQUEST = 'errorInvalidRequestError',
  OVER_QUERY_LIMIT = 'errorOverQueryLimit',
  OVER_DAILY_LIMIT = 'errorOverDailyLimit',
  INTERNAL_SERVER = 'errorInternalServer',
  MISSING_ADDRESS = 'errorMissingAddress',
}

export enum WarningTrigger {
  ZERO_RESULTS = 'warningZeroResults',
  REQUEST_DENIED = 'warningRequestDenied',
}
