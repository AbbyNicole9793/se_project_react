import WeatherCard from "./WeatherCard";
import { useContext } from "react"
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext.jsx"


import "../blocks/Main.css";
import ItemCard from "./ItemCard.jsx";

function Main({ weatherData, handleCardPreview, defaultClothingItems, onCardLike }) {
   const { currentTemperatureUnit} = useContext(
          CurrentTemperatureUnitContext
        );
  
  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {currentTemperatureUnit === "F" ? (weatherData.temp.F): (weatherData.temp.C)}&deg; {currentTemperatureUnit} / You may want to
          wear:
        </p>
        <ul className="cards__list">
          {defaultClothingItems
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  handleCardPreview={handleCardPreview}
                  onCardLike={onCardLike}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
