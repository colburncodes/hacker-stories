import List from "./components/List";
import Search from "./components/Search";

import stories from "./data.js";

const App = () => {
  console.log("App renders");
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search />
      <hr />
      <List list={stories} />
    </div>
  );
};

export default App;
