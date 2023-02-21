import { Dispatch, ReactNode, SetStateAction } from "react";

import * as Styled from "./SubHeader.styled";

interface SubHeaderProps {
  setIsModalActive: Dispatch<SetStateAction<boolean>>;
  pageTitle: string;
  children: ReactNode;
}

export const SubHeader = ({ children, pageTitle, setIsModalActive }: SubHeaderProps) => {
  return (
    <Styled.SubHeader>
      <Styled.InfoWrapper>
        <Styled.PageTitle>{pageTitle}</Styled.PageTitle>
        <Styled.Divider />
        <Styled.Counter>12 entries</Styled.Counter>
      </Styled.InfoWrapper>
      {children}
    </Styled.SubHeader>
  );
};
