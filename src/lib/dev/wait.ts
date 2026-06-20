export async function wait(ms = 600): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, ms));
}

export async function waitInDevelopment(ms = 600): Promise<void> {
    if (process.env.NODE_ENV !== "development") {
        return;
    }

    await wait(ms);
}
