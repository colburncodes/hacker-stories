import list from "../data";

const List = () => (
  <ul>
    {list.map((item) => {
      return (
        <li key={item.objectId}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
        </li>
      );
    })}
  </ul>
);



export default List;
