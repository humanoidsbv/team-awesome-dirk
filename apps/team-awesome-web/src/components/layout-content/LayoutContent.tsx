import { FC, PropsWithChildren } from "react";
import * as Styled from "./LayoutContent.styled";

export const LayoutContent: FC<PropsWithChildren> = ({ children }) => {
  return <Styled.Main>{children}</Styled.Main>;
};
