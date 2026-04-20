import { z } from 'zod';
const fixedStopSchema = z.object({
    type: z.literal("fixed_stop"),
    stop_id: z.string(),
});
const customLocationSchema = z.object({
    type: z.literal("custom_location"),
    location: z.object({
        type: z.enum(["Point"]),
        coordinates: z.tuple([z.number(), z.number()]),
    }),
});
const homeSchema = z.object({
    type: z.literal("home"),
    passenger_id: z.string(),
});
/** POST /reservations/candidates */
export const postReservationsCandidatesRequestSchema = z.object({
    service_ids: z.array(z.string()),
    preferred_time: z.object({
        type: z.enum(["pickup", "dropoff"]),
        datetime: z.string(),
    }),
    pickup: z.union([fixedStopSchema, customLocationSchema, homeSchema]),
    dropoff: z.union([fixedStopSchema, customLocationSchema, homeSchema]),
    passenger_count: z.array(z.object({
        passenger_type_id: z.string(),
        count: z.coerce.number().positive().min(1),
    })),
    accessibility_feature_count: z.array(z.object({
        accessibility_feature_type: z.enum(['wheelchair', 'folding_wheelchair', 'powered_wheelchair', 'oversized_wheelchair', 'scooter', 'oversized_scooter', 'walker', 'oversized_walker', 'only_car_walker', 'only_car_rider', 'extra_space_ambulant', 'actual_door_to_door', 'lift', 'oversized_item', 'stroller', 'child_seat_baby', 'child_seat_young', 'bike', 'white_cane', 'service_animal', 'oxygen_tank', 'stretcher']),
        count: z.coerce.number().min(1),
    })),
    vehicle_id: z.string().optional(),
});
/** POST /reservations */
const reservationFixedStopSchema = fixedStopSchema.extend({
    location: z.object({
        type: z.enum(["Point"]),
        coordinates: z.tuple([z.number(), z.number()]),
    }),
    datetime: z.string(),
});
const reservationCustomLocationSchema = customLocationSchema.extend({
    datetime: z.string(),
});
const reservationHomeSchema = homeSchema.extend({
    location: z.object({
        type: z.enum(["Point"]),
        coordinates: z.tuple([z.number(), z.number()]),
    }),
    datetime: z.string(),
});
export const postReservationsRequestSchema = z.object({
    passenger_id: z.string(),
    candidate_id: z.string(),
    service_id: z.string(),
    pickup: z.union([reservationFixedStopSchema, reservationCustomLocationSchema, reservationHomeSchema]),
    dropoff: z.union([reservationFixedStopSchema, reservationCustomLocationSchema, reservationHomeSchema]),
    passenger_count: z.array(z.object({
        passenger_type_id: z.string(),
        count: z.coerce.number().positive().min(1),
    })),
    accessibility_feature_count: z.array(z.object({
        accessibility_feature_type: z.enum(['wheelchair', 'folding_wheelchair', 'powered_wheelchair', 'oversized_wheelchair', 'scooter', 'oversized_scooter', 'walker', 'oversized_walker', 'only_car_walker', 'only_car_rider', 'extra_space_ambulant', 'actual_door_to_door', 'lift', 'oversized_item', 'stroller', 'child_seat_baby', 'child_seat_young', 'bike', 'white_cane', 'service_animal', 'oxygen_tank', 'stretcher']),
        count: z.coerce.number().min(1),
    })),
    vehicle_id: z.string().optional(),
});
/** PUT /reservations/:id */
const reservationUpdateFixedStopSchema = fixedStopSchema.extend({
    display_name: z.string(),
    location: z.object({
        type: z.enum(["Point"]),
        coordinates: z.tuple([z.number(), z.number()]),
    }).optional(),
    datetime: z.string().optional(),
});
const reservationUpdateCustomLocationSchema = z.object({
    type: z.literal("custom_location"),
    display_name: z.string(),
    location: z.object({
        type: z.enum(["Point"]),
        coordinates: z.tuple([z.number(), z.number()]),
    }).optional(),
    datetime: z.string().optional(),
});
const reservationUpdateHomeSchema = homeSchema.extend({
    display_name: z.string(),
    location: z.object({
        type: z.enum(["Point"]),
        coordinates: z.tuple([z.number(), z.number()]),
    }).optional(),
    datetime: z.string().optional(),
});
export const putReservationsIdRequestSchema = z.object({
    passenger_id: z.string(),
    status: z.enum(["tentative", "confirmed", "no_show", "in_transit", "completed", "cancelled"]),
    service_id: z.string(),
    pickup: z.union([reservationUpdateFixedStopSchema, reservationUpdateCustomLocationSchema, reservationUpdateHomeSchema]),
    dropoff: z.union([reservationUpdateFixedStopSchema, reservationUpdateCustomLocationSchema, reservationUpdateHomeSchema]),
    passenger_count: z.array(z.object({
        passenger_type_id: z.string(),
        count: z.coerce.number().positive().min(1),
    })),
    accessibility_feature_count: z.array(z.object({
        accessibility_feature_type: z.enum(['wheelchair', 'folding_wheelchair', 'powered_wheelchair', 'oversized_wheelchair', 'scooter', 'oversized_scooter', 'walker', 'oversized_walker', 'only_car_walker', 'only_car_rider', 'extra_space_ambulant', 'actual_door_to_door', 'lift', 'oversized_item', 'stroller', 'child_seat_baby', 'child_seat_young', 'bike', 'white_cane', 'service_animal', 'oxygen_tank', 'stretcher']),
        count: z.coerce.number().min(1),
    })),
    vehicle_id: z.string().optional(),
});
/** PUT /reservations/:id/payment */
export const putReservationsIdPaymentRequestSchema = z.object({
    amount: z.coerce.number().positive(),
    payment_status: z.enum(["uncollected", "received", "excluded", "cancelled"]),
});
