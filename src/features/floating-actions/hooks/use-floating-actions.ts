"use client";

import {useCallback} from "react";

import {buildWhatsappUrl, floatingActionsConfig} from "../lib/floating-actions.config";
import type {FloatingActionsContextValue} from "../types/floating-actions";
import {useScrollThreshold} from "./use-scroll-threshold";

export function useFloatingActions(): FloatingActionsContextValue {
    const {whatsapp, scrollTop} = floatingActionsConfig;

    const whatsappUrl = buildWhatsappUrl(whatsapp.phoneNumber, whatsapp.defaultMessage);
    const showScrollTop = useScrollThreshold(scrollTop.threshold);

    const scrollToTop = useCallback(() => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }, []);

    return {whatsappUrl, showScrollTop, scrollToTop};
}
