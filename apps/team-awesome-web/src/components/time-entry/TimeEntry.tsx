import * as Styled from "./TimeEntry.styled";

export const TimeEntry = () => {
  return (
    <Styled.Entry>
      <Styled.Title>Port of Rotterdam</Styled.Title>
      <Styled.TimeWrapper>
        <Styled.Time>09:00 - 17:00</Styled.Time>
        <Styled.Amount>08:00</Styled.Amount>
      </Styled.TimeWrapper>
      <Styled.DeleteButton>
        <Styled.BinIcon />
      </Styled.DeleteButton>
    </Styled.Entry>
  );
};
