const Card = (props) => {
  const countryData = props.data;
  const sendCountryCode = () => {
    props.onClick(countryData.name);
  };

  const summaryInfo = {
    Population: countryData.population,
    Region: countryData.region,
    Capital: countryData.capital,
  };
  return (
    <div
      id="basic-country-card"
      className={`${props.colorMode} basic-country-details`}
      onClick={sendCountryCode}
    >
      <img
        className="flag"
        src={countryData.flag}
        alt={`The Flag of ${countryData.name}`}
      />
      <h3 className="country-name">{countryData.name}</h3>
      <InfoList list={summaryInfo} />
    </div>
  );
};
export default Card;

export const InfoList = ({ list }) => {
  return (
    <ul className="summary-info">
      {Object.keys(list).map((info, index) => (
        <li key={index} className="info-item">
          <span>{info}:</span>&nbsp;<span>{list[info]}</span>
        </li>
      ))}
    </ul>
  );
};
