import { Dispatch, ReactNode, SetStateAction, useContext } from "react";
import { StoreContext } from "../store-context";

import * as Styled from "./SubHeader.styled";

interface SubHeaderProps {
  setIsModalActive: Dispatch<SetStateAction<boolean>>;
  pageTitle: string;
  children: ReactNode;
}

export const SubHeader = ({ children, pageTitle, setIsModalActive }: SubHeaderProps) => {
  const { timeEntries } = useContext(StoreContext);

  return (
    <Styled.SubHeader>
      <Styled.InfoWrapper>
        <Styled.PageTitle>{pageTitle}</Styled.PageTitle>
        <Styled.Divider />
        <Styled.Counter>{`${timeEntries.length} entries`}</Styled.Counter>
      </Styled.InfoWrapper>
      {children}
    </Styled.SubHeader>
  );
};
