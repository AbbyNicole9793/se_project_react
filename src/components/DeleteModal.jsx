import React from "react";
import ModalWithForm from "./ModalWithForm.jsx";
import "../blocks/DeleteModal.css"

const DeleteModal = ({ isOpen, onClose, onDelete }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onDelete();
  };

  const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose()
        }
    }
  return (
    <div className="delete-modal">
    <ModalWithForm
      buttonText="Yes, delete item"
      secondaryButtonText="Cancel"
      onSecondaryButtonClick={onClose}
      closeModal={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      handleOverlayClick={handleOverlayClick}
    >
      <p className="delete-modal__confirmation-text">
        Are you sure you want to delete this item?<br />
        This action is irreversible.
      </p>
    </ModalWithForm>
    </div>
  );
};

export default DeleteModal;