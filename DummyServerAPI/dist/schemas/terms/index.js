import { z } from 'zod';
/** GET /terms */
export const getTermsQueryParametersSchema = z.object({
    category: z.enum(["platform", "privacy", "cancellation", "user", "provider", "third_party"]).optional(),
});
