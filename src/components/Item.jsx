import React, { useEffect, useState } from 'react'
import Axios from "axios"

function Item(props) {

  const [toDoItems, settoDoItems] = useState("")
  const [deleteId, setDeleteId] = useState("")
  const [deleted, setDeleted] = useState(false)


  useEffect(() => {
    Axios.get("http://localhost:8080/items")
      .then(res => {
        settoDoItems(res.data);
      }).catch(e => console.log(e))
  }, [])

  // for (let i = 0; i < toDoItems.length; i++) {
  //   console.log(toDoItems[i]?.item);
  // }

  // console.log(toDoItems.map);

  // toDoItems.forEach(item => {
  //   console.log(item);
  // });



  // toDoItems.map(itemIndex => {
  //   console.log(toDoItems[itemIndex])
  // })

  // console.log(toDoItems);

  // toDoItems.map(item => {
  //   console.log(item[0]);
  // })

  function handleDelete(e) {
    setDeleteId(e.target.value)
    setDeleted(true)

    Axios.post("http://localhost:8080/delete", { deleteId })
      .then(res => {
        console.log(res.data);
      })
    window.location.reload()
  }


  return (
    <div>

      {toDoItems.length != 0 ?

        toDoItems.map((item) =>

          <ul className="task-box">
            <li className="task">
              <form onSubmit={(e) => console.log(e)} action="/delete" method='post'>
                <input onClick={(e) => handleDelete(e)} value={item._id} name='checkbox' type='checkbox' />
                <p className="">{item.item}</p>
                {/* {deleted ? "checked" : ""} */}
                {/* {console.log(toDoItems[key].item)} */}
              </form>
              <div className="settings">

                {/* <i class="fa-solid fa-ellipsis"></i> */}
                {/* onclick="showMenu(this)" */}
                <ul className="task-menu show">
                  {/* <li ><i class="uil uil-pen"></i>Edit</li> */}
                  {/* onclick='editTask(${id}, "${todo.name}")' */}
                  {/* <li ><i class="uil uil-trash"></i>Delete</li> */}
                  {/* onclick='deleteTask(${id}, "${filter}")' */}
                </ul>
              </div>
            </li>
          </ul>
        )
        : console.log("error")
      }



    </div>

  )
}

export default Item 