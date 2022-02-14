import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../Header/Header.component";
import { CountriesList } from "../CountriesList/CountriesList.component";
import { Loader } from "../Loader/Loader.component";
import { loadingAllCountriesThunk } from "../../store/actions/countries.actions";
import { RootReducer } from "../../store/store";

export function Home() {
  const dispatch = useDispatch();

  const countries = useSelector((store: RootReducer) => store.countries.data);

  const searchInput = useSelector(
    (store: RootReducer) => store.countries.searchInput
  );

  const isLoading = useSelector(
    (store: RootReducer) => store.countries.isLoading
  );

  const errorLoading = useSelector(
    (store: RootReducer) => store.countries.errorLoading
  );

  useEffect(() => {
    if (countries.length === 0) {
      dispatch(loadingAllCountriesThunk());
    }
  }, [dispatch, countries]);

  const search = searchInput.toLowerCase();
  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search)
  );

  return (
    <div>
      <Header />
      {errorLoading ? <p>{errorLoading}</p> : ""}
      {isLoading ? <Loader /> : <CountriesList countries={filteredCountries} />}
    </div>
  );
}
