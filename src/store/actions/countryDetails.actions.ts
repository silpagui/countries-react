type LoadCountryDetailsAction = {
  type: "LOAD_COUNTRY_DETAILS";
  payload: any;
};

type StartLoadingAllCountriesAction = {
  type: "START_LOADING_COUNTRY_DETAILS";
};

type ErrorLoadingAllCountriesAction = {
  type: "ERROR_LOADING_COUNTRY_DETAILS";
  payload: string;
};

export type CountryDetailsAction =
  | LoadCountryDetailsAction
  | StartLoadingAllCountriesAction
  | ErrorLoadingAllCountriesAction;

export function loadCountryDetails(data: any): LoadCountryDetailsAction {
  return {
    type: "LOAD_COUNTRY_DETAILS",
    payload: data,
  };
}

export function startLoadingCountryDetails(): StartLoadingAllCountriesAction {
  return {
    type: "START_LOADING_COUNTRY_DETAILS",
  };
}

export function errorLoadingCountryDetails(): ErrorLoadingAllCountriesAction {
  return {
    type: "ERROR_LOADING_COUNTRY_DETAILS",
    payload: "Oops, error Loading Country!",
  };
}

export function loadCountryDetailsThunk(countryName: string) {
  return function (dispatch: any) {
    dispatch(startLoadingCountryDetails());
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(loadCountryDetails(data[0]));
      })
      .catch((error) => dispatch(errorLoadingCountryDetails()));
  };
}
