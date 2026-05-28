import Redis from "ioredis";

export const redis = new (Redis as any)({
  host: process.env.REDIS_HOST || "localhost",

  port:
    Number(process.env.REDIS_PORT) ||
    6379,

  maxRetriesPerRequest: null,
});