export const FIELDS = {
    username: {
        label: 'Username',
        id: 'username',
        type: 'text',
        autoFocus: true,
    },
    name: {
        label: 'Full Name',
        id: 'name',
        type: 'text',
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
    url: `auth/register/`,
    method: 'POST',
};
