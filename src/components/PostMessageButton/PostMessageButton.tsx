import React, { FC } from "react"
import { ButtonBox } from "src/globalStyles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { useGlobalState } from "src/contexts/GlobalContext"
import { useMessagePostMutation } from "src/models"

interface PostMessageButtonProps {
  text?: string
  setisLoading?: any
  setDate?: any
}

const PostMessageButton: FC<PostMessageButtonProps> = ({ text, setisLoading, setDate }) => {
  const [state, dispatch] = useGlobalState()
  const [createMessage, { data, loading, error }] = useMessagePostMutation()

  if (data) {
    setisLoading(false)

    setDate(data.MessagePost?.datetime)
  }

  if (error) {
    console.log(error)
  }

  const onClick = async () => {
    setisLoading(true)
    const variables = { channelId: state.channel, text: state.message.value, userId: state.selectedUser }
    createMessage({ variables })
  }
  return (
    <div className="PostMessageButton" data-testid="PostMessageButton">
      <ButtonBox onClick={onClick}>
        {text} <FontAwesomeIcon icon={faPaperPlane} />
      </ButtonBox>
    </div>
  )
}
PostMessageButton.defaultProps = {
  text: "Send Message",
}
export default PostMessageButton
