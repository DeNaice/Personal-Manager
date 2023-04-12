import React, {ChangeEvent, FC, useState} from "react";
import {ITask} from "../interfaces/Interfaces";
import TodoTask from "../components/TodoTask";
// https://www.youtube.com/watch?v=bjnW2NLAofI

export function Todo() {
    const [task, setTask] = useState<string>("");
    const [deadline, setDeadline] = useState<number>(0);
    const [todo, setTodo] = useState<ITask[]>([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if(event.target.name == "task"){
            setTask(event.target.value);
        } else {
            setDeadline(Number(event.target.value));
        }
    }

    const addTask = () =>{
        const newTask = {
            taskName : task,
            deadLine : deadline
        }
        setTodo([... todo, newTask]);
        setTask("");
        setDeadline(0);
    }

    const completeTask = (taskNametoDelete:string) => {
        setTodo(todo.filter((task) =>{
            return task.taskName != taskNametoDelete
        }))
    }

    return (

        <div className= "Todo">
            <div className= "header">
                <div className= "inputContainer">
                    <input type= "text" name = "task" placeholder= "Add a task" value={task} onChange={handleChange}/>
                    <input type= "number" name= "deadline" placeholder= "Set a deadline" value={deadline} onChange={handleChange}/>
                </div>
                <button onClick={addTask}>Add</button>
            </div>
            <div className= "todoList">
                {todo.map((task: ITask, key:number) =>(
                    <TodoTask key = {key} task={task} completeTask={completeTask} />
                ))}
            </div>
        </div>
    )
}

export default Todo
