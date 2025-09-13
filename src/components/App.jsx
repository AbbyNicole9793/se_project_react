import { useState, useEffect } from "react";
import {Routes, Route } from "react-router-dom"

import "../blocks/App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ItemModal from "./ItemModal";
import { getWeather, filterWeatherData } from "../utils/weatherApi";
import { coordinates, APIkey } from "../utils/constants";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext.jsx";
import AddItemModal from "./AddItemModal.jsx"
import Profile from "./Profile.jsx";
import {getItems, postItems, deleteItems} from "../utils/api.js"

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "warm",
    temp: { F: 999 , C: 999},
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState([]);
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "F") {
      setCurrentTemperatureUnit("C");
    } else {
      setCurrentTemperatureUnit("F");
    }
  };

  const toggleMobileMenu = () => {
    if (!isMobileMenuOpened) {
      setActiveModal("mobile");
      setIsMobileMenuOpened(true);
    } else {
      setActiveModal("");
      setIsMobileMenuOpened(false);
    }
  };

  const onAddItem = (data) => {

    setClothingItems([...clothingItems, data])
    closeModal()
  }

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

  const deleteCard = () => {
    setClothingItems((cardItems) =>
      cardItems.filter((item) => item._id !== selectedCard._id))
    closeModal(activeModal)
  }

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

 useEffect(() => {
  getItems()
    .then((data) => {
      setClothingItems(data)
    })
    .catch(console.error)
 }, [])

 useEffect(() => {
  postItems()
    .then((data) => {
      setClothingItems(data)
    })
    .catch(console.error)
 }, [])

 useEffect(() => {
  deleteItems()
    .then((data) => {
      setClothingItems(data)
    })
    .catch(console.error)
 }, [])

  // useEffect(() => {
  //   setClothingItems(defaultClothingItems);
  // }, []);

  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="page">
        <div className="page__content">
          <Header
            activeModal={activeModal}
            handleAddGarment={handleAddGarment}
            weatherData={weatherData}
            toggleMobileMenu={toggleMobileMenu}
          />
          <Routes>
            <Route path="/se_project_react/" element={<Main
            weatherData={weatherData}
            handleCardPreview={handleCardPreview}
            defaultClothingItems={clothingItems}
          />} />
            <Route path="/se_project_react/profile" element={<Profile
            handleCardPreview={handleCardPreview}
            clothingItems={clothingItems}
/>}/>
          
          </Routes>
          <Footer />
        </div>
        <AddItemModal 
          closeModal={closeModal}
          isOpen={activeModal === "add-garment"}
          onAddItem={onAddItem}
        />
        
        <ItemModal
          activeModal={activeModal}
          selectedCard={selectedCard}
          closeModal={closeModal}
          deleteCard={deleteCard}
        />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
