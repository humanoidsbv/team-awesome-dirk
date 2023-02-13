import { ReactNode } from "react";
import * as Styled from "./Button.styled";

export interface Props {
  children: ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
  type?: "submit" | "button";
}

export const Button = ({
  type,
  icon,
  onClick = () => null,
  children,
  variant = "primary",
}: Props) => {
  return (
    <Styled.Button onClick={onClick} variant={variant}>
      {icon}
      {children}
    </Styled.Button>
  );
};
