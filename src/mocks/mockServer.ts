import { setupServer } from "msw/node";
import { handlers } from "./handlers";
import { afterAll, afterEach, beforeAll } from "vitest";

// For unit tests
export const initMockServer = () => {
    const server = setupServer(...handlers);

    beforeAll(() => server.listen({ onUnhandledRequest: "warn" }));
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    return server;
};
