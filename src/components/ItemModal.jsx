import { useContext } from "react"

import "../blocks/ItemModal.css"
import "../blocks/ModalWithForm.css"
import modalClose from "../images/modalCloseWhite.svg"
import CurrentUserContext from "../contexts/CurrentUserContext"

function ItemModal({ activeModal, selectedCard, closeModal, deleteCard }) {
    const currentUser = useContext(CurrentUserContext);

    const isLoggedIn = !!currentUser; 
    const isOwn = isLoggedIn && selectedCard.owner === currentUser._id;


    const itemDeleteButtonClassName = (
        `modal__delete-button ${isOwn ? '' : 'modal__delete-button_hidden'}`
    );

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal()
        }
    }
    return (
        <div className={`modal ${activeModal === "card-preview" ? "modal_is-opened" : ""}`} onClick={handleOverlayClick}>
            <div className="modal__content modal__content_type_image">
                <button type="button" className="modal__close" onClick={closeModal}>
                    <img src={modalClose} alt="Close preview modal" className="modal__close-btn" >
                    </img>
                </button>
                <img src={selectedCard.imageUrl} alt={selectedCard.name} className="modal__image" />
                <div className="modal__footer">
                    <div className="modal__footer-block" >
                        <h2 className="modal__caption">{selectedCard.name}</h2>
                        <button type="button" className={itemDeleteButtonClassName} onClick={deleteCard}>Delete Item</button>
                    </div>
                    <p className="modal__weather">Weather: {selectedCard.weather}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemModal;