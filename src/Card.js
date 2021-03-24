const Card = (props) => {
  const countryData = props.data;
  return (
    <div class="card basic-card">
      <img
        className="flag"
        src={countryData.flag}
        alt={`The Flag of ${countryData.name}`}
      />
      <h3 className="country-name">{countryData.name}</h3>
      <ul className="summary-info">
        <li className="info-item">
          <span>Population:</span>&nbsp;<span>{countryData.population}</span>
        </li>
        <li className="info-item">
          <span>Region:</span>&nbsp;<span>{countryData.region}</span>
        </li>
        <li className="info-item">
          <span>Capital:</span>&nbsp;<span>{countryData.capital}</span>
        </li>
      </ul>
    </div>
  );
};
export default Card;
