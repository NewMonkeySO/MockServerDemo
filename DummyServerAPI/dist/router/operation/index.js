import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';
import { getOperationDelaysQueryParametersSchema } from '../../schemas/operation/index.js';
import { GET_OPERATION_DELAYS_RESPONSE } from '../../constants/operation/index.js';
import { BAD_REQUEST_RESPONSE } from '../../constants/errorCode/index.js';
const operation = new Hono();
/** GET /operation-delays */
/** @TODO クエリーパラメーターに合わせてレスポンスを修正する */
operation.get('/operation-delays', zValidator('query', getOperationDelaysQueryParametersSchema, (result, c) => {
    if (!result.success) {
        return c.json(BAD_REQUEST_RESPONSE, 400);
    }
}), async (c) => {
    const query = c.req.valid("query");
    console.log("Received query parameters:", query);
    //401
    //403
    //500
    const res = GET_OPERATION_DELAYS_RESPONSE;
    return c.json(res, 200);
});
export { operation };
