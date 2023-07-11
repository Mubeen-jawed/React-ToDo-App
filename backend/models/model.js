const mongoose = require("mongoose")

const toDoItemSchema = new mongoose.Schema({
  item: String
})

const ToDoItem = mongoose.model("ToDoItem", toDoItemSchema)

module.exports = ToDoItem

// const ToDoItem1 = new ToDoItem({
//   item: "ubeen"
// })
