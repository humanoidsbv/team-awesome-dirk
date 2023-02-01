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
  display: flex;
  font-size: ${({ theme }) => theme.fontizeRegular};
  gap: 15px;
  justify-content: center;
  padding: 12px;

  ${({ variant }) =>
    variant === "secondary" &&
    css`
      background-color: ${({ theme }) => theme.colorGrey2};
      border: 1px solid ${({ theme }) => theme.colorGrey3};
      color: ${({ theme }) => theme.colorSecondary};
    `}

  @media (${({ theme }) => theme.tablet}) {
    justify-self: end;
    padding: 12px 30px;
    width: fit-content;
  }
`;

export const PlusIcon = styled(Plus)`
  fill: ${({ theme }) => theme.colorPrimary};
  height: 14px;
  width: 14px;
`;