import { useState } from "react";
import allCountries from "./countriesAll.json";
import CountryCard from "./BasicCard";
import SearchBar from "./SearchBar";
import RegionSelector from "./RegionSelector";
import "./HomePage.css"

function HomePage(props) {
  // PREPARATIONS
  const [region, setRegion] = useState("Filter by Region");
  const [searchValue, setSearchValue] = useState("");
  
  // collect names of regions of the countries, and sort them alphabetically
  const regions = getRegionNames([...allCountries]).sort((r1, r2) => {
    return r1 < r2 ? -1 : 1;
  });

  // THE SEARCH FUNCTION
  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };
  // THE REGION SELECTOR FUNCTION
  const handleRegionSelection = (selectedRegion) => {
    setRegion(selectedRegion);
  };

  // filter countries based on user search input and/or selected region
  const countriesList = filterCountries([...allCountries], searchValue, region);

  return (
    <div id= "main">
      <SearchBar
        onInput={handleSearch}
        placeholder="Search for a country..."
        colorMode={props.colorMode}
      />
      <RegionSelector
        regionNames={regions}
        onChange={handleRegionSelection}
        colorMode={props.colorMode}
      />
      <div className="container countries-container">
        {countriesList.map((country, index) => {
          const countryData = mapCountryData(country);
          return (
            <CountryCard
              key={index}
              data={countryData}
              onClick={props.handleClick}
              colorMode={props.colorMode}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;

// FUNCTION DEFINITIONS

const getRegionNames = (countriesData) => {
  const regionNames = [];
  countriesData.forEach((country) => {
    let region = country.region;
    if (!region) {
      // if the contry has no any region name (i.e. ""), set its region to "(UKNOWN)"
      // region = "(UNKNOWN)";
    }
    // if (!regionNames.includes(region)) {
    if (region !== "Polar" && !regionNames.includes(region)) {
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
      if (region !== "Filter by Region") {
        // make sure to reset region name "(UNKNOWN)" to its original value (""), as required
        // if (region === "(UNKNOWN)") region = "";
        return country.region === region;
      }
      return true;
    });
  return countriesData;
}

function mapCountryData(country) {
  return {
    name: country.name,
    alpha3Code: country.alpha3Code,
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
