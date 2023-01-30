/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { ReactComponent as Arrow } from "../../../public/img/arrow-down.svg";
import * as Styled from "./Header.styled";

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => setIsActive(!isActive);

  return (
    <Styled.Header>
      <Styled.Logo href="#">team awesome</Styled.Logo>
      <Styled.Toggle onClick={handleClick}>
        <Styled.BurgerMenu isActive={isActive} />
      </Styled.Toggle>
      <Styled.MainNav isActive={isActive}>
        <Styled.MenuItems>
          <Styled.MenuItem href="#">Timesheets</Styled.MenuItem>
          <Styled.MenuItem href="#">Team members</Styled.MenuItem>
          <Styled.MenuItem href="#">Projects</Styled.MenuItem>
          <Styled.MenuItem href="#">Clients</Styled.MenuItem>
          <Styled.MenuItem href="#">Documents</Styled.MenuItem>
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
