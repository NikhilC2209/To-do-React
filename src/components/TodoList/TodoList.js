import React, {useState} from "react"
import "./TodoList.scss"
import Input from "../Input Bar/Input.js"

export default function Tasks(props) {

    const presentArray = [
        {
            task_name: "Hello", completed: false,
        },
        {
            task_name: "Hello1", completed: false,
        },
        {
            task_name: "Hello2", completed: true,
        },
        {
            task_name: "Hello3", completed: false,
        },
        {
            task_name: "Hello4", completed: true,
        },
        {
            task_name: "Hello5", completed: false,
        },
    ]

    const [tasksArray, setTasksArray] = useState(presentArray)

    const addTodo = (todo) => {
        const newTodos = [todo,...tasksArray]

        setTasksArray(newTodos);
        console.log(newTodos);
    }

    return (
        <div>
            <Input onSubmit = {addTodo} />
            <div className="container">
                {tasksArray.map(item => (
                    <div className="cont-child">{item.task_name}</div>    
                ))}
            </div>
        </div>
    )
}