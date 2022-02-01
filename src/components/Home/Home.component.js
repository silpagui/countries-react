import React, { useEffect, useState } from "react";
import { Header } from "../Header/Header.component";
import { CountriesList } from "../CountriesList/CountriesList.component";

export function Home() {
  const [countriesList, setCountriesList] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountriesList(data);
      });
  }, [setCountriesList]);

  function handleInputOnChange(event) {
    setSearchCountry(event.target.value);
  }

  const search = searchCountry.toLowerCase();
  const filteredCountries = countriesList.filter((country) =>
    country.name.common.toLowerCase().includes(search)
  );

  return (
    <div>
      <Header handleInputOnChange={handleInputOnChange} />
      <CountriesList filteredCountries={filteredCountries} />
    </div>
  );
}
