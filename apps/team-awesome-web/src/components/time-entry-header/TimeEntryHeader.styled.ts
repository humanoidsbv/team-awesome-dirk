import styled from "styled-components";

export const Header = styled.h2`
  color: ${({ theme }) => theme.colorAccent};
  display: grid;
  font-size: ${({ theme }) => theme.fontSizeRegular};
  font-weight: lighter;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 20px;

  @media (${({ theme }) => theme.tablet}) {
    font-size: ${({ theme }) => theme.fontSizeLarge};
  }
`;

export const Day = styled.p``;

export const Amount = styled.p`
  justify-self: end;
`;
