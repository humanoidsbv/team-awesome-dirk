import { Dispatch, ReactNode, SetStateAction } from "react";
import React from "react";
import { createPortal } from "react-dom";
import * as Styled from "./Modal.styled";
import { CloseIcon } from "./Modal.styled";

export interface ModalProps {
  children: ReactNode;
  isActive: boolean;
  setIsModalActive: Dispatch<SetStateAction<boolean>>;
}

export const Modal = ({ children, isActive, setIsModalActive }: ModalProps) =>
  isActive
    ? createPortal(
        <Styled.ModalBackdrop onClick={() => setIsModalActive(false)}>
          <Styled.Modal onClick={(e) => e.stopPropagation()}>
            <Styled.CloseButton onClick={() => setIsModalActive(false)}>
              <CloseIcon />
            </Styled.CloseButton>
            {children}
          </Styled.Modal>
        </Styled.ModalBackdrop>,
        document.body,
      )
    : null;
