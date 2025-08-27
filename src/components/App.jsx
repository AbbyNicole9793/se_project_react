import {useState, useEffect} from "react"

import "../blocks/App.css";
import Header from "./Header";
import Main from "./Main"
import Footer from "./Footer"
import ModalWithForm from "./ModalWithForm";
import ItemModal from "./ItemModal"
import { getWeather, filterWeatherData } from "../utils/weatherApi";
import { coordinates } from "../utils/constants";
import { APIkey } from "../utils/constants";


function App() {
  const [weatherData, setWeatherData] = useState({type: "warm", temp: {F: 999}, city: ""})
  const [activeModal, setActiveModal] = useState("")
  const [selectedCard, setSelectedCard] = useState({})

  const handleCardPreview = (card) => {
    document.addEventListener("keydown", escape)
    setActiveModal("card-preview")
    setSelectedCard(card)
  }

  const handleAddGarment = () => {
    document.addEventListener("keydown", escape)
    setActiveModal("add-garment")
  }

  const escape = (evt) => {
    if (evt.key === "Escape") {
      closeModal(document.querySelector(".modal_is-opened"));
    }
  }

  const closeModal = () => {
    setActiveModal("")
    document.removeEventListener("keydown", escape)
  }

  useEffect(() => {
    getWeather(coordinates, APIkey)
    .then((data) => {
      const filteredData = filterWeatherData(data)
      setWeatherData(filteredData)
    })
    .catch(console.error)
  }, [])

  return (
    <div className="page">
      <div className="page__content">
        <Header handleAddGarment={handleAddGarment} weatherData={weatherData} />
        <Main weatherData={weatherData} handleCardPreview={handleCardPreview} />
        <Footer />
      </div>
      <ModalWithForm buttonText="Add garment" title="New garment" activeModal={activeModal} closeModal={closeModal}>
        <label htmlFor="name" className="modal__label">
                Name {""}<input 
                type="text" 
                className="modal__input" 
                id="name" 
                placeholder="Name"
                >
                </input>
            </label>
            <label htmlFor="imageUrl" className="modal__label">
                Image {""}<input 
                type="url" 
                className="modal__input" 
                id="imageUrl" 
                placeholder="Image URL"
                >
                </input>
            </label>
            <fieldset className="modal__radio-button">
                <legend className="modal__legend">Select the weather type:</legend>
                <label htmlFor="hot" className="modal__label modal__label_type_radio">
                <input id="hot" type="radio" className="modal__input-radio"></input>Hot
                </label>
                <label htmlFor="warm" className="modal__label modal__label_type_radio">
                <input id="warm" type="radio" className="modal__input-radio"></input>Warm
                </label>
                <label htmlFor="cold" className="modal__label modal__label_type_radio">
                <input id="cold" type="radio" className="modal__input-radio"></input>Cold
                </label>
            </fieldset>
      </ModalWithForm>
      <ItemModal activeModal={activeModal} selectedCard={selectedCard} closeModal={closeModal}/>
    </div>
  );
}

export default App;
