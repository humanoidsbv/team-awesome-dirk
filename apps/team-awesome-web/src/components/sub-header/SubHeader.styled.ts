import styled from "styled-components";

export const SubHeader = styled.div`
  display: grid;
  font-family: ${({ theme }) => theme.fontPrimary};
  gap: 20px;
  padding: 20px;
  background-color: ${({ theme }) => theme.backgroundPrimary};

  @media (${({ theme }) => theme.tablet}) {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    padding: 15px 30px;
  }
`;

export const InfoWrapper = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (${({ theme }) => theme.tablet}) {
    grid-template-columns: 1fr 40px 1fr;
    justify-items: center;
    justify-self: start;
    width: fit-content;
  }
`;

export const PageTitle = styled.p`
  color: ${({ theme }) => theme.colorSecondary};
  font-size: ${({ theme }) => theme.fontSizeMedium};
  font-weight: bold;
`;

export const Divider = styled.div`
  display: none;

  @media (${({ theme }) => theme.tablet}) {
    background-color: ${({ theme }) => theme.colorAccent};
    content: "";
    display: block;
    height: 14px;
    width: 1px;
  }
`;

export const Counter = styled.p`
  color: ${({ theme }) => theme.colorAccent};
  font-size: ${({ theme }) => theme.fontSizeRegular};
  text-align: right;

  @media (${({ theme }) => theme.tablet}) {
    justify-self: left;
  }
`;
