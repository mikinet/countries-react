const RegionSelector = (props) => {
  return (
    <select id="regions" onChange={props.onChange}>
      {props.regionNames.map((name, index) => {
        if (!name) {
          name="No Region"
        }
        return (
          <option key={index} value={name}>
            {name}
          </option>
        );
      })}
    </select>
  );
};
export default RegionSelector;
