import React, { FC } from "react"
import { ButtonBox } from "src/globalStyles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { useGlobalState } from "src/contexts/GlobalContext"
import { useMessagePostMutation, useMessagesFetchMoreLazyQuery, useMessagesFetchMoreQuery } from "src/models"

interface ReadMoreButtonProps {
  text?: string
  old: boolean
  message: string
  setisLoading?: any
  setDate?: any
  setMessages?: any
}

const ReadMoreButton: FC<ReadMoreButtonProps> = ({ text, setisLoading, message, old, setMessages }) => {
  const [state, dispatch] = useGlobalState()
  const [getMessages, { loading, data, error }] = useMessagesFetchMoreLazyQuery({
    variables: { channelId: state.channel, messageId: message, old: old },
  })

  if (error) {
    setisLoading(false)
    return <p>error... {error.message}</p>
  }
  const onClick = () => {
    setisLoading(true)
    getMessages().then((res) => {
      console.log("resdfs", res)
      let d = res.data?.MessagesFetchMore

      dispatch({ messages: d?.slice(0) })
      setisLoading(false)
    })
  }

  return (
    <div className="ReadMoreButton" data-testid="ReadMoreButton">
      <ButtonBox onClick={onClick}>
        {text} <FontAwesomeIcon icon={old ? faArrowUp : faArrowDown} />
      </ButtonBox>
    </div>
  )
}
ReadMoreButton.defaultProps = {
  text: "Read More",
}
export default ReadMoreButton
