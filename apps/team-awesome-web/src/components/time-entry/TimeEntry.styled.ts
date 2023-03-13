import styled, { css } from "styled-components";
import { ReactComponent as Bin } from "../../../public/img/bin.svg";

interface TimeEntryStyleProps {
  isFirst: boolean;
  isLast: boolean;
}

export const Entry = styled.div<TimeEntryStyleProps>`
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  /* border: solid 1px ${({ theme }) => theme.colorGreySecondary}; */
  border-inline-start: solid 1rem;
  display: grid;
  grid-template-columns: max-content 1fr min-content;
  padding: 20px 16px;

  ${(props) =>
    props.isFirst &&
    css`
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    `}

  ${(props) =>
    props.isLast &&
    css`
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    `}
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colorSecondary};
  font-size: ${({ theme }) => theme.fontSizeMedium};
  font-weight: bold;
`;

export const TimeWrapper = styled.div`
  display: grid;
  gap: 10px;
  justify-items: end;
  justify-self: end;
  margin-right: 24px;
`;

export const Time = styled.p`
  color: ${({ theme }) => theme.colorSecondary};
  font-size: ${({ theme }) => theme.fontSizeMedium};
  font-weight: bold;
  text-align: right;
`;

export const Amount = styled.p`
  font-size: ${({ theme }) => theme.fontSizeRegular};
`;

export const DeleteButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  display: grid;
  padding: 0;

  svg {
    fill: ${({ theme }) => theme.colorAccent};
  }

  &:hover svg {
    fill: ${({ theme }) => theme.colorTertiary};
  }
`;

export const BinIcon = styled(Bin)``;
