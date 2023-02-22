import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  border-top: solid 1px ${({ theme }) => theme.colorGreySecondary};
  border-left: solid 4px ${({ theme }) => theme.backgroundSecondary};
  border-radius: 4px;
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 20px;

  @media (${({ theme }) => theme.desktop}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ContainerTop = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  padding: 16px 20px;
  align-items: center;
  column-gap: 20px;
`;

export const ContainerBottom = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  border-top: solid 1px ${({ theme }) => theme.colorGreySecondary};
  padding: 24px 20px;
  column-gap: 40px;

  @media (${({ theme }) => theme.desktop}) {
    grid-template-columns: 1fr max-content;
    border-top: unset;
    margin-right: 30px;
  }
`;

export const ProfilePicture = styled.img`
  border-radius: 50%;
  display: block;
  height: 50px;
  width: 50px;
`;

export const NameWrapper = styled.div`
  display: grid;
  row-gap: 2px;
`;

export const FontStyleOne = styled.p`
  color: ${({ theme }) => theme.colorSecondary};
  font-weight: bold;
`;

export const FontStyleTwo = styled.p`
  color: ${({ theme }) => theme.colorAccent};
`;

export const ClientWrapper = styled.div`
  display: grid;
  row-gap: 2px;

  @media (${({ theme }) => theme.desktop}) {
    text-align: right;
  }
`;

export const DateWrapper = styled.div`
  display: grid;

  @media (${({ theme }) => theme.desktop}) {
    text-align: right;
  }
`;
