import type {ContactData, ContactViewModel, SelectOption} from "@/features/contact/types/contact";

/**
 * Converts a plain label (e.g. "SaaS Dashboard") into a stable, URL/form-safe
 * value (e.g. "saas-dashboard") while preserving the original label for display.
 */
function toSelectOption(label: string): SelectOption {
    const value = label
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

    return {id: value, label, value};
}

export function mapContactData(data: ContactData): ContactViewModel {
    return {
        hero: data.hero,

        options: data.options,

        fitItems: data.fitItems,

        form: {
            title: data.formTitle,
            description: data.formDescription,
            projectTypeOptions: data.projectTypes.map(toSelectOption),
            budgetRangeOptions: data.budgetRanges,
            responseExpectation: data.responseExpectation,
            frontendOnlyNote: data.frontendOnlyNote,
        },
    };
}
