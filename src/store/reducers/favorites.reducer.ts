import { FavoritesAction, FavoritesStore } from "../store.models";

const favoritesInitialState = {
  favorites: [],
};

export function favoritesReducer(
  prevStore: FavoritesStore = favoritesInitialState,
  action: FavoritesAction
): FavoritesStore {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        ...prevStore,
        favorites: prevStore.favorites.concat(action.payload),
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
