import { ChangeEvent, ReactNode } from "react";
import { SortOption } from "../time-entries/TimeEntries";
import * as Styled from "./Select.Styled";

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
