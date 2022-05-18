import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
import Chat from "./features/Chat/Chat.module"
import { ThemeProvider } from "@emotion/react"
import theme from "./theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          {
            // @ts-ignore
            <Route path="/" element={<Chat.routeProps.component />} />
          }
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
