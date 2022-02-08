import {
  TYPE_LOAD_COUNTRY_DETAILS,
  TYPE_START_LOADING_COUNTRY_DETAILS,
  TYPE_ERROR_LOADING_COUNTRY_DETAILS,
} from "../actions/countryDetails.actions";

const countryDetailsInitialState = {
  data: {},
  isLoading: true,
  errorLoading: "",
};

export function countryDetailsReducer(
  prevStore = countryDetailsInitialState,
  action
) {
  switch (action.type) {
    case TYPE_START_LOADING_COUNTRY_DETAILS:
      return {
        ...prevStore,
        isLoading: true,
      };

    case TYPE_LOAD_COUNTRY_DETAILS:
      return {
        ...prevStore,
        data: action.payload,
        isLoading: false,
        errorLoading: "",
      };

    case TYPE_ERROR_LOADING_COUNTRY_DETAILS:
      return {
        ...prevStore,
        isLoading: false,
        errorLoading: action.payload,
      };

    default:
      return prevStore;
  }
}
