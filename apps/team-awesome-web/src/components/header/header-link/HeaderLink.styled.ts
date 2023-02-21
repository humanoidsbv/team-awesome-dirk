import styled, { css } from "styled-components";

export const Link = styled.a<{ isActive: boolean; color: string }>`
  cursor: pointer;
  color: ${({ theme }) => theme.backgroundPrimary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 8px;
  }

  ${(props) =>
    props.isActive &&
    css`
      text-decoration: underline;
      text-underline-offset: 8px;
      color: ${props.color};
    `}
`;
