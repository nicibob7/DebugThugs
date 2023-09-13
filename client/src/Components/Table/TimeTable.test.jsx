import React from "react"
import { describe, it, expect, beforeEach, afterEach } from "vitest"
import { screen, render, cleanup } from "@testing-library/react"
import matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

import TimeTable from "./index"

describe("Timetable",() => {
    beforeEach(() => {
        render(<TimeTable />)
    })

    afterEach(() => {
        cleanup()
    })

    it("Exists.",() => {
        const tt = screen.getByTestId("timetable")
        expect(tt).toBeTruthy()
    })
    it("Has two children.", () => {
        const tt = screen.getByTestId("timetable")
        const numChildren = tt.childElementCount
        expect(numChildren).toEqual(2)
    })
})