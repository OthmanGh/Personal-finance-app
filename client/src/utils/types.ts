import { z } from 'zod';

export const signupSchema = z
  .object({
    name: z.string().min(3, 'Name must contain at least 3 character(s)'),
    email: z.string().email(),
    password: z.string().min(8, 'Password must contain at least 8 character(s)'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords do not match',
  });

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, 'Password must contain at least 8 character(s)'),
});
