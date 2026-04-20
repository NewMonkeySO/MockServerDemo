
import { z } from 'zod';
import type { paths, Readable, Writable } from '../../types/taxi/index.d.js';

/** POST /orders */
export const postOrderRequestSchema = z.object({
  order_id: z.string().optional(),
  company_id: z.number(),
  phone_number: z.string(),
  email: z.string().optional(),
  passenger_name: z.string().optional(),
  passenger_name_yomi: z.string().optional(),
  location_name: z.string().optional(),
  location_address: z.string().optional(),
  location_lat: z.number(),
  location_lng: z.number(),
  destination_name: z.string().optional(),
  destination_address: z.string().optional(),
  destination_lat: z.number().optional(),
  destination_lng: z.number().optional(),
  reserve_at: z.string().optional(),
  requested_pickup_at: z.string().optional(),
  message: z.string().optional(),
  in_app_payment: z.boolean().optional(),
}) satisfies z.ZodType<PostOrderRequest>;

export type PostOrderRequest = Writable<paths["/orders"]["post"]["requestBody"]["content"]["application/json"]>;
export type PostOrderResponse = Readable<paths["/orders"]["post"]["responses"]["200"]["content"]["application/json"]>;
export type PostOrder400BadRequestResponse = paths["/orders"]["post"]["responses"]["400"]["content"]["application/json"];

/** GET /orders/by/order-id */
export type GetOrdersByOrderIdResponse = Readable<paths["/orders/by/order-id"]["get"]["responses"]["200"]["content"]["application/json"]>;
export type GetOrdersByOrderId400BadRequestResponse = paths["/orders/by/order-id"]["get"]["responses"]["400"]["content"]["application/json"];

/** GET /orders/by/order-id/{order_id} */
export type GetOrderByOrderIdResponse = Readable<paths["/orders/by/order-id/{order_id}"]["get"]["responses"]["200"]["content"]["application/json"]> | undefined;
export type GetOrderByOrderId400BadRequestResponse = paths["/orders/by/order-id/{order_id}"]["get"]["responses"]["400"]["content"]["application/json"];
export type GetOrderByOrderId404NotFoundResponse = paths["/orders/by/order-id/{order_id}"]["get"]["responses"]["404"]["content"]["application/json"];

/** DELETE /orders/by/order-id/{order_id} */
export type DeleteOrderByOrderIdResponse = Readable<paths["/orders/by/order-id/{order_id}"]["delete"]["responses"]["200"]["content"]["application/json"]>;
export type DeleteOrderByOrderId400BadRequestResponse = paths["/orders/by/order-id/{order_id}"]["delete"]["responses"]["400"]["content"]["application/json"];
export type DeleteOrderByOrderId404NotFoundResponse = paths["/orders/by/order-id/{order_id}"]["delete"]["responses"]["404"]["content"]["application/json"];