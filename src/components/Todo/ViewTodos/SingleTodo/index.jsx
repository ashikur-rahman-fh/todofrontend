import React from "react";
import NoTodo from "./NoTodo";

const SingleTodo = (props) => {
    const { todo } = props;

    if (!todo) {
        return <NoTodo />
    }

    return (
        <div>
            <h1>Your todo</h1>
            <h2>{todo?.title}</h2>
            <p>{todo?.description}</p>
        </div>
    );
};

export default SingleTodo;
