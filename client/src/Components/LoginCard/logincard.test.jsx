import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { AuthProvider } from '../../Contexts';

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import LoginCard from '.';

describe('LoginCard component', () => {
    beforeEach(() => {
        render(
            <AuthProvider>
                <BrowserRouter>
                    <LoginCard />
                </BrowserRouter>
            </AuthProvider>
        );
    });

    it('renders a login form', () => {
        const form = screen.getByRole('form');
        expect(form).toBeInTheDocument();
    });

    it('renders a login button', () => {
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });

    it('renders two inputs', () => {
        const inputs = screen.getAllByRole('input');
        expect(inputs.length).toEqual(2);
    });

    afterEach(() => {
        cleanup();
    });
});
