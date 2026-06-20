// ---------------------------------------------------------------------------
// Shared primitives
// ---------------------------------------------------------------------------

export type ContactStat = {
    id: string;
    label: string;
    value: string;
};

export type ContactOptionIcon = "email" | "github" | "linkedin";

export type ContactOption = {
    id: string;
    label: string;
    description: string;
    href: string;
    external: boolean;
    icon: ContactOptionIcon;
};

export type ProjectFitItem = {
    id: string;
    title: string;
    description: string;
};

export type SelectOption = {
    id: string;
    label: string;
    value: string;
};

// ---------------------------------------------------------------------------
// Raw data shape — what lives in contact.data.ts (source of truth)
// ---------------------------------------------------------------------------

export type ContactHeroRaw = {
    badge: string;
    headline: string;
    subheadline: string;
    availabilityNote: string;
    stats: ContactStat[];
};

export type ContactData = {
    hero: ContactHeroRaw;
    options: ContactOption[];
    fitItems: ProjectFitItem[];

    /**
     * Project types are simple labels because their form values can be safely
     * generated from the label.
     */
    projectTypes: string[];

    /**
     * Budget ranges are explicit options because their values should stay
     * stable and semantic instead of being generated from currency text.
     */
    budgetRanges: SelectOption[];

    responseExpectation: string;
    frontendOnlyNote: string;
    formTitle: string;
    formDescription: string;
};

// ---------------------------------------------------------------------------
// UI-ready shape — what the mapper produces and components consume
// ---------------------------------------------------------------------------

export type ContactHeroData = ContactHeroRaw;

export type ContactFormData = {
    title: string;
    description: string;
    projectTypeOptions: SelectOption[];
    budgetRangeOptions: SelectOption[];
    responseExpectation: string;
    frontendOnlyNote: string;
};

export type ContactViewModel = {
    hero: ContactHeroData;
    options: ContactOption[];
    fitItems: ProjectFitItem[];
    form: ContactFormData;
};
