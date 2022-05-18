import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time with an offset from UTC/Greenwich in the ISO-8601 calendar system using the format 1970-01-01T00:00:00Z */
  OffsetDateTime: any;
};

export enum ChannelId {
  General = 'General',
  Lgtm = 'LGTM',
  Technology = 'Technology'
}

export type Message = {
  __typename?: 'Message';
  datetime: Scalars['OffsetDateTime'];
  messageId: Scalars['String'];
  text: Scalars['String'];
  userId: Scalars['String'];
};

export type MessageEnum = {
  __typename?: 'MessageEnum';
  datetime: Scalars['OffsetDateTime'];
  messageId: Scalars['String'];
  text: Scalars['String'];
  userId: UserId;
};

export type Mutations = {
  __typename?: 'Mutations';
  /**
   *
   *   Post `messages`. return posted datetime when it succeeded
   *
   *   Code|Error
   *   ---|---
   *   500|`Couldn't save message, please retry.`
   *
   */
  MessagePost?: Maybe<MessageEnum>;
  /**
   *
   *   Post `messages`. return posted datetime when it succeeded
   *
   *   - `channelId` should be "1" or "2" or "3"
   *   - `userId` should be "Sam", "Russell", "Joyse"
   *
   *   Code|Error
   *   ---|---
   *   400|`Channel not found`
   *   500|`Couldn't save message, please retry.`
   *
   */
  postMessage?: Maybe<Message>;
};


export type MutationsMessagePostArgs = {
  channelId: ChannelId;
  text: Scalars['String'];
  userId: UserId;
};


export type MutationsPostMessageArgs = {
  channelId: Scalars['String'];
  text: Scalars['String'];
  userId: Scalars['String'];
};

export type Queries = {
  __typename?: 'Queries';
  /**
   *
   *   get latest `messages`
   *
   *   - `message` length is at most 10
   *
   *   Code|Error
   *   ---|---
   *
   */
  MessagesFetchLatest?: Maybe<Array<MessageEnum>>;
  /**
   *
   *   Get more `messages`.
   *
   *   - if `old` = true, you can fetch older messages than messageId
   *   - if `old` = false, you can fetch newer messages than messageId
   *   - `message` length is at most 10
   *
   *   Code|Error
   *   ---|---
   *   400|`Message not found`
   *
   */
  MessagesFetchMore?: Maybe<Array<MessageEnum>>;
  /**
   *
   *   get latest `messages`
   *
   *   - `channelId` should be "1" or "2" or "3"
   *   - `message` length is at most 10
   *
   *   Code|Error
   *   ---|---
   *   400|`Channel not found`
   *
   */
  fetchLatestMessages?: Maybe<Array<Message>>;
  /**
   *
   *   Get more `messages`.
   *
   *   - if `old` = true, you can fetch older messages than messageId
   *   - if `old` = false, you can fetch newer messages than messageId
   *   - `message` length is at most 10
   *
   *   Code|Error
   *   ---|---
   *   400|`Channel not found`
   *   400|`Message not found`
   *
   */
  fetchMoreMessages?: Maybe<Array<Message>>;
};


export type QueriesMessagesFetchLatestArgs = {
  channelId: ChannelId;
};


export type QueriesMessagesFetchMoreArgs = {
  channelId: ChannelId;
  messageId: Scalars['String'];
  old: Scalars['Boolean'];
};


export type QueriesFetchLatestMessagesArgs = {
  channelId: Scalars['String'];
};


export type QueriesFetchMoreMessagesArgs = {
  channelId: Scalars['String'];
  messageId: Scalars['String'];
  old: Scalars['Boolean'];
};

export enum UserId {
  Joyse = 'Joyse',
  Russell = 'Russell',
  Sam = 'Sam'
}

export type MessagesFetchLatestQueryVariables = Exact<{
  channelId: ChannelId;
}>;


export type MessagesFetchLatestQuery = { __typename?: 'Queries', MessagesFetchLatest?: Array<{ __typename?: 'MessageEnum', messageId: string, text: string, datetime: any, userId: UserId }> | null };

export type FetchLatestMessagesQueryVariables = Exact<{
  channelId: Scalars['String'];
}>;


export type FetchLatestMessagesQuery = { __typename?: 'Queries', fetchLatestMessages?: Array<{ __typename?: 'Message', messageId: string, text: string, datetime: any, userId: string }> | null };


export const MessagesFetchLatestDocument = gql`
    query MessagesFetchLatest($channelId: ChannelId!) {
  MessagesFetchLatest(channelId: $channelId) {
    messageId
    text
    datetime
    userId
  }
}
    `;

/**
 * __useMessagesFetchLatestQuery__
 *
 * To run a query within a React component, call `useMessagesFetchLatestQuery` and pass it any options that fit your needs.
 * When your component renders, `useMessagesFetchLatestQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessagesFetchLatestQuery({
 *   variables: {
 *      channelId: // value for 'channelId'
 *   },
 * });
 */
export function useMessagesFetchLatestQuery(baseOptions: Apollo.QueryHookOptions<MessagesFetchLatestQuery, MessagesFetchLatestQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MessagesFetchLatestQuery, MessagesFetchLatestQueryVariables>(MessagesFetchLatestDocument, options);
      }
export function useMessagesFetchLatestLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MessagesFetchLatestQuery, MessagesFetchLatestQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MessagesFetchLatestQuery, MessagesFetchLatestQueryVariables>(MessagesFetchLatestDocument, options);
        }
export type MessagesFetchLatestQueryHookResult = ReturnType<typeof useMessagesFetchLatestQuery>;
export type MessagesFetchLatestLazyQueryHookResult = ReturnType<typeof useMessagesFetchLatestLazyQuery>;
export type MessagesFetchLatestQueryResult = Apollo.QueryResult<MessagesFetchLatestQuery, MessagesFetchLatestQueryVariables>;
export const FetchLatestMessagesDocument = gql`
    query fetchLatestMessages($channelId: String!) {
  fetchLatestMessages(channelId: $channelId) {
    messageId
    text
    datetime
    userId
  }
}
    `;

/**
 * __useFetchLatestMessagesQuery__
 *
 * To run a query within a React component, call `useFetchLatestMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchLatestMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchLatestMessagesQuery({
 *   variables: {
 *      channelId: // value for 'channelId'
 *   },
 * });
 */
export function useFetchLatestMessagesQuery(baseOptions: Apollo.QueryHookOptions<FetchLatestMessagesQuery, FetchLatestMessagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchLatestMessagesQuery, FetchLatestMessagesQueryVariables>(FetchLatestMessagesDocument, options);
      }
export function useFetchLatestMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchLatestMessagesQuery, FetchLatestMessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchLatestMessagesQuery, FetchLatestMessagesQueryVariables>(FetchLatestMessagesDocument, options);
        }
export type FetchLatestMessagesQueryHookResult = ReturnType<typeof useFetchLatestMessagesQuery>;
export type FetchLatestMessagesLazyQueryHookResult = ReturnType<typeof useFetchLatestMessagesLazyQuery>;
export type FetchLatestMessagesQueryResult = Apollo.QueryResult<FetchLatestMessagesQuery, FetchLatestMessagesQueryVariables>;