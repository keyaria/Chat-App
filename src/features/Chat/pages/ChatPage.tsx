import SelectUser from "../../../components/SelectUser/SelectUser"
import SelectChannel from "../../../components/SelectChannel/SelectChannel"
import React, { useEffect, FC, useState } from "react"
import { useMessagesFetchLatestQuery } from "../../../models"
import { ChannelId } from "../../../models"
import { useFetchLatestMessagesQuery } from "../../../models"
import {
  Container,
  HeaderArea,
  LeftBarSelector,
  MainArea,
  MessageArea,
  ChatContainer,
  ChatAvatar,
  ChatText,
  TextArea,
  DIV,
  ChatLeft,
  ChatList,
  Title,
} from "./Chat"
import { useGlobalState } from "../../../App"
import Button from "../../../components/Button/Button"
import { useFetchLatestMessagesLazyQuery } from "src/generated/graphql"
interface ChatProps {}

//${(props) => props.theme.backgroundColor}
const Chat: FC<ChatProps> = () => {
  useEffect(() => {})
  const [state, dispatch] = useGlobalState()
  const [sendMes, setCount] = useState<null | { value: string }>(null)
  const [user, setError] = useState(null)
  const [isLoading, setisLoading] = useState(false)

  useEffect(() => {
    console.log("entered", sendMes)
    getQuery()

    setError(state.selectedUser)
    console.log(user, state.selectedUser)
  }, [state.selectedUser])

  const [getQuery, { data, error, loading }] = useFetchLatestMessagesLazyQuery({
    variables: { channelId: state.channel },
  })

  const handleChange = (event: any) => {
    // @ts-ignore
    setCount({ value: event.target.value })
    console.log(sendMes)
    dispatch({ message: sendMes })
  }
  // if (loading) {
  //   return <div>Loading...</div>
  // }

  // if (error || !data) {
  //   return <div>ERROR</div>
  // }

  console.log(data, state.selectedUser, user)
  return (
    <>
      <Title>
        <h5>1 day Chat App</h5>
        <p>All messages will be deleted at every 00:00 UTC</p>
      </Title>
      <Container className="Chat" data-testid="Chat">
        <LeftBarSelector>
          <SelectUser></SelectUser>
          <SelectChannel></SelectChannel>
        </LeftBarSelector>
        <MainArea>
          <HeaderArea>
            {state.channel} Channel {state.selectedUser}
          </HeaderArea>
          <MessageArea>
            <Button
              old={true}
              message={(data?.fetchLatestMessages && data.fetchLatestMessages[0].messageId) || ""}
            ></Button>
            <ChatContainer>
              {loading && <div>load...</div>}
              {data &&
                data.fetchLatestMessages?.map((item, i) => {
                  return (
                    <ChatLeft>
                      <ChatList
                        color={item.userId !== state.selectedUser ? "row" : "row-reverse"}
                        mat={item.userId !== state.selectedUser ? "flex-start" : "flex-end"}
                        key={i}
                      >
                        <ChatAvatar>
                          <img src={`/${item.userId}.png`} />
                          <p>{item.userId}</p>
                        </ChatAvatar>
                        <ChatText>{item.text}</ChatText>
                        <p>Sent</p>
                      </ChatList>
                    </ChatLeft>
                  )
                })}
              {isLoading && (
                <ChatLeft>
                  <ChatList color="row-reverse" mat={"flex-start"}>
                    <ChatAvatar>
                      <img src={`/${state.selectedUser}.png`} />
                      <p>{state.selectedUser}</p>
                    </ChatAvatar>
                    <ChatText>{sendMes?.value}</ChatText>
                  </ChatList>
                </ChatLeft>
              )}
              {state.loadingMessage && <p>"Getting User"</p>}
              {state.loadingMessage && <p>"Getting User"</p>}
            </ChatContainer>

            <Button
              old={false}
              message={
                (data?.fetchLatestMessages &&
                  data?.fetchLatestMessages[data?.fetchLatestMessages.length - 1].messageId) ||
                ""
              }
            ></Button>
            <DIV>
              <TextArea onChange={handleChange} placeholder="Type your message here..." rows={3}></TextArea>
            </DIV>
            <Button text="Send Message" setisLoading={setisLoading} old={false} message=""></Button>
          </MessageArea>
        </MainArea>
      </Container>
    </>
  )
}

export default Chat
