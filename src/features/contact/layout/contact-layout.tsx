import type { ContactViewModel } from "@/features/contact/types/contact";
import { ContactHero } from "@/features/contact/components/contact-hero";
import { ContactOptions } from "@/features/contact/components/contact-options";
import { ContactFit } from "@/features/contact/components/contact-fit";
import { ContactForm } from "@/features/contact/components/contact-form";

type ContactLayoutProps = {
    data: ContactViewModel;
};

export function ContactLayout({ data }: ContactLayoutProps) {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <ContactHero data={data.hero} />
            <ContactOptions options={data.options} />
            <ContactFit items={data.fitItems} />
            <ContactForm data={data.form} />
        </main>
    );
}
