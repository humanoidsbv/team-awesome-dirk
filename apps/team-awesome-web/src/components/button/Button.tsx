import * as Styled from "./Button.styled";

interface ButtonProps {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "primary" | "secondary";
  icon?: boolean;
}

export const Button = ({ icon, onClick, label, variant = "primary" }: ButtonProps) => (
  <Styled.Button onClick={onClick} variant={variant}>
    {icon ? <Styled.PlusIcon /> : null}
    {label}
  </Styled.Button>
);
