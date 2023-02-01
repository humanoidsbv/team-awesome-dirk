import * as Styled from "./Button.styled";

export interface Props {
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  variant?: "primary" | "secondary";
  Icon?: any;
}

export const Button = ({ Icon, onClick, label, variant = "primary" }: Props) => (
  <Styled.Button onClick={onClick} variant={variant}>
    <Icon />
    {label}
  </Styled.Button>
);
