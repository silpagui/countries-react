type AddFavoriteAction = {
  type: "ADD_FAVORITE";
  payload: string;
};

type DeleteFavoriteAction = {
  type: "DELETE_FAVORITE";
  payload: string;
};

type DeleteAllFavoritesAction = {
  type: "DELETE_ALL_FAVORITES";
};

export type FavoritesAction =
  | AddFavoriteAction
  | DeleteFavoriteAction
  | DeleteAllFavoritesAction;

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
