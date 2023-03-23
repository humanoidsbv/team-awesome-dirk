import { ReactNode } from "react";
import { GestureResponderEvent } from "react-native";

import * as Styled from "./Button.styled";

export interface Props {
  variant?: "primary" | "secondary";
  children: ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
}

export const Button = ({ onPress, children, variant = "primary" }: Props) => {
  return (
    <Styled.Button onPress={(e) => onPress?.(e)} variant={variant}>
      {children}
    </Styled.Button>
  );
};
