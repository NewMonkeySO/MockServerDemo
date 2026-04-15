import { z } from 'zod';
/** GET /services */
export const getServicesQueryParametersSchema = z.object({
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
