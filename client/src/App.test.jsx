import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import App from './App';

describe('App', () => {
    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <App/>
            </MemoryRouter>
        )
    })

    afterEach(() => {
        cleabup()
    })

    it('renders the Home page by default', () => {
        const homePage = screen.getByText(/welcome to hogwarts/i);
        expect(homePage).toBeInTheDocument();
      });

    it('navigates to the login page when the Login link is clicked', async () => {
        const profileLink = screen.getByRole('link', { name: /profile/i });
        expect(screen.getByText(/ProfilePage/i)).not.toBeInTheDocument();
        await userEvent.click(profileLink);
        expect(screen.getByText(/ProfilePage/i)).toBeInTheDocument();
      });
})