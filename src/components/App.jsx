import React, { useState } from 'react'
import Input from './Input';
import Item from './Item';
import Axios from 'axios';

function App(props) {

  const [inputValue, setInputValue] = useState("")

  function deleteAll() {

    Axios.post("http://localhost:8080/deleteAll", { inputValue })
      .then(res => {

      })
  }

  return (
    <div>
      <div className="wrapper">
        <Input setInputValue={setInputValue} />
        <div className="controls">
          {/* <div className="filters">
            <span className="active" id="all">All</span>
            <span id="pending">Pending</span>
            <span id="completed">Completed</span>
          </div> */}
          <form action="/deleteAll">
            <button onClick={deleteAll} type='submit' className="clear-btn">Clear All</button>
          </form>
        </div>
        <Item inputValue={inputValue} />
      </div>
    </div>
  )
}

export default App;