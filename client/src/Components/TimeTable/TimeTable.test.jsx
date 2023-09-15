import React from 'react';
import { AuthProvider } from '../../Contexts';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

import TimeTable from './index';

describe('Timetable', () => {
    beforeEach(() => {
        render(
            <AuthProvider>
                <TimeTable />
            </AuthProvider>
        );
    });

    it('Exists.', () => {
        const tt = screen.getByTestId('timetable');
        expect(tt).toBeTruthy();
    });

    it('Has three children.', () => {
        const tt = screen.getByTestId('timetable');
        const numChildren = tt.childElementCount;
        expect(numChildren).toEqual(3);
    });

    afterEach(() => {
        cleanup();
    });
});
