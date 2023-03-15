import styled from "styled-components/native";

export const SubHeader = styled.View`
  background-color: ${({ theme }) => theme.backgroundPrimary};
  padding: 20px;
`;

export const InfoWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PageTitle = styled.Text`
  color: ${({ theme }) => theme.colorSecondary};
  font-size: ${({ theme }) => theme.fontSizeMedium};
`;

export const Counter = styled.Text``;
