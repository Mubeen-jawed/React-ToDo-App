import React, { useState, useEffect } from 'react'
import Item from './Item'
import Axios from 'axios'
import { IoMdAdd } from "react-icons/io"

function Input(props) {

  const url = "http://localhost:8080/items"
  const [inputClickValue, setInputClickValue] = useState({
    toDoItem: ""
  })
  // const [data, setdata] = useState({
  //   toDoItem: ""
  // })

  const handleClick = () => {
    props.setInputValue(inputClickValue)
  }

  const handleChange = (e) => {
    setInputClickValue(e.target.value)
  }

  const handleSubmit = (e) => {
    // e.preventDefault()

    Axios.post(url, { inputClickValue })
      .then(res => {
        // console.log(res);
        // console.log(res.data);
      })

  }

  //  useEffect(() => {
  //     Axios.get("http://localhost:8080/items")
  //       .then(res => {
  //         // settoDoItems(res.data)
  //         console.log(res.data);
  //       })
  //   }, [])

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} action='/' class="task-input">
        {/* <ion-icon name="create-outline"></ion-icon> */}
        <input onChange={(e) => handleChange(e)} value={inputClickValue.toDoItem} name='
        ' type="text" placeholder="Add a New Task + Enter" />
        <button onClick={handleClick}><IoMdAdd /></button>
      </form>
    </div>
  )

}



export default Input
// export { setInputValue }