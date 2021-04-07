import { useState } from "react";
import "./App.css";
import allCountries from "./countriesAll.json";
import Header from "./Header";
import HomeView from "./HomePage";
import CountryView from "./CountryPage";

function App() {
  const [countryCode, setCountryCode] = useState("");
  // const [view, setView] = useState("HOME");

  const changeView = (code) => {
    setCountryCode(code);
  };
  // PREPARATIONS
  return (
    <div class="App">
      <Header />
      {!countryCode ? (
        <HomeView countriesData={allCountries} handleClick={changeView} />
      ) : (
        <CountryView code={countryCode} handleClick={changeView} />
      )}
    </div>
  );
}

export default App;
