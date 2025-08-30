import {weatherOptions} from "../utils/constants"
import "../blocks/weatherCard.css"

function WeatherCard({weatherData}) {

      const weatherOption = weatherOptions.filter((option) => {
        return option.day === weatherData.isDay && 
        option.condition === weatherData.condition
    })

    const weatherOptionUrl = weatherOption[0]?.url
    const weatherOptionCondition = weatherOption[0]?.condition

    return (
    <section className="weather-card">
        <p className="weather-card__temp">{Math.round(weatherData.temp.F)}&deg; F</p>
        <img src={weatherOptionUrl} alt={weatherOptionCondition} className="weather-card__image"></img>
    </section>
    )
}

export default WeatherCard