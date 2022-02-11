import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home.component";
import { CountryDetails } from "../CountryDetails/CountryDetails.component";
import { Favorites } from "../Favorites/Favorites.component";

export function App() {
  return (
    <div className="container p-4">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path=":countryName" element={<CountryDetails />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
