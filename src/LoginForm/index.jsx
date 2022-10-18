import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { requestHelper } from "../utility/helper";
import Form from "../components/common/form";
import { UserContext } from "../context";

import { FIELDS, REGISTRATION_TEXT, LOGIN_REQUEST_CONFIG } from "./constants";
import { REGISTRATION_ROUTE, USER_INFO_REQUST_CONFIG } from "../constants";

import "./style.scss";
const LoginForm = (props) => {
    const { setUser } = useContext(UserContext);

    const sendLoginRequest = async (payload) => {
        const response = await requestHelper.makeRequest(LOGIN_REQUEST_CONFIG.url, LOGIN_REQUEST_CONFIG.method, {
            username: payload.username,
            password: payload.password,
        });

        return response;
    };

    const handleLoginClick = async (payload) => {
        const { data, status } = await sendLoginRequest(payload);

        if (status === 200) {
            window.sessionStorage.setItem('auth-token', data.token);

            const response = await requestHelper.makeRequest(USER_INFO_REQUST_CONFIG.url, USER_INFO_REQUST_CONFIG.method, null, { 'auth-token': data.token });
            setUser(response.data.user);
        }
    }

    const FooterOption = <Link className="registration-link" to={REGISTRATION_ROUTE}>{REGISTRATION_TEXT}</Link>

    const title = () => {
        return (
            <div className="title">
                <div className="instruction">Sign in</div>
                <div className="result">To manage your tasks</div>
            </div>
        );
    }

    return (
        <Form
            title={title()}
            fields={FIELDS}
            onSubmit={handleLoginClick}
            submitButtonText="Enter"
            footerOption={FooterOption}
        />
    );
};

LoginForm.defaultProps = {}

LoginForm.propTypes = {};

export default LoginForm;
