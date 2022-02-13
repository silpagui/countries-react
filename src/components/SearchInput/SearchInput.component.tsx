import React, { FormEvent } from "react";

interface SearchInputProps {
  handleInputOnChange: (event: FormEvent<HTMLInputElement>) => void;
}

export function SearchInput({ handleInputOnChange }: SearchInputProps) {
  return (
    <input
      type="text"
      placeholder="Search country"
      className="form-control flex-grow-1"
      onChange={handleInputOnChange}
    />
  );
}
