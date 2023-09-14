import React from "react"
import { describe, it, expect, beforeEach, afterEach } from "vitest"
import { screen, render, cleanup } from "@testing-library/react"
import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers)

import InputForm from "./index";

describe("InputForm", () => {
    beforeEach(() => {
        render(<InputForm />)
    })

    afterEach(() => {
        cleanup()
    })

    it("Renders a form", () => {
        const form = screen.getByTestId("form")
        expect(form).toBeTruthy()
    })
    
    it("Returns user input on submit", async () => {
        const button = screen.getByRole("button")
        const input = screen.getByRole("textbox")
        await userEvent.type(input, "This is a test")
        await userEvent.click(button)
        expect(console.log).toHaveBeenCalledWith("This is a test")
    })
})
