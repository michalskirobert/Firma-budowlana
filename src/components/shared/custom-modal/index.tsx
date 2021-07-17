import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

import { NShared } from "@namespace/shared";

export const CustomModal = ({
  title,
  content,
  toggle,
  isOpen,
  buttonContent,
  onAction,
}: NShared.TCustomModalProps): JSX.Element => {
  return (
    <Modal {...{ isOpen, toggle, className: "custom-modal" }}>
      <ModalHeader>{title}</ModalHeader>
      <ModalBody>{content}</ModalBody>
      <ModalFooter>
        {buttonContent && (
          <Button color="primary" {...{ onClick: onAction }}>
            {buttonContent}
          </Button>
        )}
        <Button color="secondary" onClick={toggle}>
          Anuluj
        </Button>
      </ModalFooter>
    </Modal>
  );
};
