import { z } from "zod";
import type { paths, Readable } from "../../types/demand/index.d.js";

type StripStrict<T> = T extends object
  ? {
      [K in keyof T as string extends K ? never : number extends K ? never : K]: StripStrict<T[K]>;
    }
  : T;

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
}) satisfies z.ZodType<StripStrict<PostPassengerRequest>>;

export type PostPassengerRequest = paths["/passengers"]["post"]["requestBody"]["content"]["application/json"];
export type PostPassengerResponse = Readable<paths["/passengers"]["post"]["responses"]["201"]["content"]["application/json"]>;
export type PostPassenger400BadRequestResponse = paths["/passengers"]["post"]["responses"]["400"]["content"]["application/json"];

/** GET /passengers/{id} */
export type GetPassengerByIdResponse = Readable<paths["/passengers/{id}"]["get"]["responses"]["200"]["content"]["application/json"]>;
export type GetPassengerById404NotFoundResponse = paths["/passengers/{id}"]["get"]["responses"]["404"]["content"]["application/json"];

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
}) satisfies z.ZodType<StripStrict<PostPassengerRequest>>;

export type PutPassengerByIdResponse = Readable<paths["/passengers/{id}"]["put"]["responses"]["200"]["content"]["application/json"]>;
export type PutPassengerById400BadRequestResponse = paths["/passengers/{id}"]["put"]["responses"]["400"]["content"]["application/json"];
export type PutPassengerById404NotFoundResponse = paths["/passengers/{id}"]["put"]["responses"]["404"]["content"]["application/json"];

/** DELETE /passengers/{id} */
export type DeletePassengerById404NotFoundResponse = paths["/passengers/{id}"]["delete"]["responses"]["404"]["content"]["application/json"];

/** GET /passengers/{id}/services */
export const getPassengerByIdServicesQueryParametersSchema = z.object({
    service_ids: z.string().transform((val) => val.split(',')).optional(),
    name: z.string().optional(),
    prefecture_code: z.string().optional(),
    municipality_code: z.string().optional(),
    status: z.string()
        .optional()
        .transform((val) => val ? val.split(',') : undefined)
        .pipe(
            z.array(z.enum(['upcoming', 'active', 'ended'])).optional()
        ),
    offset: z.coerce.number().optional(),
    limit: z.coerce.number().optional(),
}) satisfies z.ZodType<GetPassengerByIdServicesQueryParameters>;

export type GetPassengerByIdServicesQueryParameters = paths["/passengers/{id}/services"]["get"]["parameters"]["query"];
export type GetPassengerByIdServicesResponse = Readable<paths["/passengers/{id}/services"]["get"]["responses"]["200"]["content"]["application/json"]>;
export type GetPassengerByIdServices400BadRequestResponse = paths["/passengers/{id}/services"]["get"]["responses"]["400"]["content"]["application/json"];
export type GetPassengerByIdServices404NotFoundResponse = paths["/passengers/{id}/services"]["get"]["responses"]["404"]["content"]["application/json"];

/** POST /passengers/{id}/agreements */
export const postPassengerAgreementsRequestSchema = z.object({
  agreements: z.array(
    z.object({
      terms_id: z.string(),
      agreed_at: z.string()
    })
  ),
}) satisfies z.ZodType<PostPassengerAgreementsRequest>;

export type PostPassengerAgreementsRequest = paths["/passengers/{id}/agreements"]["post"]["requestBody"]["content"]["application/json"];
export type PostPassengerAgreementsResponse = Readable<paths["/passengers/{id}/agreements"]["post"]["responses"]["200"]["content"]["application/json"]>;
export type PostPassengerAgreements400BadRequestResponse = paths["/passengers/{id}/agreements"]["post"]["responses"]["400"]["content"]["application/json"];
export type PostPassengerAgreements404NotFoundResponse = paths["/passengers/{id}/agreements"]["post"]["responses"]["404"]["content"]["application/json"];

/** GET /passengers/{id}/agreements */
export type GetPassengerAgreementsResponse = Readable<paths["/passengers/{id}/agreements"]["get"]["responses"]["200"]["content"]["application/json"]>;
export type GetPassengerAgreements400BadRequestResponse = paths["/passengers/{id}/agreements"]["get"]["responses"]["400"]["content"]["application/json"];
export type GetPassengerAgreements404NotFoundResponse = paths["/passengers/{id}/agreements"]["get"]["responses"]["404"]["content"]["application/json"];

/** GET /passengers/{id}/reservations */
export const getPassengerByIdReservationsQueryParametersSchema = z.object({
  pickup_date_from: z.string().optional(),
  pickup_date_to: z.string().optional(),
  reservation_ids: z.string().transform((val) => val.split(',')).optional(),
  status: z.string()
    .optional()
    .transform((val) => val ? val.split(',') : undefined)
    .pipe(
        z.array(z.enum(['tentative', 'confirmed', 'no_show', 'in_transit', 'completed', 'cancelled'])).optional()
    ),
  offset: z.coerce.number().optional(),
  limit: z.coerce.number().optional(),
}) satisfies z.ZodType<GetPassengerByIdReservationsQueryParameters>;

export type GetPassengerByIdReservationsQueryParameters = paths["/passengers/{id}/reservations"]["get"]["parameters"]["query"];
export type GetPassengerByIdReservationsResponse = Readable<paths["/passengers/{id}/reservations"]["get"]["responses"]["200"]["content"]["application/json"]>;
export type GetPassengerByIdReservations400BadRequestResponse = paths["/passengers/{id}/reservations"]["get"]["responses"]["400"]["content"]["application/json"];
export type GetPassengerByIdReservations404NotFoundResponse = paths["/passengers/{id}/reservations"]["get"]["responses"]["404"]["content"]["application/json"];