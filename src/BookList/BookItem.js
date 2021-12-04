import { Flex, FlexedItem } from "../styles/Flex";

export const BookItem = ({ author, title, id }) => {

  const removeBook = (id) => {
    if (window.confirm("Are u sure?")) {
      fetch(`http://localhost:4000/books/${id}`, {
        method: "DELETE",
      });
    }
  };

  return (
    <FlexedItem>
      <li>
        {author}-----{title}
      </li>
      <Flex>
        <button onClick={() => removeBook(id)}>DELETE</button>
     
      </Flex>
    </FlexedItem>
  );
};
