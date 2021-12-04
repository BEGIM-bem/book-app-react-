import axios from "axios"
import { useState } from "react"
import './index.css'

export const CreateBook = () => {

    const [userState, setUserState] = useState({
        title: "",
        author: ""
      })
      
      const changeHandler = (e)=> {
         const value = e.target.value;
         setUserState({
          ...userState,
          [e.target.name]: value
         });
      }

    const submitHandler = () => {
        axios.post('http://localhost:4000/books/', {
            title: userState.title,
            author: userState.author
          })
          .then(response => console.log(response))
          .catch(error => console.log(error))
    }

    return (
        <>
            <form  className='form'  onSubmit={()=>submitHandler()}>
                <div class ='div'>
                    <label htmlFor="title">Title: </label>
                    <input className ='input' id="title" type="text" name="author" value={userState.author} onChange={changeHandler}/>
                 
                </div>
         
                <div className ='div'>
                    <label htmlFor="author">Author: </label>
                    <input id="author" className ='input input2' type="text" name="title" value={userState.title} onChange={changeHandler}/>
                </div>
                <button className ='button' type="submit">Submit</button>
            </form>
        </>
    )
}
