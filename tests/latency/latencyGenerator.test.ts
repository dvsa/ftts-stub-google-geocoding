import * as logNormal from '@stdlib/random-base-lognormal';
import { mocked } from 'ts-jest/utils';
import waitForRandomLatency from '../../src/utils/latency/LatencyGenerator';

jest.mock('@stdlib/random-base-lognormal');
const mockedLogNormal = mocked(logNormal);
const MAX_VALUE = 3;
const MIN_VALUE = 1;
const EXPECTED_RANGE_VALUE = 2;

jest.mock('../../src/config', () => ({
  __esModule: true,
  default: {
    latency: {
      minimum: 1,
      maximum: 3,
      mean: 10,
      median: 10,
    },
  },
}));

function setLogNormalValue(milliseconds: number) {
  /* eslint-disable-next-line */
  mockedLogNormal.mockImplementation((() => milliseconds));
}

describe('waitForRandomLatency', () => {
  let spy: jest.SpyInstance;

  beforeEach(() => {
    spy = jest.spyOn(global, 'setTimeout');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Should generate max value', async () => {
    setLogNormalValue(MAX_VALUE);
    await waitForRandomLatency();
    expect(spy).toHaveBeenCalledWith(expect.any(Function), MAX_VALUE);
  });

  test('Should generate min value', async () => {
    setLogNormalValue(MIN_VALUE);
    await waitForRandomLatency();
    expect(spy).toHaveBeenCalledWith(expect.any(Function), MIN_VALUE);
  });

  test('Should generate normal range value', async () => {
    setLogNormalValue(EXPECTED_RANGE_VALUE);
    await waitForRandomLatency();
    expect(spy).toHaveBeenCalledWith(expect.any(Function), EXPECTED_RANGE_VALUE);
  });
});
