const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const port = "8080"

const ToDoItem = require("./models/model")
// const items = require("./routes/items")

const app = express()

app.use(cors());
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/reactToDoListDB',
  {
    useNewUrlParser: true
  }
);

const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", function () {
  console.log("Connected Succesfully");
})

// Get Request

app.get("/items", function (req, res) {
  ToDoItem.find({})
    .then((foundList) => {
      // console.log(foundList);
      res.send(foundList)
    })
    .catch((e) => console.log(e))
})

// Post Request

app.post("/items", function (req, res) {
  let inputValue = req.body.inputClickValue;

  const toDoItem = new ToDoItem({
    item: inputValue
  })

  toDoItem.save();
  res.redirect("/")
})

app.post("/delete", function (req, res) {
  let deleteId = req.body.deleteId

  ToDoItem.findOneAndDelete({ _id: deleteId })
    .then(() => console.log("Item deleted"))
    .catch((e) => console.log(e))
  // console.log(deleteId, "deleteId");
})

app.post("/deleteAll", function (req, res) {
  ToDoItem.deleteMany({})
    .then(() => console.log("all items has been deleted"))
    .catch((e) => console.log(e))

  console.log(req.body.inputValue);
})


app.listen(port, function (req, res) {
  console.log(`The server has started on port ${port}`);
})

