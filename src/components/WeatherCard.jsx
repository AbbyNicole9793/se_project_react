import {weatherOptions} from "../utils/constants"
import "../blocks/WeatherCard.css"
import { useContext } from "react"
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext.jsx"

function WeatherCard({weatherData}) {
    const { currentTemperatureUnit} = useContext(
        CurrentTemperatureUnitContext
      );

      const weatherOption = weatherOptions.filter((option) => {
        return option.day === weatherData.isDay && 
        option.condition === weatherData.condition
    })

    const weatherOptionUrl = weatherOption[0]?.url
    const weatherOptionCondition = weatherOption[0]?.condition

    return (
    <section className="weather-card">
        <p className="weather-card__temp">{currentTemperatureUnit === "F" ? (weatherData.temp.F): (weatherData.temp.C)}&deg; {currentTemperatureUnit}</p>
        <img src={weatherOptionUrl} alt={weatherOptionCondition} className="weather-card__image"></img>
    </section>
    )
}

export default WeatherCard