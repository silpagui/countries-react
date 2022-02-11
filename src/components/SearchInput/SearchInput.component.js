import React from "react";

export function SearchInput({ handleInputOnChange }) {
  return (
    <input
      type="text"
      placeholder="Search country"
      className="form-control flex-grow-1"
      onChange={handleInputOnChange}
    />
  );
}
