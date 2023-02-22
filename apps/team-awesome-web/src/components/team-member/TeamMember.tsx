import * as Styled from "./TeamMember.styled";
import * as Types from "../../types";

export interface MemberEntryProps {
  memberEntry: Types.TeamMember;
}

export const TeamMember = ({ memberEntry }: MemberEntryProps) => {
  const { firstName } = memberEntry;
  const { lastName } = memberEntry;
  const { currentClient } = memberEntry;

  return (
    <Styled.Container>
      <Styled.ContainerTop>
        <Styled.ProfilePicture src="img/amijs.png" alt="profile picture" />
        <Styled.NameWrapper>
          <Styled.FontStyleOne>
            {firstName} {lastName}
          </Styled.FontStyleOne>
          <Styled.FontStyleTwo>Front-end Developer</Styled.FontStyleTwo>
        </Styled.NameWrapper>
      </Styled.ContainerTop>
      <Styled.ContainerBottom>
        <Styled.ClientWrapper>
          <Styled.FontStyleOne>{currentClient}</Styled.FontStyleOne>
          <Styled.FontStyleTwo>Client</Styled.FontStyleTwo>
        </Styled.ClientWrapper>
        <Styled.DateWrapper>
          <Styled.FontStyleOne>February 2022</Styled.FontStyleOne>
          <Styled.FontStyleTwo>Starting date</Styled.FontStyleTwo>
        </Styled.DateWrapper>
      </Styled.ContainerBottom>
    </Styled.Container>
  );
};
