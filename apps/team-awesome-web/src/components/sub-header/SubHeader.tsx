import { Button } from "../button";
import { PlusIcon } from "../button/Button.styled";
import * as Styled from "./SubHeader.styled";

export const SubHeader = () => {
  return (
    <Styled.SubHeader>
      <Styled.InfoWrapper>
        <Styled.PageTitle>Timesheets</Styled.PageTitle>
        <Styled.Divider></Styled.Divider>
        <Styled.Counter>12 Entries</Styled.Counter>
      </Styled.InfoWrapper>
      <Button onClick={() => null}>
        <PlusIcon />
        New time entry
      </Button>
    </Styled.SubHeader>
  );
};
