export const domain = process.env.REACT_APP_BACKEND_DOMAIN;

export const BASE_URL = domain ? domain : 'localhost:3001/';

export const REGISTRATION_ROUTE = "registration";
export const HOME_ROUTE = "/";

export const USER_INFO_REQUST_CONFIG = {
    url: 'auth/userinfo/',
    method: 'GET',
}
