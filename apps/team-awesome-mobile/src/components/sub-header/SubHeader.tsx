import { ReactNode } from "react";
import { useStore } from "../../hooks/store";

import * as Styled from "./SubHeader.styled";

interface SubheaderProps {
  title: string;
  children: ReactNode;
}

export const SubHeader = ({ children, title }: SubheaderProps) => {
  const timeEntries = useStore((state) => state.timeEntries);
  return (
    <Styled.SubHeader>
      <Styled.InfoWrapper>
        <Styled.PageTitle>{title}</Styled.PageTitle>
        <Styled.Counter>{`${timeEntries.length} entries`}</Styled.Counter>
      </Styled.InfoWrapper>
      {children}
    </Styled.SubHeader>
  );
};
