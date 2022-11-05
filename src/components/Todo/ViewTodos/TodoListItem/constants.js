export const UPDATE_REQUST_CONFIG = {
    METHOD: `PATCH`,
    ULR: (id) => `api/todos/${id}`,
};

export const DELETE_TODO_CONFIRM_MESSAGE = (todo) => {
    return `Do you want to delete "${todo?.title}"`;
};
