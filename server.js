require ('dotenv').config();
const express = require ("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Todo = require ("./models/todo");

const itemRoutes = require("./routes/item.js");

const app = express();
app.use(cors());

app.use(express.json());
app.use("/todos", itemRoutes);

app.get('/', function(req, res){
    res.send("Hello from the root application URL");
});

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    app.listen(4000, () =>{
        console.log("Listening on port 4000, connected to database")
    })
})
.catch((err)=>{
    console.log(err)
})
