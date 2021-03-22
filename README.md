# Google Geocoding Stub service

API wrapping Geocoding for testing purposes

- **GET Coordinates from search term** *

*Error triggers:
* `errorInternalServer`
* `errorOverDailyLimit`
* `errorOverQueryLimit`
* `errorInvalidRequestError`
* `errorUnknownError`

*Warning triggers:
* `warningZeroResults`
* `warningRequestDenied`

## Build

Install node modules:
```
npm install
```

Compile the ts source:
```
npm run build
```

## Deploy

Deploy via VSCode with the Azure Functions extension

## Tests

All tests are housed in `tests/*test.ts` files alongside the modules under test

Run all the tests:
```
npm run test
```

Watch the tests:
```
npm run test:watch
```

Run test coverage:
```
npm run test:coverage
```
See the generated `coverage` directory for the results
