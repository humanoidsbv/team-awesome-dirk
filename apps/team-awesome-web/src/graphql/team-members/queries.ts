import { gql } from "@apollo/client";

export const GET_TEAM_MEMBERS = gql`
  query GetTeamMembers {
    allTeamMembers {
      id
      firstName
      lastName
      emailAddress
      label
      currentClient
    }
  }
`;
