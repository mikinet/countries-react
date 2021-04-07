const SearchBar = (props) => {
  return (
    <div id="search-bar">
      <span>
        <i class={`fas fa-search`}></i>
      </span>
      <input
        id="search"
        type={props.type}
        onInput={props.onInput}
        placeholder={props.placeholder}
      />
    </div>
  );
};
export default SearchBar;
