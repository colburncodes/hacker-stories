import { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
        id="search"
        type="text"
        placeholder="Search"
        onChange={handleSubmit}
      />
      <p>
        <strong>{searchTerm}</strong>
      </p>
    </div>
  );
};

export default Search;
