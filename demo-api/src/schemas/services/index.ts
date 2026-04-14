import type { paths, Readable, Writable } from "../../openapi-typescript/demand/index.js";
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
        .pipe(
            z.array(z.enum(['upcoming', 'active', 'ended'])).optional()
        ),
    offset: z.coerce.number().optional(),
    limit: z.coerce.number().optional(),
}) satisfies z.ZodType<GetServicesQueryParameters>;

export type GetServicesQueryParameters = Writable<paths["/services"]["get"]["parameters"]["query"]>;
export type GetServicesResponse = Readable<paths["/services"]["get"]["responses"]["200"]["content"]["application/json"]>;
export type GetServices400BadRequestResponse = paths["/services"]["get"]["responses"]["400"]["content"]["application/json"];

/** GET /services/{id} */
export type GetServicesByIdResponse = Readable<paths["/services/{id}"]["get"]["responses"]["200"]["content"]["application/json"]>;
export type GetServicesById404BadRequestResponse = paths["/services/{id}"]["get"]["responses"]["404"]["content"]["application/json"];