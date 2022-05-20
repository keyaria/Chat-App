import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import ReadMoreButton from "./ReadMoreButton"

describe("<Button />", () => {
  test("it should mount", () => {
    // render(<Button />);

    const button = screen.getByTestId("ReadMoreButton")

    expect(button).toBeInTheDocument()
  })
})
