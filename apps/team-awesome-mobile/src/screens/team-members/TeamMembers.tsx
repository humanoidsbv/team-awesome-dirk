import { Text, FlatList } from "react-native";
import React from "react";

import * as Styled from "./TeamMembers.styled";
import { GET_TEAM_MEMBERS } from "../../grahpql/team-members/queries";

import { useQuery } from "@apollo/client";
import { TeamMember } from "../../components/team-member";

export const TeamMembers = () => {
  const { loading, data } = useQuery(GET_TEAM_MEMBERS);

  const structuredTeamMembers = data?.allTeamMembers;

  return (
    <Styled.Container>
      {!loading && (
        <FlatList
          data={structuredTeamMembers}
          renderItem={({ item }) => {
            return <TeamMember memberEntry={item} />;
          }}
        />
      )}
    </Styled.Container>
  );
};
