import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import RegisterCard from '.';

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

    it('renders a register button', () => {
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });

    it('renders three inputs', () => {
        const inputs = screen.getAllByRole('input');
        expect(inputs.length).toEqual(3);
    });

    afterEach(() => {
        cleanup();
    });
});
