import { z } from 'zod';
/** GET /stops */
export const getStopsQueryParametersSchema = z.object({
    stop_ids: z.string().transform((val) => val.split(',')).optional(),
    service_ids: z.string().transform((val) => val.split(',')).optional(),
    name: z.string().optional(),
    status: z.string()
        .optional()
        .transform((val) => val ? val.split(',') : undefined)
        .pipe(z.array(z.enum(['upcoming', 'active', 'ended'])).optional()),
    location: z.string().optional(),
    radius: z.coerce.number().optional(),
    offset: z.coerce.number().optional(),
    limit: z.coerce.number().optional(),
});
