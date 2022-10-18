export const FIELDS = {
    username: {
        label: 'Username',
        id: 'username',
        type: 'text',
        autoFocus: true,
        validation: new RegExp('.'),
        validationMessage: 'Username can not be empty',
    },
    password: {
        label: 'Password',
        id: 'password',
        type: 'password',
        validation: new RegExp('.'),
        validationMessage: 'Password can not be empty',
    },
};

export const REGISTRATION_TEXT = "Create account";

export const LOGIN_REQUEST_CONFIG = {
    url: 'auth/login/',
    method: 'POST',
}
