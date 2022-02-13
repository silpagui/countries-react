import { CountryDetailsAction, CountryDetailsStore } from "../store.models";

const countryDetailsInitialState = {
  data: {
    name: { common: "", official: "" },
    currencies: {},
    capital: [],
    flags: { svg: "" },
    population: 0,
    languages: {},
    region: "",
  },
  isLoading: true,
  errorLoading: "",
};

export function countryDetailsReducer(
  prevStore: CountryDetailsStore = countryDetailsInitialState,
  action: CountryDetailsAction
): CountryDetailsStore {
  switch (action.type) {
    case "START_LOADING_COUNTRY_DETAILS":
      return {
        ...prevStore,
        isLoading: true,
      };

    case "LOAD_COUNTRY_DETAILS":
      return {
        ...prevStore,
        data: action.payload,
        isLoading: false,
        errorLoading: "",
      };

    case "ERROR_LOADING_COUNTRY_DETAILS":
      return {
        ...prevStore,
        isLoading: false,
        errorLoading: action.payload,
      };

    default:
      return prevStore;
  }
}
