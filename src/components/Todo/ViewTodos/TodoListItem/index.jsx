import React, { useState, useContext } from "react";
import { CircularProgress } from "@mui/material";
import OfflinePinTwoToneIcon from '@mui/icons-material/OfflinePinTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { TodoContext } from "../../../../context";

import { requestHelper } from "../../../../utility/helper";
import { TODO_ACTION_TYPE, TODO_STATUS } from "../constants";
import { UPDATE_REQUST_CONFIG } from "./constants";

import "./style.scss";

const TodoListItem = (props) => {
    const { dispatch } = useContext(TodoContext);
    const { todo, onClick } = props;
    const [displayActions, setDisplayActions] = useState(false);
    const [markAsDoneLoading, setMarkAsDoneLoading] = useState(false);

    const makeTodoUpdateRequest = async (newTodo) => {
        await requestHelper.makeRequest(UPDATE_REQUST_CONFIG.ULR(todo._id), UPDATE_REQUST_CONFIG.METHOD, {
            ...todo,
            status: TODO_STATUS.COMPLETED,
        });
    };

    const markTodoAsDone = async (event) => {
        event.stopPropagation();
        setMarkAsDoneLoading(true);
        await makeTodoUpdateRequest();

        dispatch({ type: TODO_ACTION_TYPE.MODIFY_TODO, payload: {
            ...todo,
            status: TODO_STATUS.COMPLETED,
        }});

        setMarkAsDoneLoading(false);
    };

    const displayActionButtons = () => {
        return (
            <span>
                {markAsDoneLoading ? <CircularProgress size={22} className="todo-update-spinner"/> : (
                    todo.status !== TODO_STATUS.COMPLETED && <OfflinePinTwoToneIcon onClick={markTodoAsDone} className="done-button" />
                )}
                <DeleteTwoToneIcon className="delete-button" />
            </span>
        );
    };
    
    return (
        <li
            className={`todo-item ${todo?.status}`}
            onClick={onClick}
            onMouseOver={() => setDisplayActions(true)}
            onMouseLeave={() => setDisplayActions(false)}
            aria-label={todo?.status}
        >
            {todo?.title}
            {displayActions && displayActionButtons()}
        </li>
    );
};

export default TodoListItem;