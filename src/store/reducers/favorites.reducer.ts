import { FavoritesAction } from "../actions/favorites.actions";

const favoritesInitialState = {
  favorites: [],
};

export function favoritesReducer(
  prevStore = favoritesInitialState,
  action: FavoritesAction
) {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        ...prevStore,
        // favorites: prevStore.favorites.concat(action.payload),
      };
    case "DELETE_FAVORITE":
      return {
        ...prevStore,
        favorites: prevStore.favorites.filter((item) => {
          return item !== action.payload;
        }),
      };
    case "DELETE_ALL_FAVORITES":
      return {
        ...prevStore,
        favorites: [],
      };
    default:
      return prevStore;
  }
}
