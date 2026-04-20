import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono';
import { getVehicleLocationsQueryParametersSchema } from '../../schemas/vehicles/index.js';
import { GET_VEHICLE_LOCATIONS_RESPONSE } from '../../constants/vehicles/index.js';
import { BAD_REQUEST_RESPONSE } from '../../constants/errorCode/index.js';
const vehicles = new Hono();
/** GET /vehicle-locations */
/** @TODO クエリーパラメーターに合わせてレスポンスを修正する */
vehicles.get('/vehicle-locations', zValidator('query', getVehicleLocationsQueryParametersSchema, (result, c) => {
    if (!result.success) {
        return c.json(BAD_REQUEST_RESPONSE, 400);
    }
}), async (c) => {
    const query = c.req.valid("query");
    console.log("Received query parameters:", query);
    //401
    //403
    //500
    const res = GET_VEHICLE_LOCATIONS_RESPONSE;
    return c.json(res, 200);
});
export { vehicles };
