import React, { useEffect, useState } from "react";
import { Header } from "../Header/Header.component";
import { CountriesList } from "../CountriesList/CountriesList.component";
import { Loader } from "../Loader/Loader.component";
import { useDispatch, useSelector } from "react-redux";
import { loadingAllCountriesThunk } from "../../store/actions/countries.actions";

export function Home() {
  const [searchCountry, setSearchCountry] = useState("");

  const dispatch = useDispatch();

  const countries = useSelector((store) => store.countries.data);

  const isLoading = useSelector((store) => store.countries.isLoading);

  const errorLoading = useSelector((store) => store.countries.errorLoading);

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(loadingAllCountriesThunk());
    }
  }, [dispatch, countries]);

  function handleInputOnChange(event) {
    setSearchCountry(event.target.value);
  }

  const search = searchCountry.toLowerCase();
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search)
  );

  return (
    <div>
      <Header handleInputOnChange={handleInputOnChange} />
      {errorLoading ? <p>{errorLoading}</p> : ""}
      {isLoading ? <Loader /> : <CountriesList countries={filteredCountries} />}
    </div>
  );
}
