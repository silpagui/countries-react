type LoadAllCountriesAction = {
  type: "LOAD_ALL_COUNTRIES";
  payload: any; // TODO: fix
};

type StartLoadingAllCountriesAction = {
  type: "START_LOADING_ALL_COUNTRIES";
};

type ErrorLoadingAllCountriesAction = {
  type: "ERROR_LOADING_ALL_COUNTRIES";
  payload: string;
};

export type CountriesAction =
  | LoadAllCountriesAction
  | StartLoadingAllCountriesAction
  | ErrorLoadingAllCountriesAction;

export function loadAllCountries(data: any): LoadAllCountriesAction {
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

//TODO:add types

export function loadingAllCountriesThunk() {
  return function (dispatch: any) {
    dispatch(startLoadingAllCountries());
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        dispatch(loadAllCountries(data));
      })
      .catch((error) => dispatch(errorLoadingAllCountries()));
  };
}
