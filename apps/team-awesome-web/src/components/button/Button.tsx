import { ReactNode } from "react";
import * as Styled from "./Button.styled";

export interface Props {
  children: ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
}

export const Button = ({ icon, onClick, children, variant = "primary" }: Props) => {
  return (
    <Styled.Button onClick={onClick} variant={variant}>
      {icon}
      {children}
    </Styled.Button>
  );
};
