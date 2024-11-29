import { useState, useEffect } from "react";
import "./App.css";

import countryService from "./services/countries";
import React from "react";
import Filter from "./components/Filter";
import Result from "./components/Result";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [countriesData, setCountriesData] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    countryService.getAll().then((data) => {
      setCountriesData(data);
    });
  }, []);

  //console.log(countriesData);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query === "") return setFilteredCountries([]);

    const filtered = countriesData.filter((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  return (
    <>
      <Filter
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
      />
      <Result countries={filteredCountries} />
    </>
  );
};

export default App;
