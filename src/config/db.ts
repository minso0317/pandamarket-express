import env from "./env";

const dbConfig = {
  url: env.DATABASE_URL,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};

export default dbConfig;
