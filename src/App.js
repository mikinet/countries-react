import { useState } from "react";
import "./App.css";
import Header from "./Header";
import allCountries from "./countriesAll.json";
import CountryCard from "./Card";
import SearchBar from "./SearchBar";

function App() {
  const [countryList, setCountryList] = useState([...allCountries]);
  const handleSearch = (event) => {
    const input = event.target.value;
    setCountryList(
      // search countries by their names or capital cities
      filterCountries([...allCountries], input)
    );
  };
  return (
    <div class="App">
      <Header />
      <SearchBar
        type="text"
        onInput={handleSearch}
        placeholder="Search for a country..."
      />
      <div className="container">
        {countryList.map((country, index) => {
          const countryData = mapCountryData(country);
          // console.log(countryData);
          return <CountryCard key={index} data={countryData} />;
        })}
      </div>
    </div>
  );
}

export default App;

function filterCountries(countryList, keyWord) {
  return countryList.filter((country) => {
    // do case-insensitive matches
    const countryName = country.name.toUpperCase();
    const capitalCity = country.capital.toUpperCase();
    keyWord = keyWord.toUpperCase();
    return (
      countryName.toUpperCase().includes(keyWord) ||
      capitalCity.includes(keyWord)
    );
  });
}

function mapCountryData(country) {
  return {
    name: country.name,
    nativeName: country.nativeName,
    population: country.population
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    region: country.region,
    subregion: country.subregion,
    capital: country.capital,
    topLevelDomain: country.topLevelDomain,
    currencies: country.currencies,
    languages: country.languages,
    bordersAlpha3Codes: country.borders,
    flag: country.flag,
  };
}
