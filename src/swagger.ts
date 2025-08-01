import swaggerJSDoc from "swagger-jsdoc";
import { env } from "./config";

const swaggerDefinition = {
  openapi: "3.0.1",
  info: {
    title: "Apartment Community API",
    version: "1.0.0",
    description: "위리브 API 명세서",
  },
  servers: [
    {
      url: `http://${env.SERVER_URL}:${env.REDIRECT_PORT || 3000}`,
      description: "기본 API 서버",
    },
  ],
  security: [
    {
      bearerAuth: [],
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
};

const options = {
  swaggerDefinition,
  apis: ["src/**/*.ts"], // JSDoc @openapi 블록 위치: 컨트롤러/라우터 전역 스캔
};

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;
