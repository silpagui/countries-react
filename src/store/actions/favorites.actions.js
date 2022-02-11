export const TYPE_ADD_FAVORITE = "ADD_FAVORITE";
export const TYPE_DELETE_FAVORITE = "DELETE_FAVORITE";
export const TYPE_DELETE_ALL_FAVORITES = "DELETE_ALL_FAVORITES";

export function addFavorite(favorite) {
  return {
    type: TYPE_ADD_FAVORITE,
    payload: favorite,
  };
}

export function deleteFavorite(favorite) {
  return {
    type: TYPE_DELETE_FAVORITE,
    payload: favorite,
  };
}

export function deleteAllFavorites() {
  return {
    type: TYPE_DELETE_ALL_FAVORITES,
  };
}
