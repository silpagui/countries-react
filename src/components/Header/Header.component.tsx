import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootReducer } from "../../store/store";
import { SearchInput } from "../SearchInput/SearchInput.component";

export function Header() {
  const favorites = useSelector(
    (store: RootReducer) => store.favorites.favorites
  );

  return (
    <header className="mb-4">
      <h1>Rest countries</h1>
      <div className="d-flex">
        <SearchInput />
        <Link to="/favorites" className="btn btn-danger">
          Favorites({favorites.length})
        </Link>
      </div>
    </header>
  );
}
