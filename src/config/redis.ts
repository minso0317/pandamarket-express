import env from "./env";

const redisConfig = {
  url: env.REDIS.REDIS_URL,
  token: env.REDIS.REDIS_TOKEN,
  ttl: 60 * 60 * 24, // 24시간
};

export default redisConfig;
