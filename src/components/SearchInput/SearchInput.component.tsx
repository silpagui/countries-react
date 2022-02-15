import React, { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchInputOnChange } from "../../store/actions/countries.actions";
import { RootReducer } from "../../store/store";

export function SearchInput() {
  const searchInput = useSelector(
    (store: RootReducer) => store.countries.searchInput
  );
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
      value={searchInput}
    />
  );
}
