import { useState } from "react";
import "./App.css";
import allCountries from "./countriesAll.json";
import Header from "./Header";
import HomeView from "./HomePage";
import CountryView from "./CountryPage";

function App() {
  // PREPARATIONS
  const [countryCode, setCountryCode] = useState("");
  const [mode, setMode] = useState("dark");

  const changeView = (code) => {
    setCountryCode(code);
  };

  const changeColorMode = (colorMode) => {
    setMode(colorMode);
  };

  return (
    <div className="App">
      <Header handleClick={changeColorMode} colorMode={mode} />
      {!countryCode ? (
        <HomeView
          countriesData={allCountries}
          handleClick={changeView}
          colorMode={mode}
        />
      ) : (
        <CountryView
          code={countryCode}
          handleClick={changeView}
          colorMode={mode}
        />
      )}
    </div>
  );
}

export default App;
