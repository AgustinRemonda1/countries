import { createProxyMiddleware } from "http-proxy-middleware";

export const config = { api: { bodyParser: false } };

export default createProxyMiddleware({
  timeout: 90000,
  target: "/",
  logLevel: "debug",
  pathRewrite: {
    "/api/countries": "",
  },
  router: {
    "/api/countries": process.env.COUNTRIES_API,
  },
});
