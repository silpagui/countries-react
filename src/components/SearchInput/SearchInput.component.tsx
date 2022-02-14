import React, { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { searchInputOnChange } from "../../store/actions/countries.actions";

export function SearchInput() {
  const dispatch = useDispatch();

  function handleInputOnChange(event: FormEvent<HTMLInputElement>) {
    dispatch(searchInputOnChange(event.currentTarget.value));
  }

  return (
    <input
      type="text"
      placeholder="Search country"
      className="form-control flex-grow-1"
      onChange={handleInputOnChange}
    />
  );
}
