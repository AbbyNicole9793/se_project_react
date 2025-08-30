import "../blocks/Header.css"
import "../blocks/ModalWithForm.css"
import "../blocks/HeaderModal.css"
import avatar from "../images/avatar.svg"
import modalClose from "../images/modalClose.svg"

function HeaderModal({handleAddGarment, activeModal, toggleMobileMenu}) {
    return (
        <>
        
        <div className={`modal ${activeModal === "mobile" ? "modal_is-opened" : ""} header__modal`}>
            <div className="header-modal__block-secondary">
                <button type="button" className="header-modal__button" onClick={handleAddGarment}>+ Add clothes</button>
                <div className="header-modal__user-container">
                    <p className="header-modal__username">Terrence Tegegne</p>
                    <img className="header-modal__avatar" src={avatar} alt="avatar"/>
                </div>
            </div>
            <button type="button" className="header-modal__close-btn" onClick={toggleMobileMenu}>
                <img className="header-modal__close" src={modalClose} alt="close"/>
            </button>
        </div>
        </>
    )
}

export default HeaderModal;