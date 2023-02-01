import styled, { css } from "styled-components";

export const Header = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 4.375rem;
  padding: 0 1.875rem;

  @media (${({ theme }) => theme.desktop}) {
    grid-template-columns: max-content auto 1fr;
    gap: 3.125rem;
  }
`;

export const Logo = styled.a`
  color: ${({ theme }) => theme.backgroundPrimary};
  font-family: ${({ theme }) => theme.fontSecondary};
  font-size: ${({ theme }) => theme.fontSizeLogo};
  text-decoration: none;
  z-index: 100;
`;

export const Toggle = styled.button`
  justify-self: end;
  align-items: center;
  background: transparent;
  border: 0;
  cursor: pointer;
  display: flex;
  height: 12px;
  justify-content: center;
  padding: 0;
  width: 18px;
  z-index: 1;

  @media (${({ theme }) => theme.desktop}) {
    display: none;
  }
`;

interface MenuProps {
  isActive: boolean;
}

export const BurgerMenu = styled.div<MenuProps>`
  background: ${({ theme }) => theme.backgroundPrimary};
  border-radius: 5px;
  height: 1.5px;
  transition: all 0.3s ease-in-out;
  width: 18px;
  ${(props) =>
    props.isActive &&
    css`
      background: transparent;
      transform: translateX(-50px);
    `}

  &:before, &:after {
    background: ${({ theme }) => theme.backgroundPrimary};
    border-radius: 5px;
    content: "";
    height: 1.5px;
    position: absolute;
    transition: all 0.3s ease-in-out;
    width: 18px;
  }

  &:before {
    transform: translateX(-9px) translateY(-5px);

    ${(props) =>
      props.isActive &&
      css`
        transform: rotate(45deg) translate(30px, -30px);
      `}
  }

  &:after {
    transform: translateX(-9px) translateY(5px);
    ${(props) =>
      props.isActive &&
      css`
        transform: rotate(-45deg) translate(30px, 30px);
      `}
  }

  @media (${({ theme }) => theme.desktop}) {
    display: none;
  }
`;

export const MainNav = styled.nav<{ isActive: boolean }>`
  background-color: ${({ theme }) => theme.backgroundSecondary};
  inset: 0;
  left: 100%;
  opacity: 0;
  padding-top: 7rem;
  position: fixed;
  transition: all 0.3s ease-in-out;

  ${(props) =>
    props.isActive &&
    css`
      left: 0%;
      opacity: 1;
    `}

  @media (${({ theme }) => theme.desktop}) {
    background-color: unset;
    inset: unset;
    opacity: 1;
    padding-top: unset;
    position: initial;
    transition: unset;
    z-index: 1;
  }
`;

export const MenuItems = styled.ul`
  color: ${({ theme }) => theme.colorPrimary};
  display: grid;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: ${({ theme }) => theme.fontSizeLarge};
  font-weight: lighter;
  gap: 2.25rem;
  list-style-type: none;
  padding: 0;
  text-align: center;

  @media (${({ theme }) => theme.desktop}) {
    grid-auto-flow: column;
    font-size: ${({ theme }) => theme.fontSizeRegular};
    gap: 2.5rem;
    list-style-type: none;
    padding: 0;
    text-align: center;
  }
`;

export const MenuItem = styled.a`
  cursor: pointer;
  color: ${({ theme }) => theme.backgroundPrimary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 8px;
  }
`;

export const UserDropdown = styled.div`
  display: none;

  @media (${({ theme }) => theme.desktop}) {
    align-items: center;
    display: flex;
    gap: 1rem;
    margin-left: auto;
  }
`;

export const User = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.backgroundPrimary};
  display: flex;
  gap: 1rem;
  height: 40px;
  justify-content: flex-end;
  width: 148px;
`;

export const HumanoidsLogo = styled.img`
  display: block;
  height: 10px;
  width: 80px;
`;

export const ProfilePicture = styled.img`
  border-radius: 50%;
  display: block;
  height: 36px;
  width: 36px;
`;
