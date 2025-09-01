import { useState, useEffect } from "react";

import "../blocks/App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ModalWithForm from "./ModalWithForm";
import ItemModal from "./ItemModal";
import { getWeather, filterWeatherData } from "../utils/weatherApi";
import { coordinates, APIkey } from "../utils/constants";
import { defaultClothingItems } from "../utils/clothingItems.js";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "warm",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  const toggleMobileMenu = () => {
    if (!isMobileMenuOpened) {
      setActiveModal("mobile");
      setIsMobileMenuOpened(true);
    } else {
      setActiveModal("");
      setIsMobileMenuOpened(false);
    }
  };

  useEffect(() => {
    if (!activeModal) return;
    const handleEscapeClose = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleEscapeClose);
    return () => {
      document.removeEventListener("keydown", handleEscapeClose);
    };
  }, [activeModal]);

  const handleCardPreview = (card) => {
    setActiveModal("card-preview");
    setSelectedCard(card);
  };

  const handleAddGarment = () => {
    setActiveModal("add-garment");
  };

  const closeModal = () => {
    setActiveModal("");
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header
          activeModal={activeModal}
          handleAddGarment={handleAddGarment}
          weatherData={weatherData}
          toggleMobileMenu={toggleMobileMenu}
        />
        <Main
          weatherData={weatherData}
          handleCardPreview={handleCardPreview}
          defaultClothingItems={clothingItems}
        />
        <Footer />
      </div>
      <ModalWithForm
        buttonText="Add garment"
        title="New garment"
        activeModal={activeModal}
        closeModal={closeModal}
        isOpen={activeModal === "add-garment"}
      >
        <label htmlFor="name" className="modal__label">
          Name {""}
          <input
            type="text"
            className="modal__input"
            id="name"
            placeholder="Name"
          ></input>
        </label>
        <label htmlFor="imageUrl" className="modal__label">
          Image {""}
          <input
            type="url"
            className="modal__input"
            id="imageUrl"
            placeholder="Image URL"
          ></input>
        </label>
        <fieldset className="modal__radio-button">
          <legend className="modal__legend">Select the weather type:</legend>
          <label htmlFor="hot" className="modal__label modal__label_type_radio">
            <input
              id="hot"
              name="weather"
              value="hot"
              type="radio"
              className="modal__input-radio"
            ></input>
            Hot
          </label>
          <label
            htmlFor="warm"
            className="modal__label modal__label_type_radio"
          >
            <input
              id="warm"
              name="weather"
              value="warm"
              type="radio"
              className="modal__input-radio"
            ></input>
            Warm
          </label>
          <label
            htmlFor="cold"
            className="modal__label modal__label_type_radio"
          >
            <input
              id="cold"
              name="weather"
              value="cold"
              type="radio"
              className="modal__input-radio"
            ></input>
            Cold
          </label>
        </fieldset>
      </ModalWithForm>
      <ItemModal
        activeModal={activeModal}
        selectedCard={selectedCard}
        closeModal={closeModal}
      />
    </div>
  );
}

export default App;
