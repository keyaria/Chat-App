import React, { FC } from "react"
import { Select } from  "./SelectUserStyle"
interface SelectUserProps {}

const SelectUser: FC<SelectUserProps> = () => (
  <Select className="Select-user" data-testid="Select-user">
    <select>
    <option>Joyce</option>
    </select>
  </Select>
)

export default SelectUser
