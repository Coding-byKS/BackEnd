const Todo = require ("../models/todo");


const createTodo = async (req, res) => {

    res.send("Hi")

    const { text } = req.body
    console.log(text);

    const todoObject = new Todo ({
        text
    })

    const newTodo = await todoObject.save()
    res.status(200).json(newTodo)
}


const getTodos = async(req, res)=>{
    const items = await Todo.find({})
    res.status(200).json({
        todos:items
    })
}

module.exports = {createTodo, getTodos};