import "../blocks/ModalWithForm.css";
import modalClose from "../images/modalClose.svg";

function ModalWithForm({ children, buttonText, title, isOpen, closeModal, onSubmit, secondaryButtonText, onSecondaryButtonClick, handleOverlayClick}) {
  return (
    <div className={`modal ${isOpen ? "modal_is-opened" : ""}`} onClick={handleOverlayClick}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {title && <h2 className="modal__title">{title}</h2>}
        <button type="button" className="modal__close">
          <img
            src={modalClose}
            alt="Close modal"
            className="modal__close-btn"
            onClick={closeModal}
          ></img>
        </button>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <div className="modal__submit-btns">
          <button type="submit" className="modal__submit-btn modal__delete-btn">
            {buttonText} 
          </button>
          {secondaryButtonText && (
          <button type="button" className="modal__secondary-btn" onClick={onSecondaryButtonClick}>{secondaryButtonText} 
          </button>
          )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
