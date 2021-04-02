import { useState } from "react";
import "./App.css";
import Header from "./Header";
import allCountries from "./countriesAll.json";
import CountryCard from "./Card";
import SearchBar from "./SearchBar";
import RegionSelector from "./RegionSelector";

function App() {
  // PREPARATIONS
  const [region, setRegion] = useState("All Regions");
  const [searchValue, setSearchValue] = useState("");
  // collect names of regions of the countries
  const regions = getRegionNames([...allCountries]);
  // insert "All Regions" in the list of regions to enable listing countries from all regions
  regions.unshift("All Regions"); // put it at the top of the list

  // THE SEARCH FUNCTION
  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };
  // THE REGION SELECTOR FUNCTION
  const handleRegionSelection = (event) => {
    setRegion(event.target.value);
  };

  // filter countries based on user search input and/or selected region
  const countriesList = filterCountries([...allCountries], searchValue, region);

  return (
    <div class="App">
      <Header />
      <SearchBar
        type="text"
        onInput={handleSearch}
        placeholder="Search for a country..."
      />
      <RegionSelector regionNames={regions} onChange={handleRegionSelection} />
      <div className="container">
        {countriesList.map((country, index) => {
          const countryData = mapCountryData(country);
          return <CountryCard key={index} data={countryData} />;
        })}
      </div>
    </div>
  );
}

export default App;

// FUNCTION DEFINITIONS

const getRegionNames = (countriesData) => {
  const regionNames = [];
  countriesData.forEach((country) => {
    let region = country.region;
    if (!region) {
      // if the contry has no any region name (i.e. ""), set its region to "(UKNOWN)"
      region = "(UNKNOWN)";
    }
    if (!regionNames.includes(region)) {
      regionNames.push(region);
    }
  });
  return regionNames;
};

function filterCountries(countriesData, searchValue, region) {
  countriesData = countriesData
    .filter((country) => {
      // do case-insensitive matches
      const countryName = country.name.toUpperCase();
      const capitalCity = country.capital.toUpperCase();
      searchValue = searchValue.toUpperCase();
      return (
        countryName.toUpperCase().includes(searchValue) ||
        capitalCity.includes(searchValue)
      );
    })
    // filter countries by region name
    .filter((country) => {
      if (region !== "All Regions") {
        // make sure to reset region name "(UNKNOWN)" to its original value (""), as required
        if (region === "(UNKNOWN)") region = "";
        return country.region === region;
      }
      return true;
    });
  return countriesData;
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