import type { z } from 'zod';

import { registerFormSchema } from './schema';

export type RegisterFormValues = z.infer<typeof registerFormSchema>;
