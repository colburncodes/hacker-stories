import InputWithLabel from "./components/InputWithLabel";
import List from "./components/List";

import useStorageState from "./components/StorageHook";

import stories from "./data.js";

const App = () => {
  const [searchTerm, setSearchTerm] = useStorageState("search", "React");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter(function (story) {
    return story.title
      .toLocaleLowerCase()
      .includes(searchTerm.toLocaleLowerCase());
  });

  return (
    <div>
      <h1>My Hacker Stories</h1>
      {/* <Search search={searchTerm} onSearch={handleSearch} /> */}
      <InputWithLabel
        id="search"
        label="Search"
        value={searchTerm}
        onInputChange={handleSearch}
      />
      <hr />
      <List list={searchedStories} />
    </div>
  );
};

export default App;
