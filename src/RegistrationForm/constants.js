export const FIELDS = {
    username: {
        label: 'Username',
        id: 'username',
        type: 'text',
        autoFocus: true,
        validation: new RegExp('.....'),
        validationMessage: 'Username must have 5 characters',
    },
    name: {
        label: 'Full Name',
        id: 'name',
        type: 'text',
        validation: new RegExp('.'),
        validationMessage: 'Full name can not be empty',
    },
    email: {
        label: 'Email',
        id: 'email',
        type: 'email',
        validation: new RegExp('..*@.*\\..'),
        validationMessage: 'Invalid Email',
    },
    password: {
        label: 'Password',
        id: 'password',
        type: 'password',
        validation: new RegExp('.'),
        validationMessage: 'Password can not be empty',
    },
    password2: {
        label: 'Confirm Password',
        id: 'password2',
        type: 'password',
        validation: new RegExp('.'),
        validationMessage: 'Password can not be empty',
    }
};

export const REGISTRATION_REQUEST_CONFIG = {
    url: `auth/register/`,
    method: 'POST',
};
