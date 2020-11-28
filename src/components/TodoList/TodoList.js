import React, {useState} from "react"
import "./TodoList.scss"
import Input from "../Input Bar/Input.js"
import { BiTrash } from 'react-icons/bi';
import { MdDone } from 'react-icons/md';
import { IconContext } from "react-icons/lib";

export default function Tasks(props) {

    const presentArray = [
        {
            id: Math.random()*1000000, task_name: "Hello", completed: false,
        },
        {
            id: Math.random()*1000000, task_name: "Hello1", completed: false,
        },
        {
            id: Math.random()*1000000, task_name: "Hello2", completed: true,
        },
        {
            id: Math.random()*1000000, task_name: "Hello3", completed: false,
        },
        {
            id: Math.random()*1000000, task_name: "Hello4", completed: true,
        },
        {
            id: Math.random()*1000000, task_name: "Hello5", completed: false,
        },
    ]

    const [tasksArray, setTasksArray] = useState(presentArray)

    const addTodo = (todo) => {
        const newTodos = [todo,...tasksArray]

        setTasksArray(newTodos);
        console.log(newTodos);
    }

    const toggleTodo = (index) => {
        const toggleTasks = [...tasksArray];
        console.log(toggleTasks[index].completed);
        toggleTasks[index].completed = (toggleTasks[index].completed === false) ? true : false;
        setTasksArray(toggleTasks);
    }

    const deleteTodo = (index) => {
        const tasks = [...tasksArray]
        tasks.splice(index,1);
        setTasksArray(tasks);
    }

    const tickIcon = (item, index) => { 
        if(item.completed === false) {
            return  <IconContext.Provider value = {{ className: "icon-black" }}>
                        <MdDone onClick = {() => toggleTodo(index)}/>
                    </IconContext.Provider>
        }
        else {
            return  <IconContext.Provider value = {{ className: "icon-green" }}>
                        <MdDone onClick = {() => toggleTodo(index)}/>
                    </IconContext.Provider>
        }
    }

    const delIcon = (index) => {
        return <IconContext.Provider value = {{ className: "icon-del" }}>
                    <BiTrash onClick = {() => deleteTodo(index)}/>
                </IconContext.Provider>
    }

    return (
        <div>
            <Input onSubmit = {addTodo} />
            <div className="container">
                {tasksArray.map((item,index) => (
                    <div className="cont-child">
                        {item.task_name}
                        <div>
                            {tickIcon(item,index)}
                            {delIcon(index)}
                        </div>
                    </div>    
                ))}
            </div>
        </div>
    )
}