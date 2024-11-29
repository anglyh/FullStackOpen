import { useEffect, useState } from "react";
import weatherService from "../services/weather";

const CountryInfo = ({ country }) => {
  const [countryWeatherInfo, setCountryWeatherInfo] = useState({
    temp: null,
    wind: null,
    icon: null,
  });

  console.log(countryWeatherInfo)

  useEffect(() => {
    weatherService
      .getWeather(country.capitalInfo.latlng[0], country.capitalInfo.latlng[1])
      .then((data) =>
        setCountryWeatherInfo({
          temp: data.main.temp,
          wind: data.wind.speed,
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        })
      );
  }, [country]);

  return (
    <>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital[0]}</p>
      <p>area {country.area}</p>

      <p>
        <strong>languages:</strong>
      </p>

      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={`${country.name.common} flag`} />

      <h2>Weather in {country.name.common}</h2>
      <p>temperature {countryWeatherInfo.temp}</p>
      <img src={countryWeatherInfo.icon} alt="weather icon" />
      <p>wind {countryWeatherInfo.wind} m/s</p>
    </>
  );
};

export default CountryInfo;
