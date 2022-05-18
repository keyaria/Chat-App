import { gql } from '@apollo/client';

export const QUERY_FETCH_LATEST_MESSAGES = gql`
  query MessagesFetchLatest($channelId: ChannelId!) {
  MessagesFetchLatest(channelId: $channelId){
    messageId
    text
    datetime
    userId
    }
  }
`;

export const QUERY_FETCH_MESSAGES = gql`
  query fetchLatestMessages($channelId: String!) {
  fetchLatestMessages(channelId: $channelId){
    messageId
    text
    datetime
    userId
    }
  }
`;