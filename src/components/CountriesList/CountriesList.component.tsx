import React from "react";
import { Country } from "../../store/store.models";
import { CountryRow } from "../CountryRow/CountryRow.component";

interface CountryListProps {
  countries: Country[];
}

export function CountriesList({ countries }: CountryListProps) {
  const hasCountries = countries.length > 0;
  return (
    <table className="table table-hover">
      <thead className="table-light">
        <tr>
          <th scope="col">Flag</th>
          <th scope="col">Country Name</th>
          <th scope="col">Population</th>
          <th scope="col">Language</th>
          <th scope="col">Region</th>
          <th scope="col">Select</th>
        </tr>
      </thead>
      <tbody>
        {hasCountries ? (
          countries.map((country) => {
            return (
              <CountryRow
                key={country.name.common}
                name={country.name.common}
                flagSvg={country.flags.svg}
                population={country.population}
                languages={country.languages}
                region={country.region}
              />
            );
          })
        ) : (
          <tr>
            <td colSpan={6}>No Country Found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
