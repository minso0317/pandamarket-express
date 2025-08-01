import dotenv from "dotenv";
import path from "path";

dotenv.config();

const env = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || "3000",
  REDIRECT_PORT: process.env.REDIRECT_PORT || process.env.PORT || "3000",

  DATABASE_URL: process.env.DATABASE_URL || "",
  SERVER_URL: process.env.SERVER_URL || "localhost",
  PROTOCOL: process.env.PROTOCOL || "http",

  PUBLIC_PATH: path.resolve(process.cwd(), "public"),
  STATIC_PATH: "/uploads",

  ACCESS_TOKEN_COOKIE_NAME: "access-token",
  REFRESH_TOKEN_COOKIE_NAME: "refresh-token",

  JWT: {
    ACCESS_TOKEN_SECRET: process.env.JWT_ACCESS_TOKEN_SECRET || "",
    REFRESH_TOKEN_SECRET: process.env.JWT_REFRESH_TOKEN_SECRET || "",
  },

  AWS: {
    REGION: process.env.AWS_REGION || "",
    ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID || "",
    SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY || "",
    S3_BUCKET_NAME: process.env.AWS_S3_BUCKET_NAME || "",
  },

  REDIS: {
    REDIS_URL: process.env.REDIS_URL || "",
    REDIS_TOKEN: process.env.REDIS_TOKEN || "",
  },
};

export default env;
