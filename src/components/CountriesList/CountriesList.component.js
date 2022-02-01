import React from "react";
import { Link } from "react-router-dom";

export function CountriesList({ filteredCountry }) {
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
        {filteredCountry.length > 1 ? (
          filteredCountry.map((country) => {
            return (
              <tr key={country.name.common}>
                <td>
                  <img
                    src={country.flags.svg}
                    width="40"
                    alt={`${country.name.common} Flag`}
                  />
                </td>
                <td>
                  <Link to={`/${country.name.common}`}>
                    {country.name.common}
                  </Link>
                </td>
                <td>{country.population}</td>
                <td>
                  {country.languages &&
                    Object.values(country.languages).join(", ")}
                </td>
                <td>{country.region}</td>
              </tr>
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
