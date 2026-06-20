export type WhatsappConfig = {
    phoneNumber: string;
    defaultMessage: string;
};

export type ScrollTopConfig = {
    threshold: number;
};

export type FloatingActionsConfig = {
    whatsapp: WhatsappConfig;
    scrollTop: ScrollTopConfig;
};

export type FloatingActionsContextValue = {
    whatsappUrl: string;
    showScrollTop: boolean;
    scrollToTop: () => void;
};
