const Search = ({ search, onSearch }) => {
  return (
    <>
      <label htmlFor="search">Search: </label>
      <input
        id="search"
        type="text"
        placeholder="Search"
        value={search}
        onChange={onSearch}
      />
    </>
  );
};

export default Search;
