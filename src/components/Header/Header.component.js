import React from "react";
import { SearchInput } from "../SearchInput/SearchInput.component";

export function Header({ handleInputOnChange }) {
  return (
    <header className="mb-4">
      <h1>Rest countries</h1>
      <SearchInput handleInputOnChange={handleInputOnChange} />
    </header>
  );
}
