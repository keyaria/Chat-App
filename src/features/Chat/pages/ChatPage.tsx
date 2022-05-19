import SelectUser from "../../../components/SelectUser/SelectUser"
import SelectChannel from "../../../components/SelectChannel/SelectChannel"
import React, { useEffect, FC } from "react"
import { useMessagesFetchLatestQuery } from "../../../models"
import { ChannelId } from "../../../models"
import { useFetchLatestMessagesQuery } from "../../../models"
import { Container, HeaderArea, LeftBarSelector, MainArea, MessageArea, ChatContainer, ChatAvatar, ChatText } from "./Chat";
import { useGlobalState } from '../../../App'
interface ChatProps {}

//${(props) => props.theme.backgroundColor}
const Chat: FC<ChatProps> = () => {
    useEffect(() => {
    
  });
  const [state, dispatch] = useGlobalState();

  const { data, error, loading } = useFetchLatestMessagesQuery({ variables: { channelId: "1" } })
  if (loading) {
    return <div>Loading...</div>
  }

  if (error || !data) {
    return <div>ERROR</div>
  }

  console.log(data, )
  return (
    <>
      <Container className="Chat" data-testid="Chat">
        <LeftBarSelector>
          <SelectUser></SelectUser>
          <SelectChannel></SelectChannel>
        </LeftBarSelector>
        <MainArea>
          <HeaderArea>{state.channel} Channel</HeaderArea> 
          <MessageArea>
            <ChatContainer>
              { data.fetchLatestMessages?.map((item)  => {
                return(
                <li>
                <ChatAvatar>
                <img src={`/${item.userId}.png`} />
                <p>{item.userId}</p>
                </ChatAvatar>
                <ChatText>
                  {item.text}
                </ChatText>
                </li>
                )
              })}
            </ChatContainer>
  
          
          </MessageArea>
        </MainArea>
      </Container>
    </>
  )
}

export default Chat
