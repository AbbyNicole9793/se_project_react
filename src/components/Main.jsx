import WeatherCard from "./WeatherCard";

import "../blocks/Main.css";
import ItemCard from "./ItemCard.jsx";

function Main({ weatherData, handleCardPreview, defaultClothingItems }) {
  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {Math.round(weatherData.temp.F)}&deg; F / You may want to
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
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
