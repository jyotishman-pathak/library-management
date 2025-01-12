import { z } from 'zod';

export const SignUpSchema = z.object({
    fullname : z.string().min(3, 'Fullname must be at least 3 characters long')
    .max(255, 'Fullname must be at most 255 characters long'),
    email : z.string().email('Please enter a valid email address'),
    universityId: z.coerce.number(),
    universityCard : z.string().nonempty('Please upload a valid university card'),
    password : z.string().min(6, 'Password must be at least 6 characters long')


})


export const SignInSchema = z.object({ 
    email: z.string().email('Please enter a valid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long')

})