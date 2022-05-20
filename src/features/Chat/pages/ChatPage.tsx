import SelectUser from "src/components/SelectUser/SelectUser"
import SelectChannel from "src/components/SelectChannel/SelectChannel"
import { useEffect, FC, useState } from "react"
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
  Date,
} from "./Chat"
import { useGlobalState } from "src/contexts/GlobalContext"
import ReadMoreButton from "src/components/ReadMoreButton/ReadMoreButton"
import { useFetchLatestMessagesLazyQuery } from "src/models"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"

import Moment from "react-moment"
import { Spinner } from "src/components/Loading/LoadingStyle"
import PostMessageButton from "src/components/PostMessageButton/PostMessageButton"

interface ChatProps {}

const Chat: FC<ChatProps> = () => {
  const [state, dispatch] = useGlobalState()
  const [sendMes, setCount] = useState<null | { value: string }>(null)
  const [isLoading, setisLoading] = useState(false)
  const [date, setDate] = useState("")
  const [getQuery, { data, error, loading }] = useFetchLatestMessagesLazyQuery({
    variables: { channelId: state.channel },
  })

  useEffect(() => {
    if (!data || state.messages.length === 0) {
      getQuery().then((res) => {
        let d = res.data?.fetchLatestMessages
        dispatch({ messages: d?.slice(0) })
        setisLoading(false)
      })
    }
  }, [state.selectedUser])

  const handleChange = (event: any) => {
    // @ts-ignore
    setCount({ value: event.target.value })
    dispatch({ message: sendMes })
  }

  if (error) {
    return <div>ERROR</div>
  }

  return (
    <>
      <Title>
        <h5>1 day Chat App</h5>
        <p>All messages will be deleted at every 00:00 UTC</p>
      </Title>
      <Container className="Chat" data-testid="Chat">
        <LeftBarSelector>
          <SelectUser></SelectUser>
          <SelectChannel setisLoading={setisLoading}></SelectChannel>
        </LeftBarSelector>
        <MainArea>
          <HeaderArea>{state.channel} Channel</HeaderArea>
          <MessageArea>
            <ReadMoreButton
              old={true}
              message={state.message && state.message[0].messageId}
              setisLoading={setisLoading}
            ></ReadMoreButton>
            <ChatContainer>
              {isLoading ? (
                <Spinner />
              ) : (
                data &&
                data.fetchLatestMessages &&
                state.messages.map((item: any, i: any) => {
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
                        <Date>
                          <Moment format="HH : mm">{item.datetime}</Moment>

                          {item.userId === state.selectedUser && (
                            <p>
                              {" "}
                              <FontAwesomeIcon icon={faCheckCircle} />
                              Sent
                            </p>
                          )}
                        </Date>
                      </ChatList>
                    </ChatLeft>
                  )
                })
              )}

              {date && (
                <ChatLeft>
                  <ChatList color="row-reverse" mat={"flex-start"}>
                    <ChatAvatar>
                      <img src={`/${state.selectedUser}.png`} />
                      <p>{state.selectedUser}</p>
                    </ChatAvatar>
                    <ChatText>{sendMes?.value}</ChatText>
                    <Date>
                      <Moment format="HH : mm">{state.datetime}</Moment>
                      <FontAwesomeIcon icon={faCheckCircle} />
                    </Date>
                    <p>Sent</p>
                    <p>{date}</p>
                  </ChatList>
                </ChatLeft>
              )}
            </ChatContainer>

            <ReadMoreButton
              old={false}
              message={state.message && state.message[state.message.length - 1].messageId}
              setisLoading={setisLoading}
            ></ReadMoreButton>
            <DIV>
              <TextArea onChange={handleChange} placeholder="Type your message here..." rows={3}></TextArea>
            </DIV>
            <PostMessageButton setisLoading={setisLoading} setDate={setDate}></PostMessageButton>
          </MessageArea>
        </MainArea>
      </Container>
    </>
  )
}

export default Chat
