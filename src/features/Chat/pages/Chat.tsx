import React, { FC } from "react"
import { useMessagesFetchLatestQuery } from "../../../models"
import "./Chat.css"
import { ChannelId } from "../../../models"
import { useFetchLatestMessagesQuery } from "../../../models"
interface ChatProps {}

const Chat: FC<ChatProps> = () => {
  const { data, error, loading } = useFetchLatestMessagesQuery({ variables: { channelId: "1" } })
  if (loading) {
    return <div>Loading...</div>
  }

  if (error || !data) {
    return <div>ERROR</div>
  }
  console.log(data)
  return (
    <div className="Chat" data-testid="Chat">
      Chat Component
    </div>
  )
}

export default Chat
