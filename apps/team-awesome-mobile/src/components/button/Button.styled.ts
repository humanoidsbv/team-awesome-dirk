import styled, { css } from "styled-components/native";
import Plus from "../../assets/icons/add.svg";

type ButtonProps = {
  variant?: "primary" | "secondary";
};

export const Button = styled.Pressable<ButtonProps>`
  align-items: center;
  background-color: ${({ theme }) => theme.colorButton};
  border-radius: 4px;
  color: ${({ theme }) => theme.colorPrimary};
  display: flex;
  flex-direction: row;
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
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colorPrimary};
  font-size: 14px;
  font-weight: bold;
`;

const baseIconStyle = css`
  fill: ${({ theme }) => theme.colorPrimary};
  height: 14px;
  width: 14px;
`;

export const PlusIcon = styled(Plus)`
  ${baseIconStyle}
`;
