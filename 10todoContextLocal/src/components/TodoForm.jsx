import React, { use } from 'react'
import { useTodo } from '../context/TodoContext';

function TodoForm() {
    
const [todo, setTodo] = React.useState(""); 

const {addTodo} = useTodo();


const add= (e) => {
    e.preventDefault()
    
    if(!todo) return
    addTodo({todo , completed: false});
    setTodo("");
}

    return (
        <form 
        onSubmit={add}
        className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

// This component is a form for adding new todos. It includes an input field for the todo text and a button to submit the form.
// The input field has a placeholder text "Write Todo..." and styles for appearance. The button is styled with a green background and white text.
