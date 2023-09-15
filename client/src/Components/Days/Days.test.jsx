import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

import Days from './index';

describe('Days Bar', () => {
    const mockdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
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
        render(<Days days={mockdays} weekDates={mockDates} />);
    });

    it('Exists', () => {
        const tt = screen.getByTestId('days');
        expect(tt).toBeTruthy();
    });
    it('Creates 7 days.', () => {
        const days = screen.getAllByTestId('day');
        console.log('aeght', days);
        expect(days.length).toBe(7);
    });

    afterEach(() => {
        cleanup();
    });
});
