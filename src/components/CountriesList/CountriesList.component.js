import React from "react";
import { CountryRow } from "../CountryRow/CountryRow.component";

export function CountriesList({ filteredCountries }) {
  return (
    <table className="table table-hover">
      <thead className="table-light">
        <tr>
          <th scope="col">Flag</th>
          <th scope="col">Country Name</th>
          <th scope="col">Population</th>
          <th scope="col">Language</th>
          <th scope="col">Region</th>
        </tr>
      </thead>
      <tbody>
        {filteredCountries.length > 1 ? (
          filteredCountries.map((country) => {
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
            <td colSpan={5}>No Country Found</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
