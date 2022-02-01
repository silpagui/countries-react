import React, { useState } from "react";
import { useFetch } from "../../hooks/useFetch.hook";
import { Header } from "../Header/Header.component";
import { CountriesList } from "../CountriesList/CountriesList.component";
import { Loader } from "../Loader/Loader.component";

export function Home() {
  const [searchCountry, setSearchCountry] = useState("");

  const { data, isLoading } = useFetch("https://restcountries.com/v3.1/all");

  function handleInputOnChange(event) {
    setSearchCountry(event.target.value);
  }

  const search = searchCountry.toLowerCase();
  const filteredCountries = data.filter((country) =>
    country.name.common.toLowerCase().includes(search)
  );

  return (
    <div>
      <Header handleInputOnChange={handleInputOnChange} />
      {isLoading ? <Loader /> : <CountriesList countries={filteredCountries} />}
    </div>
  );
}
