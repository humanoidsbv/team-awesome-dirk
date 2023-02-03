import styled from "styled-components";

export const Header = styled.h2`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colorAccent};
  font-size: ${({ theme }) => theme.fontSizeLarge};
  font-weight: lighter;
`;

export const Day = styled.p``;

export const Amount = styled.p`
  justify-self: end;
`;
