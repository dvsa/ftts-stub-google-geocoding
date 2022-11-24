import { logger } from '../../src/lib/logger';

describe('Logger', () => {
  test('is instantiated', () => {
    expect(logger.debug).toBeDefined();
    expect(logger.error).toBeDefined();
    expect(logger.info).toBeDefined();
    expect(logger.warn).toBeDefined();
  });
});
