import React, {useState} from 'react';
import "./Input.scss";
import { GoDiffAdded } from 'react-icons/go';
import { IconContext } from "react-icons";

export default function Input(props) {

    const [input, setInput] = useState('');

    const inpText = (e) => {
        //todo = {task_name: e.target.value, completed: false};
        setInput(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        //props.onSubmit(todo);
        props.onSubmit({
            task_name: input,
            completed: false
        });
    }
    return (
        <form className = "wrapper">
                <input onChange = {inpText} type = "text" className = "in-field" />
                <button type = "submit" className = "in-btn" onClick = {submitHandler}>
                    <IconContext.Provider value = {{className: "add-icon"}}>
                        <GoDiffAdded />
                    </IconContext.Provider>    
                </button>  
        </form>
    )
}