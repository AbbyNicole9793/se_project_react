import { useContext } from "react";

import "../blocks/Header.css";
import logo from "../images/logo.svg";
import { currentDate } from "../utils/constants";
import modalButton from "../images/modalButton.svg";
import HeaderModal from "./HeaderModal";
import ToggleSwitch from "./ToggleSwitch"
import { Link } from "react-router-dom";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Header({
  handleAddGarment,
  weatherData,
  toggleMobileMenu,
  activeModal,
  onLoginClick,
  onRegisterClick,
  isLoggedIn,
}) {
  const currentUser = useContext(CurrentUserContext);
  const userInitial = currentUser?.name
    ? currentUser.name.charAt(0).toUpperCase()
    : "";
  return (
    <header className="header">
      <div className="header__block">
        <Link to="/">
          <img className="header__logo" src={logo} alt="App logo"></img>
        </Link>
        <p className="header__paragraph">
          {currentDate}/ {weatherData.city}
        </p>

      </div>
      <div className="header__block-secondary">
        <ToggleSwitch />
        {isLoggedIn ? (
          <>
            <button
              type="button"
              className="header__button"
              onClick={handleAddGarment}
            >
              + Add clothes
            </button>
            <div className="header__user-container">
              <Link to="/profile" className="header__link">
                <p className="header__username">{currentUser?.name}</p>
                {currentUser?.avatar ? (
                  <img className="header__avatar" src={currentUser.avatar} alt={currentUser.name} />
                ) : (<div className="header__avatar-placeholder">
                  {userInitial}
                </div>)}
              </Link>
            </div>
          </>
        ) : (
          <div className="header__auth-buttons">
            <button
              className="header__button"
              onClick={onRegisterClick}
            >
              Sign Up
            </button>
            <button
              className="header__button"
              onClick={onLoginClick}
            >
              Log In
            </button>
          </div>
        )}
      </div>
      <button
        type="button"
        className="header__open-modal"
        onClick={toggleMobileMenu}
      >
        <img
          className="header__modal-button"
          src={modalButton}
          alt="modal-button"
        />
      </button>

      <HeaderModal
        activeModal={activeModal}
        toggleMobileMenu={toggleMobileMenu}
        handleAddGarment={handleAddGarment}
        isLoggedIn={isLoggedIn}
        onLoginClick={onLoginClick}
        onRegisterClick={onRegisterClick}
      />
    </header>
  );
}

export default Header;
