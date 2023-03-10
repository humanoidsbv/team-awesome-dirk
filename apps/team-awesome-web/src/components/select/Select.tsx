import { ChangeEvent, ReactNode } from "react";
import { SortOption } from "../../types/sortOption";
import * as Styled from "./Select.styled";

interface SelectProps {
  children: ReactNode;
  value?: SortOption;
  onChange: ({ target }: ChangeEvent<HTMLSelectElement>) => void;
  name?: string;
  id: string;
}

export const Select = ({ children, value, onChange, name, id }: SelectProps) => {
  return <Styled.Select {...{ value, onChange, name, id }}>{children}</Styled.Select>;
};
