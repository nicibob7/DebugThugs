import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { AuthProvider } from '../../Contexts';

import { MemoryRouter } from 'react-router-dom';
import matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

import NavBar from './index';

describe('Navbar', () => {
    beforeEach(() => {
        render(
            <AuthProvider>
                <MemoryRouter>
                    <NavBar />
                </MemoryRouter>
            </AuthProvider>
        );
    });

    afterEach(() => {
        cleanup();
    });

    it("Renders 'Home' link.", () => {
        const home = screen.getByRole('link', { name: /home/i });
        expect(home).toBeInTheDocument();
    });

    it("Renders 'Timetable' link.", () => {
        const timetable = screen.getByRole('link', { name: /timetable/i });
        expect(timetable).toBeInTheDocument();
    });

    it('NavBar wrapper <div> exists.', () => {
        const wrapper = screen.findByText('NavBar');
        expect(wrapper).to.exist;
    });
    it('NavBar navbar <div> exists.', () => {
        const navbar = screen.findByText('mainNav');
        expect(navbar).to.exist;
    });
    it('Has two child nodes.', async () => {
        let mustHaveColor;
        const navbar = await screen.findByTestId('wrapper');
        const numChildren = navbar.childElementCount;
        expect(numChildren).toEqual(2);
    });
});
