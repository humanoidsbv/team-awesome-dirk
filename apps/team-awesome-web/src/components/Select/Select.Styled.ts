import styled, { css } from "styled-components";

export const Select = styled.select`
  border-radius: 4px;
  border: solid 1px ${({ theme }) => theme.colorGreySecondary};
  color: ${({ theme }) => theme.colorAccent};
  padding: 12px;
  width: max-content;

  ${({ id }) =>
    id === "clients" &&
    css`
      grid-column: 3/4;
    `}

  ${({ id }) =>
    id === "sort-time-entries" &&
    css`
      grid-column: 2/3;
    `}
`;
