import axios from "axios";
import { BASE_URL } from "../constants";

export class RequestHelper {
    constructor() {
        this.headers = {
            'auth-token': window.sessionStorage.getItem('auth-token'),
        }
    }

    makeRequest = async (url, method, data) => {
        const response = await axios({
            url: `${BASE_URL}${url}`,
            method: method,
            data: data,

            headers: {
                ...this.headers,
            }
        });

        return { data: response.data, status: response.status, statusText: response.statusText };
    }
};

export const requestHelper = new RequestHelper();
