import React from "react";
import './TodoLoading.css';

function TodosLoading() {
    return (
        <div>
            <span className="LoadingTodo-completeIcon"></span>
            <p className="LoadingTodo-text">Cargando...</p>
            <span className="LoadingTodo-completeIcon"></span>
        </div>
    );
}

export { TodosLoading }