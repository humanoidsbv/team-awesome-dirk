import { Dispatch, SetStateAction } from "react";
import { Button } from "../button";
import { PlusIcon } from "../button/Button.styled";
import * as Styled from "./SubHeader.styled";

interface SubHeaderProps {
  setIsModalActive: Dispatch<SetStateAction<boolean>>;
}

export const SubHeader = ({ setIsModalActive }: SubHeaderProps) => {
  return (
    <Styled.SubHeader>
      <Styled.InfoWrapper>
        <Styled.PageTitle>Timesheets</Styled.PageTitle>
        <Styled.Divider />
        <Styled.Counter>12 Entries</Styled.Counter>
      </Styled.InfoWrapper>
      <Button onClick={() => setIsModalActive(true)}>
        <PlusIcon />
        New time entry
      </Button>
    </Styled.SubHeader>
  );
};
