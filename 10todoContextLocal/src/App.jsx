import { useEffect, useState } from 'react';
import TodoItem from './components/Todoitem';
import './App.css';
import { Todoprovider } from './context';
import { TodoForm } from './components';

function App() {
  const [todos, setTodos] = useState([]);


  const addTodo = (todo) => {
    setTodos((prevTodos) => [
      { id: Date.now(), ...todo, completed: false },
      ...prevTodos,
    ]);
  };


  const updatetodo = (id, updatedTodo) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, ...updatedTodo } : prevTodo
      )
    );
  };


  const deletetodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  
  const togglecomplete = (id) => {
    setTodos((prev) =>
      prev.map((Prevtodo) =>
        Prevtodo.id === id
          ? { ...Prevtodo, completed: !Prevtodo.completed }
          : Prevtodo
      )
    );
  };

  //  Load todos from localStorage on mount
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos && storedTodos.length > 0) {
      setTodos(storedTodos);
    }
  }, []);

  //  Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

 
  return (
    <Todoprovider
      value={{ todos, addTodo, updatetodo, deletetodo, togglecomplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>

          <div className="mb-4">
            <TodoForm />
          </div>

          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Todoprovider>
  );
}

export default App;
