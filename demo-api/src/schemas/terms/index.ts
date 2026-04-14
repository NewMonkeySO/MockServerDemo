import type { paths, Readable } from "../../openapi-typescript/demand/index.js";
import { z } from 'zod';

/** GET /terms */
export const getTermsQueryParametersSchema = z.object({
    category: z.enum(["platform", "privacy", "cancellation", "user", "provider", "third_party"]).optional(),
}) satisfies z.ZodType<GetTermsQueryParameters>;

export type GetTermsQueryParameters = paths["/terms"]["get"]["parameters"]["query"];
export type GetTermsResponse = Readable<paths["/terms"]["get"]["responses"]["200"]["content"]["application/json"]>;
export type GetTerms400BadRequestResponse = paths["/terms"]["get"]["responses"]["400"]["content"]["application/json"];