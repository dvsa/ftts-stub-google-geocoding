interface Latency {
  minimum: number;
  maximum: number;
  mean: number;
  median: number;
}

interface Config {
  latency: Latency;
}

export default {
  latency: {
    minimum: parseInt(process.env.LATENCY_MINIMUM || '0', 10),
    maximum: parseInt(process.env.LATENCY_MAXIMUM || '24012', 10),
    mean: parseInt(process.env.LATENCY_MEAN || '52', 10),
    median: parseInt(process.env.LATENCY_MEDIAN || '47', 10),
  },
} as Config;
