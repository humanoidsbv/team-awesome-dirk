import * as Styled from "./TeamMember.styled";
import * as Types from "../../types";

export interface MemberEntryProps {
  memberEntry: Types.TeamMember;
}

export const TeamMember = ({ memberEntry }: MemberEntryProps) => {
  const { firstName, lastName, currentClient } = memberEntry;

  return (
    <Styled.Container data-testid="team-member">
      <Styled.NameLabel>
        <Styled.ProfilePicture src="img/amijs.png" alt="profile picture" />
        <Styled.NameWrapper>
          <Styled.FontStyleOne>
            {firstName} {lastName}
          </Styled.FontStyleOne>
          <Styled.FontStyleTwo>Front-end Developer</Styled.FontStyleTwo>
        </Styled.NameWrapper>
      </Styled.NameLabel>
      <Styled.FunctionLabel>
        <Styled.ClientWrapper>
          <Styled.FontStyleOne>{currentClient}</Styled.FontStyleOne>
          <Styled.FontStyleTwo>Client</Styled.FontStyleTwo>
        </Styled.ClientWrapper>
        <Styled.DateWrapper>
          <Styled.FontStyleOne>February 2022</Styled.FontStyleOne>
          <Styled.FontStyleTwo>Starting date</Styled.FontStyleTwo>
        </Styled.DateWrapper>
      </Styled.FunctionLabel>
    </Styled.Container>
  );
};
