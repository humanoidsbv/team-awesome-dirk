import styled from "styled-components";

export const Header = styled.p`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colorAccent};
  font-size: ${({ theme }) => theme.fontSizeLarge};
`;

export const Day = styled.p``;

export const Amount = styled.p`
  justify-self: end;
`;
