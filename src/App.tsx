import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
import Chat from "./features/Chat/Chat.module"
import { ThemeProvider } from "@emotion/react"
import theme from "./theme"
import { GlobalStateProvider } from "./contexts/GlobalContext"

function App() {
  return (
    <GlobalStateProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>{<Route path="/" element={<Chat.routeProps.component />} />}</Routes>
        </Router>
      </ThemeProvider>
    </GlobalStateProvider>
  )
}

export default App
