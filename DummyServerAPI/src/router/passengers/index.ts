import { zValidator } from '@hono/zod-validator';
import { Hono } from 'hono'
import { GET_PASSENGER_AGREEMENTS_RESPONSE, GET_PASSENGER_BY_ID_RESERVATIONS_RESPONSE, GET_PASSENGER_BY_ID_RESPONSE, GET_PASSENGER_BY_ID_SERVICES_RESPONSE, POST_PASSENGER_BY_ID_AGREEMENTS_RESPONSE, POST_PASSENGER_RESPONSE, PUT_PASSENGER_BY_ID_RESPONSE } from '../../constants/passengers/index.js';
import { getPassengerByIdReservationsQueryParametersSchema, getPassengerByIdServicesQueryParametersSchema, postPassengerAgreementsRequestSchema, postPassengerRequestSchema, putPassengerByIdRequestSchema, type DeletePassengerById404NotFoundResponse, type GetPassengerAgreements400BadRequestResponse, type GetPassengerAgreements404NotFoundResponse, type GetPassengerByIdReservations400BadRequestResponse, type GetPassengerByIdReservations404NotFoundResponse, type GetPassengerByIdServices400BadRequestResponse, type GetPassengerByIdServices404NotFoundResponse, type PostPassenger400BadRequestResponse, type PostPassengerAgreements400BadRequestResponse, type PostPassengerAgreements404NotFoundResponse, type PutPassengerById400BadRequestResponse } from '../../schemas/passengers/index.js';
import { BAD_REQUEST_RESPONSE, NOT_FOUND_RESPONSE } from '../../constants/errorCode/index.js';

const passengers = new Hono();

/** POST /passengers */
passengers.post(
    '/passengers',
    zValidator('json', postPassengerRequestSchema, (result, c) => {
        if (!result.success) {
            return c.json<PostPassenger400BadRequestResponse>(BAD_REQUEST_RESPONSE, 400);
        }
    }),
    async (c) => {
        const body = c.req.valid('json');
        console.log("Received passenger:", body);
        
        //401
        //403
        //500

        const res = POST_PASSENGER_RESPONSE;
        return c.json(res, 200);
    }
);

/** GET /passengers/{id} */
passengers.get(
    '/passengers/:id',
    async (c) => {
        const id = c.req.param('id');
        console.log("Received passenger id:", id);
        
        //401
        //403
        //500

        const res = GET_PASSENGER_BY_ID_RESPONSE.id === id ? GET_PASSENGER_BY_ID_RESPONSE : undefined;

        if (!res) {
            return c.json(NOT_FOUND_RESPONSE, 404);
        }
        return c.json(res, 200);
    }
);

/** PUT /passengers/{id} */
passengers.put(
    '/passengers/:id',
    zValidator('json', putPassengerByIdRequestSchema, (result, c) => {
        if (!result.success) {
            return c.json<PutPassengerById400BadRequestResponse>(BAD_REQUEST_RESPONSE, 400);
        }
    }),
    async (c) => {
        const id = c.req.param('id');
        const body = c.req.valid('json');
        console.log("Received passenger id:", id);
        console.log("Received passenger update data:", body);
        
        //401
        //403
        //500

        const res = PUT_PASSENGER_BY_ID_RESPONSE.id === id ? PUT_PASSENGER_BY_ID_RESPONSE : undefined;

        if (!res) {
            return c.json(NOT_FOUND_RESPONSE, 404);
        }
        return c.json(res, 200);
    }
);

/** DELETE /passengers/{id} */
passengers.delete(
    '/passengers/:id',
    async (c) => {
        const id = c.req.param('id');
        console.log("Received passenger id:", id);
        
        //401
        //403
        //500

        const res = GET_PASSENGER_BY_ID_RESPONSE.id === id ? GET_PASSENGER_BY_ID_RESPONSE : undefined;

        if (!res) {
            return c.json<DeletePassengerById404NotFoundResponse>(NOT_FOUND_RESPONSE, 404);
        }
        return c.body(null, 204);
    }
);

/** GET /passengers/{id}/services */
/** @TODO クエリーパラメーターに合わせてレスポンスを修正する */
passengers.get(
    '/passengers/:id/services',
    zValidator('query', getPassengerByIdServicesQueryParametersSchema,(result, c) => {
        if (!result.success) {
            return c.json<GetPassengerByIdServices400BadRequestResponse>(BAD_REQUEST_RESPONSE, 400);
        }
    }),
    async (c) => {
        const id = c.req.param('id');
        const query = c.req.valid('query');
        console.log("Received query parameters:", query);

        //401
        //403
        //500

        const res = GET_PASSENGER_BY_ID_SERVICES_RESPONSE;

        if (!res) {
            return c.json<GetPassengerByIdServices404NotFoundResponse>(NOT_FOUND_RESPONSE, 404);
        }
        return c.json(res, 200);
    }
);

/** POST /passengers/{id}/agreements  */
passengers.post(
    '/passengers/:id/agreements',
    zValidator('json', postPassengerAgreementsRequestSchema, (result, c) => {
        if (!result.success) {
            return c.json<PostPassengerAgreements400BadRequestResponse>(BAD_REQUEST_RESPONSE, 400);
        }
    }),
    async (c) => {
        const id = c.req.param('id');
        const body = await c.req.valid('json');
        console.log("Received passenger id:", id);
        console.log("Received agreements data:", body);

        //401
        //403
        //500

        const res = POST_PASSENGER_BY_ID_AGREEMENTS_RESPONSE;

        if (!res) {
            return c.json<PostPassengerAgreements404NotFoundResponse>(NOT_FOUND_RESPONSE, 404);
        }
        return c.json(res, 200);
    }
);

/** GET /passengers/{id}/agreements */
/** @TODO パラメーターに合わせてレスポンスを修正する */
passengers.get(
    '/passengers/:id/agreements',
    async (c) => {
        const id = c.req.param('id');
        const query = c.req.query('query');
        console.log("Received passenger id:", id);
        console.log("Received query parameters:", query);

        //400
        if(!id){
            return c.json<GetPassengerAgreements400BadRequestResponse>(BAD_REQUEST_RESPONSE, 400);
        }
        //401
        //403
        //500

        const res = GET_PASSENGER_AGREEMENTS_RESPONSE
        if (!res) {
            return c.json<GetPassengerAgreements404NotFoundResponse>(NOT_FOUND_RESPONSE, 404);
        }
        return c.json(res, 200);
    }
);

/** GET passengers/{id}/reservations */
/** @TODO パラメーターに合わせてレスポンスを修正する */
passengers.get(
    '/passengers/:id/reservations',
    zValidator('query', getPassengerByIdReservationsQueryParametersSchema, (result, c) => {
        if (!result.success) {
            return c.json<GetPassengerByIdReservations400BadRequestResponse>(BAD_REQUEST_RESPONSE, 400);
        }
    }),
    async (c) => {
        const id = c.req.param('id');
        const query = c.req.valid('query');
        console.log("Received passenger id:", id);
        console.log("Received query parameters:", query);

        if(!id){
            return c.json<GetPassengerByIdReservations400BadRequestResponse>(BAD_REQUEST_RESPONSE, 400);
        }
        //401
        //403
        //500

        const res = GET_PASSENGER_BY_ID_RESERVATIONS_RESPONSE;
        
        if (!res) {
            return c.json<GetPassengerByIdReservations404NotFoundResponse>(NOT_FOUND_RESPONSE, 404);
        }
        return c.json(res, 200);
    }
);

export { passengers };