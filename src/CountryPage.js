import { useState } from "react";
import allCountries from "./countriesAll.json";
import DetailsCard from "./DetailsCard";
import "./CountryPage.css";

const CountryPage = (props) => {
  const [countryData, setCountryData] = useState(getCountryData(props.code));

  const setCountryCode = (event) => {
    const id = event.target.id;
    if (id === "btn-back") {
      return props.handleClick("");
    }
    setCountryData(getCountryData(id));
  };

  return (
    <div id="main">
      <button
        id="btn-back"
        className={props.colorMode}
        onClick={setCountryCode}
      >
        &larr;&nbsp;&nbsp;Back
      </button>
      <DetailsCard countryData={countryData} handleClick={setCountryCode} colorMode={props.colorMode}/>
    </div>
  );
};
export default CountryPage;

function getCountryData(countryName) {
  const country = allCountries.find((country) => country.name === countryName);

  return {
    countryName: country.name,
    flag: country.flag,
    basicInfo: {
      "Native Name": country.nativeName,
      Population: country.population
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      Region: country.region,
      "Sub Region": country.subregion,
      Capital: country.capital,
    },
    extraInfo: {
      "Top Level Domain": country.topLevelDomain,
      Currencies: country.currencies.name,
      Languages: country.languages.map((language) => language.name).join(", "),
    },
    borderCountries: getCountryNames(country.borders),
  };
}

function getCountryNames(countryCodes) {
  return countryCodes
    .map((code) => allCountries.find((country) => country.alpha3Code === code))
    .map((country) => country.name);
}

// function getLanguageNames(languages)=>