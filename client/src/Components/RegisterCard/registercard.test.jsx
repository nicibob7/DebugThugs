import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import RegisterCard from '.';
import { BrowserRouter } from 'react-router-dom';

describe('RegisterCard component', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <RegisterCard />
            </BrowserRouter>
        );
    });

    it('renders a register form', () => {
        const form = screen.getByRole('form');
        expect(form).toBeInTheDocument();
    });

    afterEach(() => {
        cleanup();
    });
});
