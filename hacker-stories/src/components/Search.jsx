const Search = ({ search, onSearch }) => {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
        id="search"
        type="text"
        placeholder="Search"
        value={search}
        onChange={onSearch}
      />
    </div>
  );
};

export default Search;
