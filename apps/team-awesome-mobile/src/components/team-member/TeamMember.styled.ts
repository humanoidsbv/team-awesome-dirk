import styled from "styled-components/native";
export const Container = styled.View`
  display: flex;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colorGreySecondary};
  border-left-width: 4px;
  border-left-color: ${({ theme }) => theme.backgroundSecondary};
  border-radius: 4px;
  width: 95%;
  margin: 0 auto;
  margin-bottom: 20px;
`;

export const NameLabel = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  padding: 16px 20px;
`;

export const FunctionLabel = styled.View`
  display: flex;
  flex-direction: row;
  border-top-width: 1px;
  border-style: solid;
  border-top-color: ${({ theme }) => theme.colorGreySecondary};
  padding: 24px 20px;
  gap: 40px;
`;

export const ProfilePicture = styled.Image`
  border-radius: 100px;
  display: flex;
  height: 50px;
  width: 50px;
`;

export const NameWrapper = styled.View`
  display: flex;
  gap: 2px;
`;

export const FontStyleOne = styled.Text`
  color: ${({ theme }) => theme.colorSecondary};
  font-weight: bold;
`;

export const FontStyleTwo = styled.Text`
  color: ${({ theme }) => theme.colorAccent};
`;

export const ClientWrapper = styled.View`
  display: flex;
  row-gap: 2px;
`;

export const DateWrapper = styled.View`
  display: flex;
`;
