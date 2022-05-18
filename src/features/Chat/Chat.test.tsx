import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Chat from "./pages/ChatPage"

describe("<Chat />", () => {
  test("it should mount", () => {
    render(<Chat />)

    const chat = screen.getByTestId("Chat")

    expect(chat).toBeInThexocument()
  })
})
