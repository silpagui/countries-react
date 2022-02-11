import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addFavorite,
  deleteFavorite,
} from "../../store/actions/favorites.actions";

export function CountryRow({ flagSvg, name, population, languages, region }) {
  const favorites = useSelector((store) => store.favorites.favorites);
  const dispatch = useDispatch();

  const isAddedAsFav = favorites.find((fav) => fav === name);

  return (
    <tr>
      <td>
        <img src={flagSvg} width="40" alt={`${name} Flag`} />
      </td>
      <td>
        <Link to={`/${name}`}>{name}</Link>
      </td>
      <td>{population}</td>
      <td>{languages && Object.values(languages).join(", ")}</td>
      <td>{region}</td>
      <td>
        <button
          className={"btn btn-outline-danger " + (isAddedAsFav ? "active" : "")}
          onClick={() => {
            if (isAddedAsFav) {
              dispatch(deleteFavorite(name));
            } else {
              dispatch(addFavorite(name));
            }
          }}
        >
          <span className="visually-hidden">Like</span>
          <i className="bi bi-balloon-heart-fill"></i>
        </button>
      </td>
    </tr>
  );
}
