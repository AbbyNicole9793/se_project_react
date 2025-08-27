import "../blocks/Header.css"
import logo from "../images/logo.svg"
import avatar from "../images/avatar.svg"
import { currentDate } from "../utils/constants";

function Header({handleAddGarment, weatherData}) {
    return (
        <header className="header">
                <img className="header__logo" src={logo}></img>
                <p className="header__paragraph">{currentDate}/ {weatherData.city}</p>
                <button type="button" className="header__button" onClick={handleAddGarment}>+ Add clothes</button>
                <div className="header__user-container">
                    <p className="header__username">Terrence Tegegne</p>
                    <img className="header__avatar" src={avatar} alt="avatar"/>
                    
                </div>
        </header>
    )
}

export default Header