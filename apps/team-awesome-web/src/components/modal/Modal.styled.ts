import styled from "styled-components";
import { ReactComponent as Close } from "../../../public/img/close.svg";

export const ModalBackdrop = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(75, 84, 100, 0.8);
  position: absolute;
  z-index: 100;
`;

export const Modal = styled.div`
  top: 0;
  max-width: 560px;
  background-color: ${({ theme }) => theme.colorPrimary};
  border-radius: 4px;
  position: relative;
`;

export const CloseButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: 0;
  display: grid;
  justify-content: center;
  padding: 0;
  position: absolute;
  top: 32px;
  right: 32px;
`;

export const CloseIcon = styled(Close)`
  fill: ${({ theme }) => theme.colorSecondary};
`;
