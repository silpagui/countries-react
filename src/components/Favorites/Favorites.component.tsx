import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteAllFavorites,
  deleteFavorite,
} from "../../store/actions/favorites.actions";
import { RootReducer } from "../../store/store";

export function Favorites() {
  const dispatch = useDispatch();

  const countries = useSelector((store: RootReducer) => store.countries.data);
  const favorites = useSelector(
    (store: RootReducer) => store.favorites.favorites
  );

  const favoritesFiltered = countries.filter((country) =>
    favorites.find((fav) => fav === country.name.common)
  );

  return (
    <div>
      <h2>Favorites Countries</h2>
      <div className="row row-cols-1 row-cols-md-6 g-4 my-3">
        {favorites.length ? (
          favoritesFiltered.map((country) => {
            return (
              <div className="col" key={country.name.common}>
                <div className="card h-100">
                  <img
                    src={country?.flags?.svg}
                    alt={`${country.name.common} Flag`}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{country.name.common}</h5>
                    <p className="card-text">Capital: {country?.capital}</p>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        dispatch(deleteFavorite(country.name.common));
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No favorites Countries Selected</p>
        )}
      </div>
      <div className="container">
        {favorites.length ? (
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={() => {
              dispatch(deleteAllFavorites());
            }}
          >
            Remove All Favorites
          </button>
        ) : (
          ""
        )}

        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
