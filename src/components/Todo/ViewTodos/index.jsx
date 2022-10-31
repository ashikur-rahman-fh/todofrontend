import React, { useEffect, useMemo, useState, useReducer } from "react";
import { Link } from "react-router-dom";
import { requestHelper } from "../../../utility/helper";
import { Paper, Skeleton } from "@mui/material";
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import { TodoContext } from "../../../context";

import SingleTodo from "./SingleTodo";

import { TODO_REQUEST_CONFIG, TITLE, CREATE_TASK_TEXT,
    todoReducer, TODO_REDUCER_INITIAL_STATE, TODO_ACTION_TYPE,
} from "./constants";

import "./style.scss";
import TodoListItem from "./TodoListItem";

const ViewTodos = (props) => {
    const [todoState, dispatch] = useReducer(todoReducer, TODO_REDUCER_INITIAL_STATE)
    const [selectedTodoIndex, setSelectedTodoIndex] = useState(0);
    const [loadingTodo, setLoadingTodo] = useState(false);

    const fetchTodo = async () => {
        setLoadingTodo(true);
        const response = await requestHelper.makeRequest(TODO_REQUEST_CONFIG.url, TODO_REQUEST_CONFIG.method);

        dispatch({ type: TODO_ACTION_TYPE.LOAD_TODO, payload: response.data });

        setLoadingTodo(false);
    };

    useEffect(() => {
        fetchTodo();
    }, []);

    const renderTodos = () => {
        if (loadingTodo) {
            return [1, 2, 3, 4].map((item) => {
                return (
                    <li key={item.toString()}><Skeleton animation="wave" /></li>
                );
            });
        }

        return todoState?.todos?.map((todo, todoIndex) => {
            return (
                <TodoListItem
                    key={todo._id}
                    todo={todo}
                    onClick={() => setSelectedTodoIndex(todoIndex)}
                />
            );
        });
    };

    const selectedTodo = useMemo(() => {
        return todoState?.todos?.[selectedTodoIndex];
    }, [selectedTodoIndex, todoState]);

    return (
        <TodoContext.Provider value={{ state: todoState, dispatch: dispatch }}>
            <section className="todos-container outmost-container">
                <div className="todo-list-view-todo-container">
                    <div className="todo-list-container">
                        <div className="title-create-todo-container">
                            <h1>{TITLE}</h1>
                            <Link to={'/todos/create'}>
                                <div className="create-todo-container">
                                    {CREATE_TASK_TEXT}
                                    <AddCircleTwoToneIcon />
                                </div>
                            </Link>
                        </div>
                        <ul className="todo-list">
                            {renderTodos()}
                        </ul>
                    </div>
                    <Paper sx={{ p: 2 }} elevation={2} className="view-todo-cotainer">
                        <SingleTodo todo={selectedTodo} loading={loadingTodo} />
                    </Paper>
                </div>
            </section>
        </TodoContext.Provider>
    );
};

export default ViewTodos;