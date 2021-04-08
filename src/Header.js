import { useState } from "react";

const Header = (props) => {
  const [mode, setMode] = useState("Light");

  const changeColorTheme = () => {
    const colorTheme = props.colorMode;
    if (colorTheme === "light") {
      setMode("Light");
      document.querySelector("body").className = "dark";
      return props.handleClick("dark");
    }
    setMode("Dark");
    document.querySelector("body").className = "light";
    return props.handleClick("light");
  };

  return (
    <div id="header" className={props.colorMode}>
      <h3 className="title">Where in the World?</h3>
      <div class="mode-selector" onClick={changeColorTheme}>
        <span className="moon">
          <i className="fas fa-moon"></i>
        </span>
        <span>{mode} Mode</span>
      </div>
    </div>
  );
};
export default Header;
