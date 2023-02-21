import link from "next/link";
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
          <li>
            <link href="/" passHref>
              <Styled.MenuItem href="#">Timesheets</Styled.MenuItem>
            </link>
          </li>
          <li>
            <Styled.MenuItem href="#">Team members</Styled.MenuItem>
          </li>
          <li>
            <Styled.MenuItem href="#">Projects</Styled.MenuItem>
          </li>
          <li>
            <Styled.MenuItem href="#">Clients</Styled.MenuItem>
          </li>
          <li>
            <Styled.MenuItem href="#">Documents</Styled.MenuItem>
          </li>
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
