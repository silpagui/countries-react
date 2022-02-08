import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { loadCountryDetailsThunk } from "../../store/actions/countryDetails.actions";
import { Loader } from "../Loader/Loader.component";

export function CountryDetails() {
  let { countryName } = useParams();
  const dispatch = useDispatch();

  const isLoading = useSelector((store) => store.countryDetails.isLoading);
  const country = useSelector((store) => store.countryDetails.data);

  useEffect(() => {
    if (country?.name?.common !== countryName) {
      dispatch(loadCountryDetailsThunk(countryName));
    }
  }, [dispatch, countryName, country]);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="card">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            className="img-fluid rounded-start"
            src={country?.flags?.svg}
            alt={`${countryName} Flag`}
          />
        </div>
        <div className="col-md-8">
          <h5 className="card-header">{countryName}</h5>
          <div className="card-body">
            <h6 className="card-title">
              Official Name: {country?.name?.official}
            </h6>
            <p className="card-text">Capital: {country?.capital}</p>
            <p className="card-text">
              Currencies:{" "}
              {country?.currencies &&
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
