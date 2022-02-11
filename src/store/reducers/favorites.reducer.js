import {
  TYPE_ADD_FAVORITE,
  TYPE_DELETE_FAVORITE,
  TYPE_DELETE_ALL_FAVORITES,
} from "../actions/favorites.actions";

const favoritesInitialState = {
  favorites: [],
};

export function favoritesReducer(prevStore = favoritesInitialState, action) {
  switch (action.type) {
    case TYPE_ADD_FAVORITE:
      return {
        ...prevStore,
        favorites: prevStore.favorites.concat(action.payload),
      };
    case TYPE_DELETE_FAVORITE:
      return {
        ...prevStore,
        favorites: prevStore.favorites.filter((item) => {
          return item !== action.payload;
        }),
      };
    case TYPE_DELETE_ALL_FAVORITES:
      return {
        ...prevStore,
        favorites: [],
      };
    default:
      return prevStore;
  }
}
