import styled from "styled-components";
import { ReactComponent as Bin } from "../../../public/img/bin.svg";

export const Entry = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  display: grid;
  grid-template-columns: max-content 1fr min-content;
  padding: 20px 16px;
  gap: 24px;
  border: solid 1px ${({ theme }) => theme.colorGreySecondary};
  border-radius: 4px;
  border-left: solid 4px ${({ theme }) => theme.backgroundSecondary};
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colorSecondary};
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizeMedium};
`;

export const TimeWrapper = styled.div`
  display: grid;
  justify-items: end;
  gap: 10px;
  justify-self: end;
`;

export const Time = styled.p`
  font-size: ${({ theme }) => theme.fontSizeMedium};
  font-weight: bold;
  color: ${({ theme }) => theme.colorSecondary};
`;

export const Amount = styled.p`
  font-size: ${({ theme }) => theme.fontSizeRegular};
`;

export const DeleteButton = styled.button`
  cursor: pointer;
  display: grid;
  border: 0;
  background-color: transparent;

  svg {
    fill: ${({ theme }) => theme.colorAccent};
  }

  &:hover svg {
    fill: ${({ theme }) => theme.colorTertiary};
  }
`;

export const BinIcon = styled(Bin)``;
