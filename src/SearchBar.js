const SearchBar = (props) => {
  return (
    <div id="search-bar" className={props.colorMode}>
      <span>
        <i className={`fas fa-search`}></i>
      </span>
      <input
        id="search"
        type={props.type}
        onInput={props.onInput}
        placeholder={props.placeholder}
        className={props.colorMode}
      />
    </div>
  );
};
export default SearchBar;
