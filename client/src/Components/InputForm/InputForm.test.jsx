import React from 'react';
import { AuthProvider } from '../../Contexts';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import InputForm from './index';

describe('InputForm', () => {
    const mockCell = { day: 'Monday', time: '08:00 - 10:00', weekNum: 37, content: undefined };
    const mockDates = [
        '11/9/2023',
        '12/9/2023',
        '13/9/2023',
        '14/9/2023',
        '15/9/2023',
        '16/9/2023',
        '17/9/2023',
    ];
    beforeEach(() => {
        render(
            <AuthProvider>
                <InputForm cell={mockCell} dates={mockDates} />
            </AuthProvider>
        );
    });

    afterEach(() => {
        cleanup();
    });

    it('Renders a form', () => {
        const form = screen.getByTestId('form');
        expect(form).toBeTruthy();
    });

    it('Returns user input on submit', async () => {
        const button = screen.getByTestId('submit-btn');
        const input = screen.getByRole('textbox');
        await userEvent.type(input, 'This is a test');
        await userEvent.click(button);
    });
});
