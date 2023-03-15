import * as Styled from "./SubHeader.styled";

export const SubHeader = () => {
  return (
    <Styled.SubHeader>
      <Styled.InfoWrapper>
        <Styled.PageTitle>Timesheets</Styled.PageTitle>
        <Styled.Counter> 12 Entries</Styled.Counter>
      </Styled.InfoWrapper>
    </Styled.SubHeader>
  );
};
