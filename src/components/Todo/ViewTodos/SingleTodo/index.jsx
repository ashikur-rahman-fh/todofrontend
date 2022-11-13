import React, { useState, useContext } from "react";
import { Button, Skeleton, TextField } from "@mui/material";
import NoTodo from "./NoTodo";
import { TodoContext } from "../../../../context";
import { requestHelper } from "../../../../utility/helper";

import { MIN_TODO_DESCRIPTION_LENGTH, TODO_ACTION_TYPE } from "../constants";
import { UPDATE_REQUST_CONFIG } from "../TodoListItem/constants";
import "./style.scss";

const SingleTodo = (props) => {
    const { dispatch } = useContext(TodoContext);
    const { todo, loading } = props;
    const [readOnlyMode, setReadOnlyMode] = useState(true);

    if (loading) {
        return (
            <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '20px' }}>
                <Skeleton variant="rectangular" width={40} height={40} />
                <Skeleton variant="rounded" width={220} height={100} />
            </div>
        );
    }

    if (!todo) {
        return <NoTodo />
    }

    const updateTodo = (event) => {
        dispatch({
            type: TODO_ACTION_TYPE.MODIFY_TODO,
            payload: { ...todo, [event.target.name]: event.target.value },
        });
    };

    const makeModifyRequest = async (newTodo) => {
        await requestHelper.makeRequest(
            UPDATE_REQUST_CONFIG.ULR(todo._id),
            UPDATE_REQUST_CONFIG.METHOD,
            {
                ...todo,
            }
        );
    };

    const finishUpdate = async (event) => {
        setReadOnlyMode(true);
        await makeModifyRequest();
    }

    const invalid = todo?.description.length < MIN_TODO_DESCRIPTION_LENGTH;

    return (
        <div className="single-todo-container">
            <div className="title-container">
                <TextField
                    InputProps={{
                        className: 'todo-title',
                        readOnly: readOnlyMode,
                    }}
                    name="title"
                    value={todo?.title}
                    onChange={updateTodo}
                />
            </div>
            <div className="description-container">
                <TextField
                    fullWidth
                    multiline
                    minRows={7}
                    InputProps={{
                        className: 'todo-description',
                        readOnly: readOnlyMode,
                    }}
                    name="description"
                    value={todo?.description}
                    onChange={updateTodo}
                    helperText={invalid ? "Description is too short" : ""}
                    error={invalid}
                />
            </div>

            <div className="button-container">
                {readOnlyMode ?
                    <Button
                        variant="contained"
                        onClick={() => setReadOnlyMode(false)}
                    >
                        Edit
                    </Button> :
                    <Button
                        variant="contained"
                        onClick={finishUpdate}
                        disabled={invalid}
                    >
                        Done
                    </Button>
                }
            </div>
        </div>
    );
};

export default SingleTodo;
