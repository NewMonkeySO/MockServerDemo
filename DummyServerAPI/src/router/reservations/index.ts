import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono'
import { GET_RESERVATIONS_ID_PAYMENT_RESPONSE, POST_RESERVATIONS_CANDIDATES_RESPONSE, POST_RESERVATIONS_RESPONSE, PUT_RESERVATIONS_ID_PAYMENT_RESPONSE, PUT_RESERVATIONS_ID_RESPONSE } from '../../constants/reservations/index.js';
import { postReservationsCandidatesRequestSchema, postReservationsRequestSchema, putReservationsIdPaymentRequestSchema, putReservationsIdRequestSchema, type GetReservationsIdPayment404NotFoundResponse, type PostReservations400BadRequestResponse, type PostReservationsCandidates400BadRequestResponse, type PutReservationsId400BadRequestResponse, type PutReservationsId404NotFoundResponse, type PutReservationsIdPayment400BadRequestResponse, type PutReservationsIdPayment404NotFoundResponse } from '../../schemas/reservations/index.js';
import { BAD_REQUEST_RESPONSE, NOT_FOUND_RESPONSE } from '../../constants/errorCode/index.js';

const reservations = new Hono();

/** POST /reservations/candidates */
reservations.post(
    '/reservations/candidates',
    zValidator('json', postReservationsCandidatesRequestSchema, (result, c) => {
        if (!result.success) {
            return c.json<PostReservationsCandidates400BadRequestResponse>(BAD_REQUEST_RESPONSE, 400);
        }
    }), 
    async (c) => {
        const body = c.req.valid('json');
        console.log("Received reservation candidate request:", body);

        //401
        //403
        //500

        const res = POST_RESERVATIONS_CANDIDATES_RESPONSE;
        return c.json(res, 200);
    }
);

/** POST /reservations */
reservations.post(
    '/reservations',
    zValidator('json', postReservationsRequestSchema, (result, c) => {
        if (!result.success) {
            return c.json<PostReservations400BadRequestResponse>(BAD_REQUEST_RESPONSE, 400);
        }
    }),
    async (c) => {
        const body = c.req.valid('json');
        console.log("Received reservation request:", body);

        //401
        //403
        //500

        const res = POST_RESERVATIONS_RESPONSE
        return c.json(res, 200);
    }
);

/** PUT /reservations/:id */
reservations.put(
    '/reservations/:id',
    zValidator('json', putReservationsIdRequestSchema, (result, c) => {
        if (!result.success) {
            return c.json<PutReservationsId400BadRequestResponse>(BAD_REQUEST_RESPONSE, 400);
        }
    }),
    async (c) => {
        const id = c.req.param('id');
        const body = c.req.valid('json');
        console.log("Path parameters:", id);
        console.log("Received reservation update request:", body);

        //400
        if(!id){
            return c.json<PutReservationsId400BadRequestResponse>(BAD_REQUEST_RESPONSE, 400);
        }
        //401
        //403
        //500

        const res = PUT_RESERVATIONS_ID_RESPONSE.id === id ? PUT_RESERVATIONS_ID_RESPONSE : undefined;

        if (!res) {
            return c.json<PutReservationsId404NotFoundResponse>(NOT_FOUND_RESPONSE,404);
        }
        return c.json(res, 200);
    }
);

/** GET /reservations/:id/payment */
reservations.get(
    '/reservations/:id/payment',
    async (c) => {
        const id = c.req.param('id');
        console.log("Path parameters:", id);

        //401
        //403
        //500

        const res = GET_RESERVATIONS_ID_PAYMENT_RESPONSE.id === id ? GET_RESERVATIONS_ID_PAYMENT_RESPONSE : undefined;

        if (!res) {
            return c.json<GetReservationsIdPayment404NotFoundResponse>(NOT_FOUND_RESPONSE,404);
        }
        return c.json(res, 200);
    }
);

/** PUT /reservations/:id/payment */
reservations.put(
    '/reservations/:id/payment',
    zValidator('json', putReservationsIdPaymentRequestSchema, (result, c) => {
        if (!result.success) {
            return c.json<PutReservationsIdPayment400BadRequestResponse>(BAD_REQUEST_RESPONSE,400);
        }
    }),
    async (c) => {
        const id = c.req.param('id');
        const body = c.req.valid('json');
        console.log("Path parameters:", id);
        console.log("Received reservation payment update request:", body);

        //401
        //403
        //500

        if(!id){
            return c.json<PutReservationsIdPayment400BadRequestResponse>(BAD_REQUEST_RESPONSE, 400);
        }

        const res = PUT_RESERVATIONS_ID_PAYMENT_RESPONSE.id === id ? PUT_RESERVATIONS_ID_PAYMENT_RESPONSE : undefined;

        if(!res) {
            return c.json<PutReservationsIdPayment404NotFoundResponse>(NOT_FOUND_RESPONSE,404);
        }
        return c.json(res, 200);
    }
);

export { reservations };
