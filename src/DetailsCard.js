const DetailsCard = (props) => {
  const {
    countryName,
    basicInfo,
    extraInfo,
    borderCountries,
    flag,
  } = props.countryData;

  return (
    <div id="country-card" className={`${props.colorMode} container country-details`}>
      <Flag src={flag} alt={`${countryName} flag`} />
      <div className="country-info">
        <h3>{countryName}</h3>
        <div className="details">
          <InfoList list={basicInfo} />
          <InfoList list={extraInfo} />
        </div>
        <div>
          <label>Border Countires: </label>
          <Borders borders={borderCountries} handleClick={props.handleClick} />
        </div>
      </div>
    </div>
  );
};
export default DetailsCard;

export const Flag = (props) => {
  return <img src={props.src} alt={props.alt} />;
};

export const InfoList = ({ list }) => {
  console.log(list);
  return (
    <ul className="info-list">
      {Object.keys(list).map((info, index) => {
        let infoItem = list[info];
        if (!Array.isArray(infoItem)) {
          infoItem = [infoItem];
        }
        return (
          <li key={index} className="info-item">
            <span className="label">{info}:</span>&nbsp;<span>{list[info]}</span>
          </li>
        );
      })}
    </ul>
  );
};

export const Borders = (props) => {
  return props.borders.map((countryName, index) => (
    <button id={props.borders[index]} key={index} onClick={props.handleClick}>
      {countryName}{" "}
    </button>
  ));
};
