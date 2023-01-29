import { z } from 'zod';

export const registerSchema = z.object({
	pubId: z.string({ required_error: 'Public Address is required' }),
	username: z
		.string({ required_error: 'Username is required' })
		.min(5, { message: 'username must be at least 5 characters' })
		.max(20, { message: 'username must be less than 20 characters' }),
	email: z
		.string({ required_error: 'Email is required' })
		.email({ message: 'Email must be a valid email address' })
});
