import styled, { css } from "styled-components";
import { ReactComponent as Plus } from "../../../public/img/plus-icon.svg";

type ButtonProps = {
  variant?: "primary" | "secondary";
};

export const Button = styled.button<ButtonProps>`
  align-items: center;
  background-color: ${({ theme }) => theme.colorButton};
  border-radius: 4px;
  border: 0;
  color: ${({ theme }) => theme.colorPrimary};
  cursor: pointer;
  display: flex;
  font-size: ${({ theme }) => theme.fontizeRegular};
  gap: 15px;
  justify-content: center;
  padding: 12px;

  ${({ variant }) =>
    variant === "secondary" &&
    css`
      background-color: ${({ theme }) => theme.colorGreyPrimary};
      border: 1px solid ${({ theme }) => theme.colorGreySecondary};
      color: ${({ theme }) => theme.colorSecondary};
    `}

  :hover {
    background-color: ${({ theme }) => theme.backgroundSecondary};
  }

  :active {
    transform: translate(4px, 2px);
  }

  :disabled {
    background-color: ${({ theme }) => theme.colorGreyPrimary};
    border: 0px solid ${({ theme }) => theme.colorGreySecondary};
    color: ${({ theme }) => theme.colorGreyTertiary};
    cursor: not-allowed;
  }

  @media (${({ theme }) => theme.tablet}) {
    justify-self: end;
    padding: 12px 30px;
    width: fit-content;
  }
`;

const baseIconStyle = css`
  fill: ${({ theme }) => theme.colorPrimary};
  height: 14px;
  width: 14px;
`;

export const PlusIcon = styled(Plus)`
  ${baseIconStyle}
`;
