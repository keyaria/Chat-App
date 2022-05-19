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

export const QUERY_FETCH_MORE_MESSAGES = gql`
  query MessagesFetchMore($channelId: ChannelId!, $messageId: String!, $old: Boolean!) {
  	MessagesFetchMore(channelId: $channelId, messageId: $messageId, old: $old){
      text
      messageId
      datetime
      userId
  }
  }
`;

// MUTATIONS
export const MUTATION_POST_MESSAGES = gql`
  mutation MessagePost($channelId: ChannelId!, $text: String!, $userId: UserId!) {
    MessagePost(channelId: $channelId, text: $text, userId: $userId) {
      messageId
      text
      datetime
      userId
    }
  }

`;