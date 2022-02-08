import { combineReducers, createStore, applyMiddleware } from "redux";
import { countriesReducer } from "./reducers/countries.reducer";
import { countryDetailsReducer } from "./reducers/countryDetails.reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  countries: countriesReducer,
  countryDetails: countryDetailsReducer,
});

export const appStore = createStore(rootReducer, applyMiddleware(thunk));
