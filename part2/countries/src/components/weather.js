import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({city, country}) => {
  const [weather, setWeather] = useState([])
  const [icon, setIcon] = useState("")
  const [wind, setWind] = useState(0)
  const api = process.env.REACT_APP_API_KEY
  useEffect(() => {
    axios
      .get('https://api.openweathermap.org/data/2.5/weather?q=' + city + "&appid=" +
      api + "&units=metric")
      .then(response => {
        setWeather(response.data.main.temp)
        setIcon(response.data.weather[0].icon);
        setWind(response.data.wind.speed)
      })
  }, [city, country, api])
  return (
    <div>
      <p>Temperature: {weather} Celsius</p>
      <img src={"http://openweathermap.org/img/wn/" + icon +"@2x.png"} />
      <p>Wind: {wind} m/s</p>
      </div>
      )
}

export default Weather