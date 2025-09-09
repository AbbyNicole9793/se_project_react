import "../blocks/Header.css";
import logo from "../images/logo.svg";
import avatar from "../images/avatar.svg";
import { currentDate } from "../utils/constants";
import modalButton from "../images/modalButton.svg";
import HeaderModal from "./HeaderModal";
import ToggleSwitch from "./ToggleSwitch"

function Header({
  handleAddGarment,
  weatherData,
  toggleMobileMenu,
  activeModal,
}) {
  return (
    <header className="header">
      <div className="header__block">
          <img className="header__logo" src={logo} alt="App logo"></img>
          <p className="header__paragraph">
            {currentDate}/ {weatherData.city}
          </p>
        
      </div>
      <div className="header__block-secondary">
        <ToggleSwitch />
        <button
          type="button"
          className="header__button"
          onClick={handleAddGarment}
        >
          + Add clothes
        </button>
        <div className="header__user-container">
          <p className="header__username">Terrence Tegegne</p>
          <img className="header__avatar" src={avatar} alt="avatar" />
        </div>
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
      />
    </header>
  );
}

export default Header;
