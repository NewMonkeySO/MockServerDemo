import type { paths, Readable } from "../../types/demand/index.d.js";
import { z } from 'zod';

/** GET /vehicle-locations */
export const getVehicleLocationsQueryParametersSchema = z.object({
    vehicle_ids: z.string().transform((val) => val.split(',')).optional(),
    service_ids: z.string().transform((val) => val.split(',')).optional(),
    offset: z.coerce.number().optional(),
    limit: z.coerce.number().optional(),
}) satisfies z.ZodType<GetVehicleLocationsQueryParameters>;

export type GetVehicleLocationsQueryParameters = Readable<paths['/vehicle-locations']['get']['parameters']['query']>;
export type GetVehicleLocationsResponse = Readable<paths['/vehicle-locations']['get']['responses']['200']['content']['application/json']>;
export type GetVehicleLocations400BadRequestResponse = paths['/vehicle-locations']['get']['responses']['400']['content']['application/json'];