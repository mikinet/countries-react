import { useState } from "react";

const RegionSelector = (props) => {
  const [selectedRegion, setSelectedRegion] = useState("Filter by Region");
  const [displayMode, setDisplayMode] = useState("collapsed");
  const [iconDirection, setIconDirection] = useState("down");

  const options = props.regionNames;

  const showHideOptions = () => {
    if (displayMode === "collapsed") {
      setDisplayMode("expanded");
      setIconDirection("up");
    } else {
      setDisplayMode("collapsed");
      setIconDirection("down");
    }
  };

  const changeRegion = (event) => {
    const regionName = event.target.textContent;
    setSelectedRegion(regionName);
    setDisplayMode("collapsed");
    setIconDirection("down");
    props.onChange(regionName);
  };

  return (
    <div id="region-selector" className="selector">
      <div className={`option selected-option`} onClick={showHideOptions}>
        <span>{selectedRegion}</span>
        <span>
          <i class={`fa fa-angle-${iconDirection}`}></i>
        </span>
      </div>
      <div className="options-list">
        {options.map((value, index) => {
          // if (!value) {
          //   value = "No Region";
          // }
          return (
            <div
              key={index}
              className={`${displayMode} option`}
              onClick={changeRegion}
            >
              <span>{value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RegionSelector;
