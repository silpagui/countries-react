import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export function CountryDetails() {
  let { countryName } = useParams();
  const [country, setCountry] = useState({});

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((response) => response.json())
      .then((data) => {
        setCountry(data[0]);
      });
  }, [setCountry, countryName]);

  return (
    <div className="card">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            className="img-fluid rounded-start"
            src={country.flags?.svg}
            alt={`${countryName} Flag`}
          />
        </div>
        <div className="col-md-8">
          <h5 className="card-header">{countryName}</h5>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">Official Name: {country.name?.official}</p>
            <p className="card-text">Capital: {country.capital}</p>
            <p className="card-text">
              Currencies:{" "}
              {country.currencies &&
                Object.values(country.currencies)
                  .map((item) => item.name)
                  .join(", ")}
            </p>

            <Link to="/" className="btn btn-primary">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
