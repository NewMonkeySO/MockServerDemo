import { Hono } from 'hono';
import { POST_PASSENGERS_RESPONSE } from '../../constants/passengers/index.js';
const passengers = new Hono();
/** POST /passengers */
passengers.post('/passengers', async (c) => {
    const body = await c.req.json();
    console.log("Received passenger:", body);
    //400
    //401
    //403
    //500
    const res = POST_PASSENGERS_RESPONSE;
    return c.json(res, 201);
});
/** GET /passengers/{id} */
passengers.get('/passengers/:id', async (c) => {
    const id = c.req.param("id");
    if (!id) {
        return c.json({ message: "id is required" }, 400);
    }
    console.log("Received request for passenger with ID:", id);
    //400
    //401
    //403
    //404
    //500
    const res = POST_PASSENGERS_RESPONSE;
    return c.json(res, 200);
});
export { passengers };
