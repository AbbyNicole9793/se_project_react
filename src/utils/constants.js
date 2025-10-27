export const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });

export const coordinates = {
    latitude: 32.468141,
    longitude: -84.922715,
}

export const APIkey = "7d654706b8e130a44679a309aab596a8"

export const weatherOptions = [
    {
        day: true,
        condition: "clear",
        url: new URL("../images/weatherCard.svg", import.meta.url).href,
    },
     {
        day: true,
        condition: "clouds",
        url: new URL("../images/cloudyDay.svg", import.meta.url).href,
    },
     {
        day: true,
        condition: "fog",
        url: new URL("../images/fogDay.svg", import.meta.url).href,
    },
     {
        day: true,
        condition: "rain",
        url: new URL("../images/rainDay.svg", import.meta.url).href,
    },
     {
        day: true,
        condition: "snow",
        url: new URL("../images/snowDay.svg", import.meta.url).href,
    },
     {
        day: true,
        condition: "storm",
        url: new URL("../images/stormDay.svg", import.meta.url).href,
    },
    {
        day: false,
        condition: "clear",
        url: new URL("../images/sunnyNight.svg", import.meta.url).href,
    },
     {
        day: false,
        condition: "clouds",
        url: new URL("../images/cloudyNight.svg", import.meta.url).href,
    },
     {
        day: false,
        condition: "fog",
        url: new URL("../images/fogNight.svg", import.meta.url).href,
    },
     {
        day: false,
        condition: "rain",
        url: new URL("../images/rainNight.svg", import.meta.url).href,
    },
     {
        day: false,
        condition: "snow",
        url: new URL("../images/snowNight.svg", import.meta.url).href,
    },
     {
        day: false,
        condition: "storm",
        url: new URL("../images/stormNight.svg", import.meta.url).href,
    },
]

export const baseUrl = 'http://localhost:3001'