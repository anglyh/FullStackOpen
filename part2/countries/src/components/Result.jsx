import React, { useState } from "react";
import CountryInfo from "./CountryInfo";
import CountryListItem from "./CountryListItem";

const Result = ({ countries }) => {
  const [selectedCountries, setSelectedCountries] = useState({});

  const toggleCountryInfo = (countryCode) => {
    setSelectedCountries((prevSelected) => ({
      ...prevSelected,
      [countryCode]: !prevSelected[countryCode],
    }));
  };

  if (countries.length > 10)
    return <p>Too many matches, specify another filter</p>;

  if (countries.length === 1) 
    return <CountryInfo country={countries[0]} />;

  return (
    <ul style={{ paddingLeft: 0 }}>
      {countries.map((country) => (
        <CountryListItem
          key={country.cca2}
          country={country}
          isShown={selectedCountries[country.cca2]}
          onToggle={toggleCountryInfo}
        />
      ))}
    </ul>
  );
};

export default Result;
