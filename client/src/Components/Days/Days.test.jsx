import React from "react"
import { describe, it, expect, beforeEach, afterEach } from "vitest"
import { screen, render, cleanup } from "@testing-library/react"
import matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

import Days from "./index"

describe("Days Bar", () => {
    const mockdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    beforeEach(() => {
        render(
            <Days days={mockdays}/>
        )
    })

    afterEach(() => {
        cleanup();
    })

    it("Exists",() => {
        const tt = screen.getByTestId("days")
        expect(tt).toBeTruthy()
    })
    it("Creates 7 days.", () => {
        const days = screen.getAllByTestId("day")
        expect(days.length).toBe(7)
    })
})