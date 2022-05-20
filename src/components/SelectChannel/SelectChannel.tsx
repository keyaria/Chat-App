import { FC } from "react"
import { ChannelId, useFetchLatestMessagesLazyQuery } from "../../models"
import { Menu, Title } from "./SelectChannelStyle"
import { useGlobalState } from "../../contexts/GlobalContext"
interface SelectChannelProps {
  setisLoading: any
}

const SelectChannel: FC<SelectChannelProps> = ({ setisLoading }) => {
  const [state, dispatch] = useGlobalState()
  const [getQuery, { data, error, loading }] = useFetchLatestMessagesLazyQuery()

  const onClick = (channel: string) => {
    setisLoading(true)
    getQuery({
      variables: { channelId: channel },
    }).then((res) => {
      let d = res.data?.fetchLatestMessages
      dispatch({ channel: channel, messages: d?.slice(0) })
      setisLoading(false)
    })
  }

  return (
    <div className="SelectChannel" data-testid="SelectChannel">
      <Title> 2. Choose Your Channel</Title>
      <Menu>
        <li onClick={() => onClick(ChannelId.General)} className={`${state.channel === ChannelId.General && "active"}`}>
          <p>{ChannelId.General}</p>
        </li>
        <li
          onClick={() => onClick(ChannelId.Technology)}
          className={`${state.channel === ChannelId.Technology && "active"}`}
        >
          <p>{ChannelId.Technology}</p>
        </li>
        <li onClick={() => onClick(ChannelId.Lgtm)} className={`${state.channel === ChannelId.Lgtm && "active"}`}>
          <p>{ChannelId.Lgtm}</p>
        </li>
      </Menu>
    </div>
  )
}

export default SelectChannel
