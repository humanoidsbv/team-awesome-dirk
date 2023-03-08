import { gql } from "@apollo/client";

export const ADD_TEAM_MEMBER = gql`
  mutation CreateTeamMember(
    $firstName: String!
    $lastName: String!
    $emailAddress: String!
    $label: String!
    $currentClient: String!
  ) {
    createTeamMember(
      firstName: $firstName
      lastName: $lastName
      emailAddress: $emailAddress
      label: $label
      currentClient: $currentClient
    ) {
      id
      firstName
      lastName
      emailAddress
      label
      currentClient
    }
  }
`;
