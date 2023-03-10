import styled from "styled-components";

export const Header = styled.h2`
  color: ${({ theme }) => theme.colorAccent};
  display: grid;
  font-size: ${({ theme }) => theme.fontSizeMedium};
  font-weight: lighter;
  grid-template-columns: 1fr 1fr;
  margin: 40px 0 20px 0;

  @media (${({ theme }) => theme.tablet}) {
    font-size: ${({ theme }) => theme.fontSizeLarge};
  }
`;

export const Day = styled.p``;

export const Amount = styled.p`
  justify-self: end;
`;
