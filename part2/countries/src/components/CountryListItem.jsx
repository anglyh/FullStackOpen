import React from "react";
import CountryInfo from "./CountryInfo";

const CountryListItem = ({ country, isShown, onToggle }) => {
  return (
    <li style={{ listStyle: "none" }}>
      {country.name.common}{" "}
      <button onClick={() => onToggle(country.cca2)}>
        {isShown ? "hide" : "show"}
      </button>
      {isShown && <CountryInfo country={country} />}
    </li>
  );
};

export default CountryListItem;
