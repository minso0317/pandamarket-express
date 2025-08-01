import env from "./env";

const jwtConfig = {
  accessTokenSecret: env.JWT.ACCESS_TOKEN_SECRET,
  refreshTokenSecret: env.JWT.REFRESH_TOKEN_SECRET,
  accessTokenExpiresIn: "15m",
  refreshTokenExpiresIn: "7d",
};

export default jwtConfig;
