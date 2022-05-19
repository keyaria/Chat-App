import React, { FC } from "react"
import { ButtonBox } from "./ButtonStyle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { useGlobalState } from "src/App"
import { useMessagePostMutation, useMessagesFetchMoreLazyQuery, useMessagesFetchMoreQuery } from "src/models"

interface ButtonProps {
  text?: string
  old: boolean
  message: string
  setisLoading?: any
}

const Button: FC<ButtonProps> = ({ text, setisLoading, message, old }) => {
  const [state, dispatch] = useGlobalState()
  const [createMessage, createMessageRef] = useMessagePostMutation()
  const [getMessages, { loading, data }] = useMessagesFetchMoreLazyQuery({
    variables: { channelId: state.channel, messageId: message, old: old },
  })
  //const [deleteStar, deleteStarRes] = useDeleteRepoStarMutation()

  const onClick = async () => {
    setisLoading(true)
    const variables = { channelId: state.channel, text: state.message, userId: state.selectedUser }
    //dispatch({ loadingMessage: true })
    //const l = { variables: { channelId: state.channel, messageId: , old: true } }
    if (text === "Send Message") {
      const get = await createMessage({ variables })
      console.log(get)
      console.log(createMessageRef)

      if (get) {
        console.log("sads")
        //setisLoading(false)
      }

      dispatch({ loadingMessage: loading })
    } else {
      const get = getMessages()
    }
  }
  return (
    <div className="Button" data-testid="Button">
      <ButtonBox onClick={onClick}>
        {text} <FontAwesomeIcon icon={faArrowUp} />
      </ButtonBox>
    </div>
  )
}
Button.defaultProps = {
  text: "Read More",
}
export default Button
