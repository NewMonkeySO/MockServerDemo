import { Hono } from 'hono'
import { GET_ORDERS_BY_ORDER_ID_RESPONSE, POST_ORDER_RESPONSE } from '../../constants/orders/index.js';
import { postOrderRequestSchema, type DeleteOrderByOrderId400BadRequestResponse, type DeleteOrderByOrderId404NotFoundResponse, type DeleteOrderByOrderIdResponse, type GetOrderByOrderId400BadRequestResponse, type GetOrderByOrderId404NotFoundResponse, type GetOrderByOrderIdResponse, type GetOrdersByOrderId400BadRequestResponse, type PostOrder400BadRequestResponse } from '../../schemas/orders/index.js';
import { zValidator } from '@hono/zod-validator';

const orders = new Hono();

/** POST /orders */
orders.post(
    '/orders',
    zValidator('json', postOrderRequestSchema, (result, c) => {
        if (!result.success) {
            return c.json<PostOrder400BadRequestResponse>({
                message: "入力内容に誤りがあります",
            }, 400);
        }
    }),
    async (c) => {
        const body = c.req.valid('json');
        console.log("Received order:", body);

        //401
        //404
        //409
        //500

        const res = POST_ORDER_RESPONSE;
        return c.json(res, 200);
    }
);

/** GET /orders/by/order-id */
/** @TODO クエリーパラメーターに合わせてレスポンスを修正する */
orders.get(
    '/orders/by/order-id',
    async (c) => {
        const query = c.req.query("order_ids");
        const orderIds = query ? query.split(',') : undefined;
        console.log("Received order_ids:", orderIds);

        //400
        if(!orderIds) {
            return c.json<GetOrdersByOrderId400BadRequestResponse>({
                message: "クエリーパラメータが正しくありません",
            }, 400);
        }
        //401
        //404
        //409
        //500

        const res = GET_ORDERS_BY_ORDER_ID_RESPONSE;
        return c.json(res, 200);
    }
);

/** GET /orders/by/order-id/{order_id} */
orders.get(
    '/orders/by/order-id/:order_id',
    async (c) => {
        const orderId = c.req.param("order_id");
        console.log("Received order_id:", orderId);

        //400
        if (!orderId) {
            return c.json<GetOrderByOrderId400BadRequestResponse>({
                message: "パスパラメータが正しくありません",
            }, 400);
        }
        //401
        //409
        //500

        const res:GetOrderByOrderIdResponse = GET_ORDERS_BY_ORDER_ID_RESPONSE.find(order => order.order_id === orderId);

        //404
        if (!res) {
            return c.json<GetOrderByOrderId404NotFoundResponse>({
                message: `order_id{${orderId}}は見つかりませんでした`,
            }, 404);
        }

        return c.json(res, 200);
    }
);

/** DELETE /orders/by/order-id/{order_id} */
orders.delete(
    '/orders/by/order-id/:order_id',
    async (c) => {
        const orderId = c.req.param("order_id");
        console.log("Received order_id:", orderId);

        //400
        if (!orderId) {
            return c.json<DeleteOrderByOrderId400BadRequestResponse>({
                message: "パスパラメータが正しくありません",
            }, 400);
        }
        //401
        //409
        //500

        const target = GET_ORDERS_BY_ORDER_ID_RESPONSE.find(order => order.order_id === orderId);
        
        if (!target) {
            return c.json<DeleteOrderByOrderId404NotFoundResponse>({
                message: `order_id{${orderId}}は見つかりませんでした`,
            }, 404);
        }

        const res: DeleteOrderByOrderIdResponse = {
            id: target.id,
        };
        return c.json(res, 200);
    }
);

export { orders };