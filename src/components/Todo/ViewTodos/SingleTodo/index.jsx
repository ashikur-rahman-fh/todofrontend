import React from "react";
import NoTodo from "./NoTodo";

const SingleTodo = (props) => {
    const { todo } = props;

    if (!todo) {
        return <NoTodo />
    }

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>{todo?.title}</h2>
            <p>{todo?.description}</p>
        </div>
    );
};

export default SingleTodo;
