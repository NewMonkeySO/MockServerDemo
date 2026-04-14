import { z } from 'zod';
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
});
