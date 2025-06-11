import React from 'react'
import { useTodo } from '../context/TodoContext';


function TodoItem({ todo }) {
    
     const [isTodoEditable, setIsTodoEditable] = React.useState(false);

     const [todoMsg, setTodoMsg] = React.useState(todo.todo);

    const editTodo = () => {
        updateTodo(todo.id,{
            ...todo ,todo:todoMsg
        })
     setIsTodoEditable(false);   
    }
  
     const toggleCompleted=()=>{ 
        togglecomplete(todo.id)
        

     }
    
     
    const {updateTodo ,deleteTodo ,togglecomplete } = useTodo();

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
// This component represents a single todo item. It displays the todo text, a checkbox to mark it as completed, and buttons to edit or delete the todo.
// The todo text can be edited, and the component handles the state of whether the todo is editable or not. The background color changes based on whether the todo is completed or not.
