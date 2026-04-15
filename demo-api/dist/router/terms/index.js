import { Hono } from 'hono';
import { GET_TERMS_RESPONSE } from '../../constants/terms/index.js';
import { zValidator } from '@hono/zod-validator';
import { getTermsQueryParametersSchema } from '../../schemas/terms/index.js';
import { BAD_REQUEST_RESPONSE } from '../../constants/errorCode/index.js';
const terms = new Hono();
/** GET /terms */
terms.get('/terms', zValidator('query', getTermsQueryParametersSchema, (result, c) => {
    if (!result.success) {
        return c.json(BAD_REQUEST_RESPONSE, 400);
    }
}), async (c) => {
    const category = c.req.valid('query').category;
    console.log("Received category:", category);
    //401
    //403
    //500
    if (!category) {
        const res = GET_TERMS_RESPONSE;
        return c.json(res, 200);
    }
    const res = {
        terms: GET_TERMS_RESPONSE.terms?.filter(term => term.category === category)
    };
    return c.json(res, 200);
});
export { terms };
