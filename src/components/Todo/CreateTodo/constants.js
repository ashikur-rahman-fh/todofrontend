export const FIELDS = {
    title: {
        label: 'Title',
        id: 'title',
        type: 'text',
        autoFocus: true,
        style: {
            width: '350px',
        },
    },
    description: {
        label: 'Description',
        id: 'description',
        type: 'password',
        validation: new RegExp('....'),
        multiline: true,
        minRows: 6,
        size: 'large',
        style: {
            width: '350px',
        },
        validationMessage: 'Description is too short'
    },
};

export const TITLE = {
    INSTRUCTION: "Fill up",
    RESULT: "to create your todo",
};

export const CREATE_TODO_REQ_CONFIG = {
    method: `POST`,
    url: `api/todos`
}