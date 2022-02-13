import {
  Country,
  CountryDetailsActionThunk,
  ErrorLoadingCountryDetailsAction,
  LoadCountryDetailsAction,
  StartLoadingCountryDetailsAction,
} from "../store.models";

export function loadCountryDetails(data: Country): LoadCountryDetailsAction {
  return {
    type: "LOAD_COUNTRY_DETAILS",
    payload: data,
  };
}

export function startLoadingCountryDetails(): StartLoadingCountryDetailsAction {
  return {
    type: "START_LOADING_COUNTRY_DETAILS",
  };
}

export function errorLoadingCountryDetails(): ErrorLoadingCountryDetailsAction {
  return {
    type: "ERROR_LOADING_COUNTRY_DETAILS",
    payload: "Oops, error Loading Country!",
  };
}

export const loadCountryDetailsThunk: CountryDetailsActionThunk = (
  countryName
) => {
  return function (dispatch) {
    dispatch(startLoadingCountryDetails());
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(loadCountryDetails(data[0]));
      })
      .catch((error) => dispatch(errorLoadingCountryDetails()));
  };
};
