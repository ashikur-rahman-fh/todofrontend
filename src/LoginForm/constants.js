export const FIELDS = {
    username: {
        label: 'Username',
        id: 'username',
        type: 'text',
        autoFocus: true,
    },
    password: {
        label: 'Password',
        id: 'password',
        type: 'password',
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
