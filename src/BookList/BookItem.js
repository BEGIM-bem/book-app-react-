import axios from "axios";

import { Flex, FlexedItem } from "../styles/Flex";

export const BookItem = ({ author, title, id }) => {

  const removeBook = (id) => {

    if (window.confirm("Are u sure?")) {
      axios.delete(`http://localhost:4000/books/${id}`)
      document.location.reload();
   
    }
    
  };


  return (
    <FlexedItem>
      <li>
    {title, author} 
      
      </li>
      <Flex>
        <button onClick={() => removeBook(id)}>DELETE</button>
     
      </Flex>
    </FlexedItem>
  );
};
