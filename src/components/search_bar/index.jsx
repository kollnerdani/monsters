import './search_bar.css'
const SearchBar = ({ className, placeholder, onChangeHandler}) => (
        <input
            className={`search-box ${className}`}
            type="text"
            placeholder={placeholder}
            onChange={onChangeHandler}
        />
    )


export default SearchBar;