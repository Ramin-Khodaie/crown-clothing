import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="header-search">
      <form className="search-form" onSubmit={(e)=>e.preventDefault()}>
        <input
          type="text"
          name="search-text"
          placeholder="what are you looking for?"
          autoComplete="off"
          className="search-input"
        />
        <button className="search-btn">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default Search;
