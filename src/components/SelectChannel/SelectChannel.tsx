import React, { FC } from 'react';
import { ChannelId } from '../../models';
import { Menu, Title } from './SelectChannelStyle';
import { useGlobalState } from '../../App'
interface SelectChannelProps {}

const SelectChannel: FC<SelectChannelProps> = () => {
  
  const [state, dispatch] = useGlobalState();

  return(
  <div className="SelectChannel" data-testid="SelectChannel" >
    <Title> 2. Choose Your Channel</Title>
    <Menu>
        <li onClick={() => dispatch({ channel:  ChannelId.General})}><p>{ChannelId.General}</p></li>
        <li onClick={() => dispatch({ channel:  ChannelId.Technology})}><p>{ChannelId.Technology}</p></li>
        <li onClick={() => dispatch({ channel:  ChannelId.Lgtm})}><p>{ChannelId.Lgtm}</p></li>
    </Menu>
  </div>
  );
};

export default SelectChannel;
