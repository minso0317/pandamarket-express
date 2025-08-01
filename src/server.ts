import app from "./main";
import { createServer } from "http";
import { env } from "./config";

const server = createServer(app);

server.listen(env.PORT, () => {
  console.log(`Server started on port ${env.PORT}`);
});
