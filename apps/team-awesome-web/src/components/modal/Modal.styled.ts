import styled from "styled-components";
import { ReactComponent as Close } from "../../../public/img/close.svg";

export const ModalBackdrop = styled.div`
  align-items: center;
  background-color: rgba(75, 84, 100, 0.8);
  display: grid;
  height: 100%;
  justify-content: center;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 100;
`;

export const Modal = styled.div`
  background-color: ${({ theme }) => theme.colorPrimary};
  border-radius: 4px;
  max-width: 560px;
  position: relative;
  top: 0;
`;

export const CloseButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: 0;
  display: grid;
  justify-content: center;
  padding: 0;
  position: absolute;
  right: 32px;
  top: 32px;
`;

export const CloseIcon = styled(Close)`
  fill: ${({ theme }) => theme.colorSecondary};
`;
