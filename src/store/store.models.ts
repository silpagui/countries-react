import { Dispatch } from "react";

export type Country = {
  name: { common: string; official: string };
  currencies: {
    [key: string]: { name: string; symbol: string };
  };
  capital: string[];
  flags: { svg: string };
  population: number;
  languages: { [key: string]: string };
  region: string;
};

export type LoadAllCountriesAction = {
  type: "LOAD_ALL_COUNTRIES";
  payload: Country[];
};

export type StartLoadingAllCountriesAction = {
  type: "START_LOADING_ALL_COUNTRIES";
};

export type ErrorLoadingAllCountriesAction = {
  type: "ERROR_LOADING_ALL_COUNTRIES";
  payload: string;
};

export type LoadingAllCountriesActionThunk = () => (
  dispatch: Dispatch<CountriesAction>
) => void;

export type SearchInputOnChange = {
  type: "SEARCH_INPUT_ON_CHANGE";
  payload: string;
};

export type CountriesAction =
  | LoadAllCountriesAction
  | StartLoadingAllCountriesAction
  | ErrorLoadingAllCountriesAction
  | SearchInputOnChange;

export type CountriesStore = {
  data: Country[];
  isLoading: boolean;
  errorLoading: string;
  searchInput: string;
};

export type LoadCountryDetailsAction = {
  type: "LOAD_COUNTRY_DETAILS";
  payload: Country;
};

export type StartLoadingCountryDetailsAction = {
  type: "START_LOADING_COUNTRY_DETAILS";
};

export type ErrorLoadingCountryDetailsAction = {
  type: "ERROR_LOADING_COUNTRY_DETAILS";
  payload: string;
};

export type CountryDetailsActionThunk = (
  countryName: string
) => (dispatch: Dispatch<CountryDetailsAction>) => void;

export type CountryDetailsAction =
  | LoadCountryDetailsAction
  | StartLoadingCountryDetailsAction
  | ErrorLoadingCountryDetailsAction;

export type CountryDetailsStore = {
  data: Country;
  isLoading: boolean;
  errorLoading: string;
};

export type AddFavoriteAction = {
  type: "ADD_FAVORITE";
  payload: string;
};

export type DeleteFavoriteAction = {
  type: "DELETE_FAVORITE";
  payload: string;
};

export type DeleteAllFavoritesAction = {
  type: "DELETE_ALL_FAVORITES";
};

export type FavoritesAction =
  | AddFavoriteAction
  | DeleteFavoriteAction
  | DeleteAllFavoritesAction;

export type FavoritesStore = {
  favorites: string[];
};
