import { Hono } from 'hono';
import { GET_TERMS_RESPONSE } from '../../constants/terms/index.js';
const terms = new Hono();
/** GET /terms */
terms.get('/terms', async (c) => {
    const res = GET_TERMS_RESPONSE;
    return c.json(res, 200);
});
export { terms };
