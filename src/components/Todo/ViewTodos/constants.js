export const TITLE = "List of your tasks";
export const CREATE_TASK_TEXT = 'Create task';
export const TODO_REQUEST_CONFIG = {
    url: `api/todos`,
    method: `GET`,
};

export const TODO_STATUS = {
    PENDING: 'pending',
    COMPLETED: 'completed',
};

export const TODO_ACTION_TYPE = {
    LOAD_TODO: 'LOAD_TODO',
    MODIFY_TODO: 'MODIFY_TODO',
};

export const TODO_REDUCER_INITIAL_STATE = {
    count: 0,
    todos: [],
};

export const todoReducer = (state, action) => {
    switch (action.type) {
        case TODO_ACTION_TYPE.LOAD_TODO:
            return {
                ...state,
                todos: action.payload?.todos,
                count: action.payload?.count,
            }
        case TODO_ACTION_TYPE.MODIFY_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo._id === action.payload._id) {
                        return action.payload;
                    }

                    return todo;
                }),
            }
        default:
            throw new Error("Does not match any action type!");
    }
};
