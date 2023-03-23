import styled, { css } from "styled-components/native";
import Bin from "../../assets/icons/delete.svg";

interface TimeEntryStyleProps {
  isFirst: boolean;
  isLast: boolean;
}

export const Entry = styled.View<TimeEntryStyleProps>`
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  border: solid 1px ${({ theme }) => theme.colorGreySecondary};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 10px;
  padding: 20px 16px;
  width: 95%;
  margin: 0 auto;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colorSecondary};
  font-size: ${({ theme }) => theme.fontSizeMedium};
  font-weight: bold;
  flex-grow: 1;
  max-width: 30%;
`;

export const TimeWrapper = styled.View`
  display: flex;
  gap: 10px;
`;

export const Time = styled.Text`
  color: ${({ theme }) => theme.colorSecondary};
  font-size: ${({ theme }) => theme.fontSizeMedium};
  font-weight: bold;
`;

export const Amount = styled.Text`
  color: ${({ theme }) => theme.colorAccent};
  font-size: ${({ theme }) => theme.fontSizeRegular};
  text-align: right;
  font-weight: bold;
`;

export const DeleteButton = styled.Pressable`
  background-color: transparent;
`;

export const BinIcon = styled(Bin)`
  color: ${({ theme }) => theme.colorAccent};
`;
