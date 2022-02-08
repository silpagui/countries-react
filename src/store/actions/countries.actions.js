export const TYPE_START_LOADING_ALL_COUNTRIES = "START_LOADING_ALL_COUNTRIES";
export const TYPE_LOAD_ALL_COUNTRIES = "LOAD_ALL_COUNTRIES";
export const TYPE_ERROR_LOADING_ALL_COUNTRIES = "ERROR_LOADING_ALL_COUNTRIES";

export function loadAllCountries(data) {
  return {
    type: TYPE_LOAD_ALL_COUNTRIES,
    payload: data,
  };
}

export function startLoadingAllCountries() {
  return {
    type: TYPE_START_LOADING_ALL_COUNTRIES,
  };
}

export function errorLoadingAllCountries() {
  return {
    type: TYPE_ERROR_LOADING_ALL_COUNTRIES,
    payload: "Oops, error Loading!",
  };
}

export function loadingAllCountriesThunk() {
  return function (dispatch) {
    dispatch(startLoadingAllCountries());
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        dispatch(loadAllCountries(data));
      })
      .catch((error) => dispatch(errorLoadingAllCountries()));
  };
}
