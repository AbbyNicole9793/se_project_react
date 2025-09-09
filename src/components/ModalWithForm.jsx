import "../blocks/ModalWithForm.css";
import modalClose from "../images/modalClose.svg";

function ModalWithForm({ children, buttonText, title, isOpen, closeModal, onAddItem}) {
  return (
    <div className={`modal ${isOpen ? "modal_is-opened" : ""}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button type="button" className="modal__close">
          <img
            src={modalClose}
            alt="Close modal"
            className="modal__close-btn"
            onClick={closeModal}
          ></img>
        </button>
        <form onSubmit={onAddItem} className="modal__form">
          {children}
          <button type="submit" className="modal__submit-btn">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
