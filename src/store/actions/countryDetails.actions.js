export const TYPE_START_LOADING_COUNTRY_DETAILS =
  "START_LOADING_COUNTRY_DETAILS";
export const TYPE_LOAD_COUNTRY_DETAILS = "LOAD_COUNTRY_DETAILS";
export const TYPE_ERROR_LOADING_COUNTRY_DETAILS =
  "ERROR_LOADING_COUNTRY_DETAILS";

export function loadCountryDetails(data) {
  return {
    type: TYPE_LOAD_COUNTRY_DETAILS,
    payload: data,
  };
}

export function startLoadingCountryDetails() {
  return {
    type: TYPE_START_LOADING_COUNTRY_DETAILS,
  };
}

export function errorLoadingCountryDetails() {
  return {
    type: TYPE_ERROR_LOADING_COUNTRY_DETAILS,
    payload: "Oops, error Loading Country!",
  };
}

export function loadCountryDetailsThunk(countryName) {
  return function (dispatch) {
    dispatch(startLoadingCountryDetails());
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(loadCountryDetails(data[0]));
      })
      .catch((error) => dispatch(errorLoadingCountryDetails()));
  };
}
