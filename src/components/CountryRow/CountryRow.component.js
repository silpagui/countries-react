import React from "react";
import { Link } from "react-router-dom";

export function CountryRow({ flagSvg, name, population, languages, region }) {
  return (
    <tr>
      <td>
        <img src={flagSvg} width="40" alt={`${name} Flag`} />
      </td>
      <td>
        <Link to={`/${name}`}>{name}</Link>
      </td>
      <td>{population}</td>
      <td>{languages && Object.values(languages).join(", ")}</td>
      <td>{region}</td>
    </tr>
  );
}
