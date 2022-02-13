import { combineReducers, createStore, applyMiddleware } from "redux";
import { countriesReducer } from "./reducers/countries.reducer";
import { countryDetailsReducer } from "./reducers/countryDetails.reducer";
import { favoritesReducer } from "./reducers/favorites.reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  countries: countriesReducer,
  countryDetails: countryDetailsReducer,
  favorites: favoritesReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;

export const appStore = createStore(rootReducer, applyMiddleware(thunk));
