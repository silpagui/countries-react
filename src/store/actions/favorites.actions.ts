import {
  AddFavoriteAction,
  DeleteAllFavoritesAction,
  DeleteFavoriteAction,
} from "../store.models";

export function addFavorite(favorite: string): AddFavoriteAction {
  return {
    type: "ADD_FAVORITE",
    payload: favorite,
  };
}

export function deleteFavorite(favorite: string): DeleteFavoriteAction {
  return {
    type: "DELETE_FAVORITE",
    payload: favorite,
  };
}

export function deleteAllFavorites(): DeleteAllFavoritesAction {
  return {
    type: "DELETE_ALL_FAVORITES",
  };
}
