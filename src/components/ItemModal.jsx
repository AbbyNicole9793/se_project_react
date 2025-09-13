import "../blocks/ItemModal.css"
import "../blocks/ModalWithForm.css"
import modalClose from "../images/modalCloseWhite.svg"

function ItemModal({activeModal, selectedCard, closeModal, deleteCard}) {
    return (
        <div className={`modal ${activeModal === "card-preview" ? "modal_is-opened" : ""}`}>
            <div className="modal__content modal__content_type_image">
                <button type="button" className="modal__close">
                    <img src={modalClose} alt="Close preview modal" className="modal__close-btn" onClick={closeModal}>
                    </img>
                </button>
                <img src={selectedCard.imageUrl} alt={selectedCard.name} className="modal__image" />
                <div className="modal__footer">
                    <div className="modal__footer-block" >
                        <h2 className="modal__caption">{selectedCard.name}</h2>
                        <button type="button" className="modal__delete-button" onClick={deleteCard}>Delete Item</button>
                    </div>
                    <p className="modal__weather">Weather: {selectedCard.weather}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemModal;