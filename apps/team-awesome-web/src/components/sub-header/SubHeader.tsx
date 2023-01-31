import * as Styled from "./SubHeader.styled";

export const SubHeader = () => {
  return (
    <Styled.SubHeader>
      <Styled.InfoWrapper>
        <Styled.PageTitle>Team members</Styled.PageTitle>
        <Styled.Devider></Styled.Devider>
        <Styled.Counter>22 Humanoids</Styled.Counter>
      </Styled.InfoWrapper>
      <Styled.AddUser>
        <Styled.PlusIcon />
        <Styled.NewHumanoid>New Humanoid</Styled.NewHumanoid>
      </Styled.AddUser>
    </Styled.SubHeader>
  );
};
