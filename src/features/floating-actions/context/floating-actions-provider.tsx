"use client";

import {createContext, useContext, type ReactNode} from "react";

import {useFloatingActions} from "../hooks/use-floating-actions";
import type {FloatingActionsContextValue} from "../types/floating-actions";

const FloatingActionsContext = createContext<FloatingActionsContextValue | null>(null);

export function FloatingActionsProvider({children}: {children: ReactNode}) {
    const value = useFloatingActions();

    return <FloatingActionsContext.Provider value={value}>{children}</FloatingActionsContext.Provider>;
}

export function useFloatingActionsContext(): FloatingActionsContextValue {
    const context = useContext(FloatingActionsContext);

    if (!context) {
        throw new Error("useFloatingActionsContext must be used within a FloatingActionsProvider");
    }

    return context;
}
