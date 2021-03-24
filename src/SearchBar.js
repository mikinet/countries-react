const SearchBar = (props) => {
  return <input type={props.type} onInput={props.onInput} placeholder={props.placeholder} />;
}
export default SearchBar;