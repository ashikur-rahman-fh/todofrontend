import axios from "axios";
import { BASE_URL } from "../constants";
import { toast } from 'react-toastify';

export class RequestHelper {
    constructor() {
        this.headers = {
            'auth-token': window.localStorage.getItem('auth-token'),
        }
    }

    makeRequest = async (url, method, data, headers = undefined) => {
        let response = null;
        try {
            response = await axios({
                url: `${BASE_URL}${url}`,
                method: method,
                data: data,

                headers: {
                    ...this.headers,
                    ...headers,
                }
            });
        } catch (error) {}

        return { data: response?.data, status: response?.status, statusText: response?.statusText };
    }
};

export const requestHelper = new RequestHelper();

export const successMessage = (message) => {
      toast.success(message, {});
};

export const errorMessage = (message) => {
    toast.error(message, {});
}

export const warningMessage = (message) => {
    toast.warning(message, {});
}
