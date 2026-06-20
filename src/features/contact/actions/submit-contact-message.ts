import {contactFormSchema, type ContactFormValues} from "@/features/contact/lib/schema/contact-form.schema";

export type SubmitContactMessageResult = {
    success: boolean;
    message: string;
};

export async function submitContactMessage(values: ContactFormValues): Promise<SubmitContactMessageResult> {
    const result = contactFormSchema.safeParse(values);

    if (!result.success) {
        return {
            success: false,
            message: "Invalid contact form data.",
        };
    }

    try {
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(result.data),
        });

        const contentType = response.headers.get("content-type");

        if (!contentType?.includes("application/json")) {
            return {
                success: false,
                message: "Server returned an invalid response.",
            };
        }

        const responseData = (await response.json()) as SubmitContactMessageResult;

        if (!response.ok) {
            return {
                success: false,
                message: responseData.message || "Failed to send message.",
            };
        }

        return {
            success: true,
            message: responseData.message || "Message sent successfully.",
        };
    } catch (error) {
        console.error("Submit contact message error:", error);

        return {
            success: false,
            message: "Network error. Please try again later.",
        };
    }
}
