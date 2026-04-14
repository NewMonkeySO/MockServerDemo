import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { orders } from './router/orders/index.js';
import { terms } from './router/terms/index.js';
const app = new Hono();
app.route('/', orders);
app.route('/', terms);
serve({
    fetch: app.fetch,
    port: 8000
}, (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
});
export default app;
