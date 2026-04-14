import { swaggerUI } from "@hono/swagger-ui";
import { serve } from '@hono/node-server';
import { OpenAPIHono } from "@hono/zod-openapi";
import { orders } from "./router/orders/index.js";
const app = new OpenAPIHono();
app // Swagger UI
    .doc("/api/swaggerui", {
    info: {
        title: "標準APIタクシー",
        version: "v1",
    },
    openapi: "3.1.0",
})
    .get("/api/docs", swaggerUI({
    url: "/api/swaggerui",
}));
app.route("/", orders);
serve({
    fetch: app.fetch,
    port: 8000
}, (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
    console.log(`Swagger UI: http://localhost:${info.port}/api/docs`);
});
export default app;
