import React, { FC } from "react"
import { useMessagesFetchLatestQuery } from "../../../models"
import { ChannelId } from "../../../models"
import { useFetchLatestMessagesQuery } from "../../../models"
import { Container, HeaderArea, LeftBarSelector, MainArea, MessegeArea } from "./Chat"
interface ChatProps {}

//${(props) => props.theme.backgroundColor}
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
    <>
      <Container className="Chat" data-testid="Chat">
        <LeftBarSelector></LeftBarSelector>
        <MainArea>
          <HeaderArea>Chat Component</HeaderArea> <MessegeArea></MessegeArea>
        </MainArea>
      </Container>
    </>
  )
}

export default Chat
