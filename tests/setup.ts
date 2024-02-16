import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';
import { initMockServer } from '../src/mocks/mockServer';

export const mockServer = initMockServer();

afterEach(() => {
    cleanup();
});