import Item from "./Item";

const List = (props) => {
  console.log("List renders");
  return (
    <ul>
      {props.list.map((item) => (
        <Item key={item.objectId} item={item} />
      ))}
    </ul>
  );
};

export default List;
