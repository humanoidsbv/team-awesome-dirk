import styled from "styled-components/native";
import TeamAwesomeLogoSvg from "../../assets/icons/team-awesome-logo.svg";
import MenuSvg from "../../assets/icons/menu.svg";
import CloseSvg from "../../assets/icons/close.svg";

export const Header = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px 32px;
`;

export const TeamAwesomeSvg = styled(TeamAwesomeLogoSvg)``;

export const MenuIcon = styled(MenuSvg)`
  fill: ${({ theme }) => theme.backgroundPrimary};
`;

export const CloseIcon = styled(CloseSvg)`
  fill: ${({ theme }) => theme.backgroundPrimary};
`;
