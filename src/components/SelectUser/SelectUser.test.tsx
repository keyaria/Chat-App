import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import SelectUser from "./SelectUser"

describe("<Select-user />", () => {
  test("it should mount", () => {
    render(<SelectUser />)

    const selectUser = screen.getByTestId("Select-user")

    expect(selectUser).toBeInTheDocument()
  })
})
