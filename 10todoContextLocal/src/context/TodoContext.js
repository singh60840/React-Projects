import { createContext,useContext } from "react";




export const TodoContext = createContext({
    todos:[
        {
           
        }
    ],
    addTodo: (todo)=>{},
    updatetodo: (id,todo)=>{},
    deletetodo: (id)=>{},
    togglecomplete:(id)=>{}
});

export const useTodo =()=>{
    return useContext(TodoContext);
}

export const Todoprovider = TodoContext.Provider;