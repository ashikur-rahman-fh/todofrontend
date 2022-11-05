import React, { useState, useContext } from "react";
import { Button, CircularProgress, Dialog, DialogActions, DialogTitle } from "@mui/material";
import OfflinePinTwoToneIcon from '@mui/icons-material/OfflinePinTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import RestoreTwoToneIcon from '@mui/icons-material/RestoreTwoTone';
import { TodoContext } from "../../../../context";

import { requestHelper } from "../../../../utility/helper";
import { TODO_ACTION_TYPE, TODO_STATUS } from "../constants";
import { UPDATE_REQUST_CONFIG, DELETE_TODO_CONFIRM_MESSAGE } from "./constants";

import "./style.scss";

const TodoListItem = (props) => {
    const { dispatch } = useContext(TodoContext);
    const { todo, onClick } = props;
    const [displayActions, setDisplayActions] = useState(false);
    const [markAsDoneLoading, setMarkAsDoneLoading] = useState(false);
    const [deleteTodoModalOpen, setDeleteTodoModalOpen] = useState(false);

    const makeTodoUpdateRequest = async (newTodo) => {
        await requestHelper.makeRequest(UPDATE_REQUST_CONFIG.ULR(todo._id), UPDATE_REQUST_CONFIG.METHOD, {
            ...newTodo,
        });
    };

    const markTodoAsDone = async (event) => {
        event.stopPropagation();
        setMarkAsDoneLoading(true);
        await makeTodoUpdateRequest({ ...todo, status: TODO_STATUS.COMPLETED });

        dispatch({ type: TODO_ACTION_TYPE.MODIFY_TODO, payload: {
            ...todo,
            status: TODO_STATUS.COMPLETED,
        }});

        setMarkAsDoneLoading(false);
    };

    const markTodoAsUndone = async (event) => {
        event.stopPropagation();
        setMarkAsDoneLoading(true);
        await makeTodoUpdateRequest({ ...todo, status: TODO_STATUS.PENDING });

        dispatch({ type: TODO_ACTION_TYPE.MODIFY_TODO, payload: {
            ...todo,
            status: TODO_STATUS.PENDING,
        }});

        setMarkAsDoneLoading(false);
    };

    const deleteTodo = async (event) => {
        event.stopPropagation();
        setMarkAsDoneLoading(true);

        await makeTodoUpdateRequest({ ...todo, deleted: true });

        dispatch({ type: TODO_ACTION_TYPE.DELETE_TODO, payload: {
            ...todo,
        }});

        setDeleteTodoModalOpen(false);
        setMarkAsDoneLoading(false);
    }

    const displayActionButtons = () => {
        if (markAsDoneLoading) {
            return <CircularProgress size={22} className="todo-update-spinner"/>;
        }

        return (
            <span>
                {todo.status !== TODO_STATUS.COMPLETED ? 
                    <OfflinePinTwoToneIcon onClick={markTodoAsDone} className="done-button" /> : 
                    <RestoreTwoToneIcon onClick={markTodoAsUndone} className="restore-button"/>
                }
                <DeleteTwoToneIcon onClick={() => setDeleteTodoModalOpen(true)} className="delete-button" />
            </span>
        );
    };
    
    return (
        <React.Fragment>
            <Dialog
                open={deleteTodoModalOpen}
                onClose={() => setDeleteTodoModalOpen(false)}
            >
                <DialogTitle >
                    {DELETE_TODO_CONFIRM_MESSAGE(todo)}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={() => setDeleteTodoModalOpen(false)}>No</Button>
                    <Button color="error" variant="contained" onClick={deleteTodo} autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
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
        </React.Fragment>
    );
};

export default TodoListItem;