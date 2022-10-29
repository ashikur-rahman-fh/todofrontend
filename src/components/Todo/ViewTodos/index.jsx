import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { requestHelper } from "../../../utility/helper";
import { CircularProgress } from "@mui/material";

import SingleTodo from "./SingleTodo";

import { TODO_REQUEST_CONFIG } from "./constants";
import "./style.scss";

const ViewTodos = (props) => {
    const [todos, setTodos] = useState(null);
    const [selectedTodoIndex, setSelectedTodoIndex] = useState(0);
    const [loadingTodo, setLoadingTodo] = useState(false);

    const fetchTodo = async () => {
        setLoadingTodo(true);
        const response = await requestHelper.makeRequest(TODO_REQUEST_CONFIG.url, TODO_REQUEST_CONFIG.method);
        
        setTodos(response.data);
        setLoadingTodo(false);
    };

    useEffect(() => {
        fetchTodo();
    }, []);

    const renderTodos = () => {
        if (loadingTodo) {
            return <CircularProgress />;
        }

        return todos?.todos?.map((todo, todoIndex) => {
            return (
                <li onClick={() => setSelectedTodoIndex(todoIndex)} key={todo._id}>{todo?.title}</li>
            );
        });
    };

    const selectedTodo = useMemo(() => {
        return todos?.todos?.[selectedTodoIndex];
    }, [selectedTodoIndex, todos]);

    return (
        <section className="todos-container outmost-container">
            <div className="todo-list-view-todo-container">
                <div className="todo-list-container">
                    <h1>Here is my todos</h1>
                    <Link to={'/todos/create'}> Create your todo</Link>
                    <ul className="todo-list">
                        {renderTodos()}
                    </ul>
                </div>
                <div className="view-todo-cotainer">
                    <SingleTodo todo={selectedTodo} />
                </div>
            </div>
        </section>
    );
};

export default ViewTodos;