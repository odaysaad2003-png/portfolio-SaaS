import {ScrollToTopButton} from "./scroll-to-top-button";
import {WhatsappFloatingButton} from "./whatsapp-floating-button";

export function FloatingActions() {
    return (
        <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
            <ScrollToTopButton />
            <WhatsappFloatingButton />
        </div>
    );
}
