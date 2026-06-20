import {NextResponse} from "next/server";
import {Resend} from "resend";

import {contactFormSchema} from "@/features/contact/lib/schema/contact-form.schema";

export async function POST(request: Request) {
    try {
        const apiKey = process.env.RESEND_API_KEY;
        const toEmail = process.env.CONTACT_TO_EMAIL;
        const fromEmail = process.env.CONTACT_FROM_EMAIL;

        if (!apiKey || !toEmail || !fromEmail) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Email service is not configured correctly.",
                },
                {status: 500}
            );
        }

        const body = await request.json();

        const result = contactFormSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Invalid form data.",
                    errors: result.error.flatten().fieldErrors,
                },
                {status: 400}
            );
        }

        const resend = new Resend(apiKey);

        const {name, email, projectType, budgetRange, message} = result.data;

        const {error} = await resend.emails.send({
            from: fromEmail,
            to: toEmail,
            replyTo: email,
            subject: `New portfolio contact message from ${name}`,
            text: `
New contact message

Name: ${name}
Email: ${email}
Project type: ${projectType}
Budget range: ${budgetRange ?? "Not provided"}

Message:
${message}
            `.trim(),
        });

        if (error) {
            console.error("Resend email error:", error);

            return NextResponse.json(
                {
                    success: false,
                    message: "Email provider failed to send the message.",
                },
                {status: 502}
            );
        }

        return NextResponse.json({
            success: true,
            message: "Message sent successfully.",
        });
    } catch (error) {
        console.error("Contact API error:", error);

        return NextResponse.json(
            {
                success: false,
                message: "Something went wrong while sending the message.",
            },
            {status: 500}
        );
    }
}
