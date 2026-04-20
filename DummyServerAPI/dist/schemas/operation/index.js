import { z } from 'zod';
/** GET /operation-delays */
export const getOperationDelaysQueryParametersSchema = z.object({
    status: z.string()
        .optional()
        .transform((val) => val ? val.split(',') : undefined)
        .pipe(z.array(z.enum(['active', 'resolved'])).optional()),
    vehicle_ids: z.string().transform((val) => val.split(',')).optional(),
    service_ids: z.string().transform((val) => val.split(',')).optional(),
    started_at_from: z.string().optional(),
    started_at_to: z.string().optional(),
    offset: z.coerce.number().optional(),
    limit: z.coerce.number().optional(),
});
