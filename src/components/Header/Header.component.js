import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { SearchInput } from "../SearchInput/SearchInput.component";

export function Header({ handleInputOnChange }) {
  const favorites = useSelector((store) => store.favorites.favorites);

  return (
    <header className="mb-4">
      <h1>Rest countries</h1>
      <div className="d-flex">
        <SearchInput handleInputOnChange={handleInputOnChange} />
        <Link to="/favorites" className="btn btn-danger">
          Favorites({favorites.length})
        </Link>
      </div>
    </header>
  );
}
