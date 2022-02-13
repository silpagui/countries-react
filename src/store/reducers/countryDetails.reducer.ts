import { CountryDetailsAction } from "../actions/countryDetails.actions";

const countryDetailsInitialState = {
  data: {},
  isLoading: true,
  errorLoading: "",
};

export function countryDetailsReducer(
  prevStore = countryDetailsInitialState,
  action: CountryDetailsAction
) {
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
