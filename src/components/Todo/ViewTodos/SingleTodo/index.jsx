import React from "react";
import { Skeleton } from "@mui/material";
import NoTodo from "./NoTodo";

const SingleTodo = (props) => {
    const { todo, loading } = props;

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

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>{todo?.title}</h2>
            <p>{todo?.description}</p>
        </div>
    );
};

export default SingleTodo;
