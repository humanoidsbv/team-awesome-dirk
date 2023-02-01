import { Button } from "../button";
import { PlusIcon } from "../button/Button.styled";
import * as Styled from "./SubHeader.styled";

export const SubHeader = () => {
  return (
    <Styled.SubHeader>
      <Styled.InfoWrapper>
        <Styled.PageTitle>Team members</Styled.PageTitle>
        <Styled.Divider></Styled.Divider>
        <Styled.Counter>22 Humanoids</Styled.Counter>
      </Styled.InfoWrapper>
      <Button onClick={() => null}>
        <PlusIcon />
        New Humanoid
      </Button>
    </Styled.SubHeader>
  );
};
