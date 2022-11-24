import logNormal from '@stdlib/random-base-lognormal';
import config from '../../config';

function generateLatency(min: number, max: number, mean: number, median: number): number {
  const mu = Math.log(median);
  const sigma = Math.sqrt(2 * (Math.log(mean) - mu));

  const randomLatency = logNormal(mu, sigma);
  if (max !== 0 && randomLatency > max) {
    return max;
  }

  if (min !== 0 && randomLatency < min) {
    return min;
  }

  return randomLatency;
}

export default async function waitForRandomLatency(): Promise<void> {
  const delayTime = generateLatency(config.latency.minimum,
    config.latency.maximum,
    config.latency.mean,
    config.latency.median);

  await new Promise((resolve) => setTimeout(resolve, delayTime));
}
