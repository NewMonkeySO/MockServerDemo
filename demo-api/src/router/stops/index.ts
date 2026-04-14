import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono'
import { getStopsQueryParametersSchema, type GetStops400BadRequestResponse } from '../../schemas/stops/index.js';
import { GET_STOPS_RESPONSE } from '../../constants/stops/index.js';
import { BAD_REQUEST_RESPONSE } from '../../constants/errorCode/index.js';

const stops = new Hono();

/** GET /stops */
/** @TODO クエリーパラメーターに合わせてレスポンスを修正する */
stops.get(
    '/stops',
    zValidator('query', getStopsQueryParametersSchema, (result, c) => {
        if (!result.success) {
            return c.json<GetStops400BadRequestResponse>(BAD_REQUEST_RESPONSE, 400);
        }
    }),
    async (c) => {
        const query = c.req.valid("query");
        console.log("Received query parameters:", query);

        //401
        //403
        //500

        const res = GET_STOPS_RESPONSE;
        return c.json(res, 200);    
    }
);

export { stops };