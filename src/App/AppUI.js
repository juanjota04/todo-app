import React from "react";
// importamos el contexto
import { TodoContext } from "../TodoContext/index.js";
import { TodoCounter } from "../TodoCounter/index.js";
import { TodoSearch } from "../TodoSearch/index.js";
import { TodoList } from "../TodoList/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { CreateTodoButton } from "../CreateTodoButton/index.js";
import { Modal } from "../Modal/index.js";
import { TodoForm } from "../TodoForm/index.js";
import { TodosError } from "../TodosError/index.js";
import { TodosLoading } from "../TodoLoading/index.js";
import { EmptyTodos } from "../EmptyTodos/index.js";

function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodos,
        deleteTodos,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);


    return (
    <React.Fragment>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
            {error && <TodosError error={error} />}
            {loading && <TodosLoading />}
            {(!loading && !searchedTodos.length) && <EmptyTodos />}


            {searchedTodos.map(todo => (
            <TodoItem 
                key={todo.text} 
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodos(todo.text)}
                onDelete={() => deleteTodos(todo.text)}
            />
            ))}
        </TodoList>

        {!!openModal && (
            <Modal>
                <TodoForm />
            </Modal>
        )}

        <CreateTodoButton
            setOpenModal={setOpenModal}
        />
    </React.Fragment>
    );
}

export { AppUI };