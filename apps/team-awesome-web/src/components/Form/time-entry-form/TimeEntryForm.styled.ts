import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
  display: grid;
  gap: 40px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colorAccent};
  font-size: ${({ theme }) => theme.fontSizeLarge};
`;

export const Form = styled.form`
  display: grid;

  gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-areas:
    "client client client client client"
    "activity activity activity activity activity"
    "date date from to total"
    "buttons buttons buttons buttons buttons";
`;

export const WrapperClient = styled.div`
  display: grid;
  grid-area: client;
  row-gap: 10px;
`;

export const WrapperActivity = styled.div`
  display: grid;
  grid-area: activity;
  row-gap: 10px;
`;

export const WrapperDate = styled.div`
  display: grid;
  grid-area: date;
  row-gap: 10px;
  max-width: 200px;
`;

export const WrapperFrom = styled.div`
  display: grid;
  grid-area: from;
  row-gap: 10px;
`;

export const WrapperTo = styled.div`
  display: grid;
  grid-area: to;
  row-gap: 10px;
`;

export const WrapperTotal = styled.div`
  display: grid;
  grid-area: total;
  row-gap: 10px;
`;

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colorGreySecondary};
  border-radius: 4px;
  font-family: ${({ theme }) => theme.fontPrimary};
  height: 40px;
  padding-inline: 14px;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colorAccent};
  font-weight: bold;
`;

export const Total = styled.p`
  color: ${({ theme }) => theme.colorAccent};
  font-size: ${({ theme }) => theme.fontSizeLarge};
`;

export const ButtonsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-area: buttons;
  justify-content: center;
  gap: 30px;
`;
