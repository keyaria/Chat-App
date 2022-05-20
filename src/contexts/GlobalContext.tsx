import { createContext, useContext, useReducer } from "react"

export type GlobalContent = {
  selectedUser: string
  channel: string
  message: string
  loadingMessage: boolean
  messages: any[]
}

const initialGlobalState = {
  selectedUser: "Joyse",
  channel: "General",
  message: "",
  loadingMessage: false,
  messages: [],
}
const GlobalStateContext = createContext<GlobalContent>(initialGlobalState)
const DispatchStateContext = createContext<any>(undefined)

/**
 * Global State provider & hooks
 */
export const GlobalStateProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(
    (state: GlobalContent, newValue: any) => ({ ...state, ...newValue }),
    initialGlobalState
  )
  return (
    <GlobalStateContext.Provider value={state}>
      <DispatchStateContext.Provider value={dispatch}>{children}</DispatchStateContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export const useGlobalState = () => [useContext(GlobalStateContext), useContext(DispatchStateContext)]
