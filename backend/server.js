const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const tasks = require("./routes/tasks");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Database Connection
mongoose.connect("mongodb://localhost/todo_database");
let db = mongoose.connection;

// Check Connection
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Check DB erros
db.on("error", (err) => {
  console.log(err);
});

app.use(cors());
app.use(express.json());

app.use("/api/tasks", tasks);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
