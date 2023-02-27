import { useState } from "react";
import { ReactComponent as Arrow } from "../../../public/img/arrow-down.svg";
import { HeaderLink } from "./header-link";
import * as Styled from "./Header.styled";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => setIsActive(!isActive);

  return (
    <Styled.Header>
      <Styled.Logo href="/">team awesome</Styled.Logo>
      <Styled.Toggle onClick={handleClick}>
        <Styled.BurgerMenu isActive={isActive} />
      </Styled.Toggle>
      <Styled.MainNav isActive={isActive}>
        <Styled.MenuItems>
          <HeaderLink color="blue" href="/" linkText="Timesheets" />
          <HeaderLink color="red" href="/team-members" linkText="Team members" />
          <HeaderLink color="green" href="/projects" linkText="Projects" />
          <HeaderLink color="yellow" href="/clients" linkText="Clients" />
          <HeaderLink color="purple" href="/documents" linkText="Documents" />
        </Styled.MenuItems>
      </Styled.MainNav>
      <Styled.UserDropdown>
        <Styled.User>
          <Styled.HumanoidsLogo src="img/1_humanoids_logo 1.png" alt="humanoids logo" />
          <Styled.ProfilePicture src="img/amijs.png" alt="profile picture" />
        </Styled.User>
        <Arrow />
      </Styled.UserDropdown>
    </Styled.Header>
  );
};
