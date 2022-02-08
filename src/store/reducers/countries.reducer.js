import {
  TYPE_START_LOADING_ALL_COUNTRIES,
  TYPE_LOAD_ALL_COUNTRIES,
  TYPE_ERROR_LOADING_ALL_COUNTRIES,
} from "../actions/countries.actions";

const countriesInitialState = {
  data: [],
  isLoading: true,
  errorLoading: "",
};

export function countriesReducer(prevStore = countriesInitialState, action) {
  switch (action.type) {
    case TYPE_START_LOADING_ALL_COUNTRIES:
      return {
        ...prevStore,
        isLoading: true,
      };

    case TYPE_LOAD_ALL_COUNTRIES:
      return {
        ...prevStore,
        data: action.payload,
        isLoading: false,
        errorLoading: "",
      };

    case TYPE_ERROR_LOADING_ALL_COUNTRIES:
      return {
        ...prevStore,
        isLoading: false,
        errorLoading: action.payload,
      };

    default:
      return prevStore;
  }
}
