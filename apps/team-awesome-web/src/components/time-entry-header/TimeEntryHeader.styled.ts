import styled from "styled-components";

export const Header = styled.h2`
  color: ${({ theme }) => theme.colorAccent};
  display: grid;
  font-size: ${({ theme }) => theme.fontSizeLarge};
  font-weight: lighter;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 20px;
`;

export const Day = styled.p``;

export const Amount = styled.p`
  justify-self: end;
`;
