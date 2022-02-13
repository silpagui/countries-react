import { CountriesAction } from "../actions/countries.actions";

const countriesInitialState = {
  data: [],
  isLoading: true,
  errorLoading: "",
};

export function countriesReducer(
  prevStore = countriesInitialState,
  action: CountriesAction
) {
  switch (action.type) {
    case "START_LOADING_ALL_COUNTRIES":
      return {
        ...prevStore,
        isLoading: true,
      };

    case "LOAD_ALL_COUNTRIES":
      return {
        ...prevStore,
        data: action.payload,
        isLoading: false,
        errorLoading: "",
      };

    case "ERROR_LOADING_ALL_COUNTRIES":
      return {
        ...prevStore,
        isLoading: false,
        errorLoading: action.payload,
      };

    default:
      return prevStore;
  }
}
