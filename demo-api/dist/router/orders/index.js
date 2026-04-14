import { Hono } from 'hono';
import { DELETE_ORDER_RESPONSE, GET_ORDER_BY_ORDER_ID_RESPONSE, GET_ORDERS_BY_ORDER_ID_RESPONSE, POST_ORDER_RESPONSE } from '../../constants/orders/index.js';
import { postOrderRequestSchema } from '../../schemas/orders/index.js';
import { zValidator } from '@hono/zod-validator';
import z from 'zod';
const orders = new Hono();
/** POST /orders */
orders.post('/orders', zValidator('json', postOrderRequestSchema, (result, c) => {
    if (!result.success) {
        return c.json({
            message: "入力内容に誤りがあります",
        }, 400);
    }
}), async (c) => {
    const body = c.req.valid('json');
    console.log("Received order:", body);
    //401
    //404
    //409
    //500
    const res = POST_ORDER_RESPONSE;
    return c.json(res, 200);
});
/** GET /orders/by/order-id */
orders.get('/orders/by/order-id', async (c) => {
    const orderIds = c.req.query("order_ids");
    //400
    if (!orderIds) {
        return c.json({
            message: "クエリーパラメータでorder_idsを指定して下さい",
        }, 400);
    }
    const idList = orderIds.split(',');
    console.log("Received order_ids:", idList.map(Number));
    //401
    //404
    //409
    //500
    const res = GET_ORDERS_BY_ORDER_ID_RESPONSE;
    return c.json(res, 200);
});
/** GET /orders/by/order-id/{order_id} */
orders.get('/orders/by/order-id/:order_id', async (c) => {
    const orderId = c.req.param("order_id");
    //400
    if (!orderId) {
        return c.json({
            message: "パスパラメータでorder_idを指定して下さい",
        }, 400);
    }
    console.log("Received order_id:", orderId);
    //401
    //404
    //409
    //500
    const res = GET_ORDER_BY_ORDER_ID_RESPONSE;
    return c.json(res, 200);
});
/** DELETE /orders/by/order-id/{order_id} */
orders.delete('/orders/by/order-id/:order_id', async (c) => {
    const orderId = c.req.param("order_id");
    //400
    if (!orderId) {
        return c.json({
            message: "パスパラメータでorder_idを指定して下さい",
        }, 400);
    }
    console.log("Received order_id:", orderId);
    //401
    //404
    //409
    //500
    const res = DELETE_ORDER_RESPONSE;
    return c.json(res, 200);
});
export { orders };
