import { useContext } from "react";
import "../blocks/Header.css";
import "../blocks/ModalWithForm.css";
import "../blocks/HeaderModal.css";
import avatarPlaceholder from "../images/avatar.svg";
import modalClose from "../images/modalClose.svg";
import CurrentUserContext from "../contexts/CurrentUserContext";

function HeaderModal({
  handleAddGarment,
  activeModal,
  toggleMobileMenu,
  isLoggedIn,
  onLoginClick,
  onRegisterClick,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div
      className={`modal ${
        activeModal === "mobile" ? "modal_is-opened" : ""
      } header__modal`} 
    >
      <div className="header-modal__block-secondary">
        {isLoggedIn ? (
          <>
            <button
              type="button"
              className="header-modal__button"
              onClick={handleAddGarment}
            >
              + Add clothes
            </button>
            <div className="header-modal__user-container">
              <p className="header-modal__username">
                {currentUser.name || "User"}
              </p>
              <img
                className="header-modal__avatar"
                src={currentUser.avatar || avatarPlaceholder}
                alt="User avatar"
              />
            </div>
          </>
        ) : (
          <div className="header-modal__auth-buttons">
            <button
              type="button"
              className="header-modal__auth-button"
              onClick={onLoginClick}
            >
              Log in
            </button>
            <button
              type="button"
              className="header-modal__auth-button"
              onClick={onRegisterClick}
            >
              Register
            </button>
          </div>
        )}
      </div>

      <button
        type="button"
        className="header-modal__close-btn"
        onClick={toggleMobileMenu}
      >
        <img className="header-modal__close" src={modalClose} alt="close" />
      </button>
    </div>
  );
}

export default HeaderModal;