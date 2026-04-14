import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono'
import { getServicesQueryParametersSchema, type GetServices400BadRequestResponse, type GetServicesById404BadRequestResponse, type GetServicesByIdResponse } from '../../schemas/services/index.js';
import { GET_SERVICES_BY_ID_RESPONSE, GET_SERVICES_RESPONSE } from '../../constants/services/index.js';
import { BAD_REQUEST_RESPONSE, NOT_FOUND_RESPONSE } from '../../constants/errorCode/index.js';

const services = new Hono();

/** GET /services */
/** @TODO クエリーパラメーターに合わせてレスポンスを修正する */
services.get(
    '/services',
    zValidator('query', getServicesQueryParametersSchema, (result, c) => {
        if (!result.success) {
            return c.json<GetServices400BadRequestResponse>(BAD_REQUEST_RESPONSE, 400);
        }
    }),
    async (c) => {
        const query = c.req.valid('query');
        console.log("Received query parameters:", query);

        //401
        //403
        //500

        const res = GET_SERVICES_RESPONSE;
        return c.json(res, 200);
    }
);

/** GET /services/{id} */
services.get(
    '/services/:id',
    async (c) => {
        const id = c.req.param('id');
        console.log("Received id:", id);
        
        //401
        //403
        //500

        const res = GET_SERVICES_BY_ID_RESPONSE.id === id ? GET_SERVICES_BY_ID_RESPONSE : undefined;

        //404
        if (!res) {
            return c.json<GetServicesById404BadRequestResponse>(NOT_FOUND_RESPONSE, 404);
        }
        return c.json(res, 200);
    }
);

export { services };