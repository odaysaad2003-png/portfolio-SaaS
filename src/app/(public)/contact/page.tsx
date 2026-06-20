import type { Metadata } from "next";

import { getContactData } from "@/features/contact/lib/data/contact.data";
import { mapContactData } from "@/features/contact/engine/contact-mapper";
import { ContactLayout } from "@/features/contact/layout/contact-layout";

export const metadata: Metadata = {
    title: "Contact — Build Something Scalable",
    description:
        "Start a conversation about SaaS systems, dashboards, platforms, and scalable product experiences.",
};

export default function ContactPage() {
    const contactData = getContactData();
    const data = mapContactData(contactData);

    return <ContactLayout data={data} />;
}
