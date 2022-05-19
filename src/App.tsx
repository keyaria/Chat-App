import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
import Chat from "./features/Chat/Chat.module"
import { ThemeProvider } from "@emotion/react"
import theme from "./theme"
import { createContext, useContext, useReducer } from "react"

export type GlobalContent = {
  selectedUser: string
  channel: string
}

const initialGlobalState = {
  selectedUser: "",
  channel: ""
  };
const GlobalStateContext =  createContext<GlobalContent>(initialGlobalState);
const DispatchStateContext = createContext<any>(undefined);

/**
 * Global State provider & hooks
 */
const GlobalStateProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(
    (state: GlobalContent, newValue: any) => ({ ...state, ...newValue }),
    initialGlobalState
  );
  return (
    <GlobalStateContext.Provider value={state}>
      <DispatchStateContext.Provider value={dispatch}>
        {children}
      </DispatchStateContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => [
  useContext(GlobalStateContext),
  useContext(DispatchStateContext)
];

function App() {
  return (
    <GlobalStateProvider>
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
    </GlobalStateProvider>
  )
}

export default App
