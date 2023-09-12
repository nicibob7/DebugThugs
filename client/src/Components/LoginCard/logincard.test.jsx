import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import LoginCard from '.';
import { BrowserRouter } from 'react-router-dom';

describe('LoginCard component', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <LoginCard />
            </BrowserRouter>
        );
    });

    it('renders a login form', () => {
        const form = screen.getByRole('form');
        expect(form).toBeInTheDocument();
    });

    afterEach(() => {
        cleanup();
    });
});
