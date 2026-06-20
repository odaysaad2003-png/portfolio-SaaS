import {z} from "zod";

export const contactFormSchema = z.object({
    name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(80, "Name must be less than 80 characters."),

    email: z.string().trim().email("Please enter a valid email address."),

    projectType: z.string().min(1, "Please select a project type."),

    budgetRange: z.string().optional(),

    message: z
    .string()
    .trim()
    .min(20, "Message must be at least 20 characters.")
    .max(2000, "Message must be less than 2000 characters."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
