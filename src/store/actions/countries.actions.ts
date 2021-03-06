import {
  Country,
  ErrorLoadingAllCountriesAction,
  LoadAllCountriesAction,
  LoadingAllCountriesActionThunk,
  SearchInputOnChange,
  StartLoadingAllCountriesAction,
} from "../store.models";

export function loadAllCountries(data: Country[]): LoadAllCountriesAction {
  return {
    type: "LOAD_ALL_COUNTRIES",
    payload: data,
  };
}

export function startLoadingAllCountries(): StartLoadingAllCountriesAction {
  return {
    type: "START_LOADING_ALL_COUNTRIES",
  };
}

export function errorLoadingAllCountries(): ErrorLoadingAllCountriesAction {
  return {
    type: "ERROR_LOADING_ALL_COUNTRIES",
    payload: "Oops, error Loading!",
  };
}

export function searchInputOnChange(data: string): SearchInputOnChange {
  return {
    type: "SEARCH_INPUT_ON_CHANGE",
    payload: data,
  };
}

export const loadingAllCountriesThunk: LoadingAllCountriesActionThunk = () => {
  return function (dispatch: any) {
    dispatch(startLoadingAllCountries());
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        dispatch(loadAllCountries(data));
      })
      .catch((error) => dispatch(errorLoadingAllCountries()));
  };
};
