import { gql } from "@apollo/client";

export const ADD_TIME_ENTRY = gql`
  mutation CreateTimeEntry(
    $activity: String!
    $client: String!
    $startTimestamp: Date!
    $stopTimestamp: Date!
  ) {
    createTimeEntry(
      activity: $activity
      client: $client
      startTimestamp: $startTimestamp
      stopTimestamp: $stopTimestamp
    ) {
      id
      client
      activity
      stopTimestamp
      startTimestamp
    }
  }
`;

export const REMOVE_TIME_ENTRY = gql`
  mutation RemoveTimeEntry($id: ID!) {
    removeTimeEntry(id: $id) {
      id
    }
  }
`;
