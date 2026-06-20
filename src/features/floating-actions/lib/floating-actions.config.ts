import type {FloatingActionsConfig} from "../types/floating-actions";

export const floatingActionsConfig: FloatingActionsConfig = {
    whatsapp: {
        // Digits only, country code first, no "+" and no spaces. Example: "970599123456"
        phoneNumber: "972597655228",
        defaultMessage: "Hi Oday, I'd like to discuss a project.",
    },
    scrollTop: {
        threshold: 500,
    },
};

export function buildWhatsappUrl(phoneNumber: string, message: string): string {
    const sanitizedPhone = phoneNumber.replace(/\D/g, "");
    const encodedMessage = encodeURIComponent(message);

    return `https://wa.me/${sanitizedPhone}?text=${encodedMessage}`;
}
