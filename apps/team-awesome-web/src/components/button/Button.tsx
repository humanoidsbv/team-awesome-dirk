import { MouseEventHandler, ReactNode } from "react";
import * as Styled from "./Button.styled";

export interface Props {
  children: ReactNode;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
  type?: "submit" | "button";
}

export const Button = ({ disabled, type, icon, onClick, children, variant = "primary" }: Props) => {
  return (
    <Styled.Button disabled={disabled} onClick={(e) => onClick?.(e)} variant={variant}>
      {icon}
      {children}
    </Styled.Button>
  );
};
