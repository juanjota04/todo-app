import React from "react";
import { useLocalStorage } from './useLocalStorage';

// Al crear el contecto también podemos pasarle un valor inicial entre paréntesis

const TodoContext = React.createContext();

function TodoProvider(props) {
    
// Nos traemos todo el estado y las funciones de nuestra aplicación que queremos globales    
const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error, 
   } = useLocalStorage('TODOS_V1', []);
   const [searchValue, setSearchValue] = React.useState('');
   const [openModal, setOpenModal] = React.useState(false);
 
   const completedTodos = todos.filter(todo => !!todo.completed).length;
   const totalTodos = todos.length;
 
   let searchedTodos = [];
 
   if (!searchValue.length >= 1) {
     searchedTodos = todos;
   } else {
     searchedTodos = todos.filter(todo => {
       const todoText = todo.text.toLowerCase();
       const searchText = searchValue.toLowerCase();
       return todoText.includes(searchText);
     });
   }
 // Función para añadir nuevo Todo
   const addTodos = (text) => {
    const newTodos = [...todos];
    newTodos.push({
    completed: false,
    text
    });
    saveTodos(newTodos);
   };

   const completeTodos = (text) => {
     const todoIndex = todos.findIndex(todo => todo.text === text);
     const newTodos = [...todos];
     newTodos[todoIndex].completed = true;
     saveTodos(newTodos);
   };
 
   const deleteTodos = (text) => {
     const todoIndex = todos.findIndex(todo => todo.text === text);
     const newTodos = [...todos];
     newTodos.splice(todoIndex, 1);
     saveTodos(newTodos);
   };

// Retornamos nuestro proveedor con nuestro contexto en la etiqueta value, que recibirá a toda nuestra aplicación, por eso necesitamos la prop children

   return (
    <TodoContext.Provider value={{
       loading,
       error,
       totalTodos,
       completedTodos,
       searchValue,
       setSearchValue,
       searchedTodos,
       addTodos,
       completeTodos,
       deleteTodos,
       openModal,
       setOpenModal,
    }}>
        {props.children}
    </TodoContext.Provider>
   );
}

// Exportamos nuestro proveedor y nuestro contexto, en el context también esta el consumer, para acceder a nuestro contexto

export { TodoContext, TodoProvider };
