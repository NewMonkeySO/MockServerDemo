import { z } from 'zod';
/** GET /vehicle-locations */
export const getVehicleLocationsQueryParametersSchema = z.object({
    vehicle_ids: z.string().transform((val) => val.split(',')).optional(),
    service_ids: z.string().transform((val) => val.split(',')).optional(),
    offset: z.coerce.number().optional(),
    limit: z.coerce.number().optional(),
});
