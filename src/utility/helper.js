import axios from "axios";

export class RequestHelper {
    constructor() {
        this.headers = {
            'auth-token': window.sessionStorage.getItem('auth-token'),
        }
    }

    makeRequest = async (url, method, data) => {
        const response = await axios({
            url: url,
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
