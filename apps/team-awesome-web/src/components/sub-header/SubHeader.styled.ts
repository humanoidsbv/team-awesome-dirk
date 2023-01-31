import styled from "styled-components";
import { ReactComponent as Plus } from "../../../public/img/plus-icon.svg";

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
  font-size: ${({ theme }) => theme.fontsizeMedium};
  font-weight: bold;
`;

export const Devider = styled.div`
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
  text-align: right;
  color: ${({ theme }) => theme.colorAccent};
  font-size: ${({ theme }) => theme.fontsizeRegular};

  @media (${({ theme }) => theme.tablet}) {
    justify-self: left;
  }
`;

export const AddUser = styled.button`
  align-items: center;
  background-color: ${({ theme }) => theme.colorAddUser};
  border-radius: 4px;
  border: 0;
  color: ${({ theme }) => theme.colorPrimary};
  display: flex;
  gap: 15px;
  justify-content: center;
  padding: 13px;

  @media (${({ theme }) => theme.tablet}) {
    width: fit-content;
    justify-self: end;
    padding: 13px 30px;
  }
`;

export const NewHumanoid = styled.p`
  font-size: ${({ theme }) => theme.fontsizeRegular};
`;

export const PlusIcon = styled(Plus)`
  fill: ${({ theme }) => theme.colorPrimary};
  height: 14px;
  width: 14px;
`;
