import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../common/form";

import { errorMessage, requestHelper, successMessage } from "../../../utility/helper";
import { CREATE_TODO_REQ_CONFIG, FIELDS, TITLE } from "./constants";

const CreateTodo = (props) => {
    const navigate = useNavigate();
    const getTitle = () => {
        return (
            <div className="title">
                <div className="instruction">{TITLE?.INSTRUCTION}</div>
                <div>{TITLE?.RESULT}</div>
            </div>
        );
    };

    const setCreateTodoRequest = async (todo) => {
        const response = await requestHelper.makeRequest(CREATE_TODO_REQ_CONFIG.url, CREATE_TODO_REQ_CONFIG.method, {
            title: todo.title,
            description: todo.description,
        });

        if (response.status === 200) {
            successMessage('Todo is created!')
            navigate(`/todos/`);
        } else {
            errorMessage(`Can not create your todo! Please try again.`);
        }
    };

    const handleSubmit = (data) => {
        setCreateTodoRequest(data);
    };

    return (
        <section className="create-todo-container outmost-container">
            <div className="todo">
                <Form
                    title={getTitle()}
                    fields={FIELDS}
                    onSubmit={handleSubmit}
                />
            </div>
        </section>
    )
};

export default CreateTodo;
