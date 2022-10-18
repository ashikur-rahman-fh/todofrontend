import { BASE_URL } from "../constants";

export const FIELDS = {
    username: {
        label: 'Username',
        id: 'username',
        type: 'text',
        autoFocus: true,
    },
    email: {
        label: 'Email',
        id: 'email',
        type: 'email',
    },
    password: {
        label: 'Password',
        id: 'password',
        type: 'password',
    },
    password2: {
        label: 'Confirm Password',
        id: 'password2',
        type: 'password',
    }
};

export const REGISTRATION_REQUEST_CONFIG = {
    url: `${BASE_URL}auth/register/`,
    method: 'POST',
};
