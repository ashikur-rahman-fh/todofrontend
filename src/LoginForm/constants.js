export const FIELDS = {
    username: {
        label: 'Username',
        id: 'username',
        type: 'text',
        autoFocus: true,
        validation: new RegExp('.'),
    },
    password: {
        label: 'Password',
        id: 'password',
        type: 'password',
        validation: new RegExp('.'),
    },
};

export const REGISTRATION_TEXT = "Create account";

export const LOGIN_REQUEST_CONFIG = {
    url: 'auth/login/',
    method: 'POST',
}

export const MESSAGE = {
    LOGIN: {
        SUCCESS: "Log in successful",
        ERROR: "Please check your username and password",
    }
}
