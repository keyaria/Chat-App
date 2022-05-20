import { FC } from "react"
import { Select, Title, DIV } from "./SelectUserStyle"
import { useGlobalState } from "../../contexts/GlobalContext"
import { UserId } from "../../models"
interface SelectUserProps {}

const SelectUser: FC<SelectUserProps> = () => {
  const [state, dispatch] = useGlobalState()

  const handleChange = (event: any) => {
    dispatch({ selectedUser: event.target.value })
  }

  return (
    <DIV className="Select-user" data-testid="Select-user">
      <Title> 1. Choose your user</Title>
      <Select value={state.selectedUser} onChange={handleChange}>
        <option value={UserId.Joyse}>Joyse</option>
        <option value={UserId.Sam}>Sam</option>
        <option value={UserId.Russell}>Russell</option>
      </Select>
    </DIV>
  )
}
export default SelectUser
