import { z } from "zod";
/** POST /passengers */
export const postPassengerRequestSchema = z.object({
    first_name: z.string().optional(),
    last_name: z.string().optional(),
    first_name_kana: z.string().optional(),
    last_name_kana: z.string().optional(),
    gender: z.enum(["male", "female", "other", "unspecified"]).optional(),
    birthdate: z.string().optional(),
    phone_number: z.string().optional(),
    email: z.string().optional(),
    home_address: z.object({
        postal_code: z.string().optional(),
        state: z.string().optional(),
        city: z.string().optional(),
        street: z.string().optional(),
        location: z.object({
            type: z.enum(["Point"]).optional(),
            coordinates: z.array(z.number()).length(2).optional(),
        }).optional(),
    }).optional(),
});
/** PUT /passengers/{id} */
export const putPassengerByIdRequestSchema = z.object({
    first_name: z.string().optional(),
    last_name: z.string().optional(),
    first_name_kana: z.string().optional(),
    last_name_kana: z.string().optional(),
    gender: z.enum(["male", "female", "other", "unspecified"]).optional(),
    birthdate: z.string().optional(),
    phone_number: z.string().optional(),
    email: z.string().optional(),
    home_address: z.object({
        postal_code: z.string().optional(),
        state: z.string().optional(),
        city: z.string().optional(),
        street: z.string().optional(),
        location: z.object({
            type: z.enum(["Point"]).optional(),
            coordinates: z.array(z.number()).length(2).optional(),
        }).optional(),
    }).optional(),
});
/** GET /passengers/{id}/services */
export const getPassengerByIdServicesQueryParametersSchema = z.object({
    service_ids: z.string().transform((val) => val.split(',')).optional(),
    name: z.string().optional(),
    prefecture_code: z.string().optional(),
    municipality_code: z.string().optional(),
    status: z.string()
        .optional()
        .transform((val) => val ? val.split(',') : undefined)
        .pipe(z.array(z.enum(['upcoming', 'active', 'ended'])).optional()),
    offset: z.coerce.number().optional(),
    limit: z.coerce.number().optional(),
});
/** POST /passengers/{id}/agreements */
export const postPassengerAgreementsRequestSchema = z.object({
    agreements: z.array(z.object({
        terms_id: z.string(),
        agreed_at: z.string()
    })),
});
/** GET /passengers/{id}/reservations */
export const getPassengerByIdReservationsQueryParametersSchema = z.object({
    pickup_date_from: z.string().optional(),
    pickup_date_to: z.string().optional(),
    reservation_ids: z.string().transform((val) => val.split(',')).optional(),
    status: z.string()
        .optional()
        .transform((val) => val ? val.split(',') : undefined)
        .pipe(z.array(z.enum(['tentative', 'confirmed', 'no_show', 'in_transit', 'completed', 'cancelled'])).optional()),
    offset: z.coerce.number().optional(),
    limit: z.coerce.number().optional(),
});
