import axios from "axios";
import styled from "styled-components";

import { Flex, FlexedItem } from "../styles/Flex";
import './index.css'

export const BookItem = ({ author, title, id }) => {

  const removeBook = (id) => {

    if (window.confirm("Are u sure?")) {
      axios.delete(`http://localhost:4000/books/${id}`)
      document.location.reload();
   
    }
    
  };


  return (
    <FlexedItem>
      <li> Title ::: 
     {      title}<br />
     Author  :::{     author} 
      
      </li> 
      <Flex>
        <button  className ='deleteBtn' onClick={() => removeBook(id)}>DELETE</button>
     
      </Flex>
    </FlexedItem>
  );
};
