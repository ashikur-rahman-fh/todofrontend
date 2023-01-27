import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { requestHelper } from "../utility/helper";
import Form from "../components/common/form";
import { UserContext } from "../context";
import { successMessage, errorMessage } from "../utility/helper";

import { FIELDS, REGISTRATION_TEXT, LOGIN_REQUEST_CONFIG, MESSAGE } from "./constants";
import { REGISTRATION_ROUTE, USER_INFO_REQUST_CONFIG } from "../constants";

import "./style.scss";
import { MENU_OPTION } from "../components/Navbar/constants";
const LoginForm = (props) => {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const [submittingForm, setSubmittingForm] = useState(false)

    const sendLoginRequest = async (payload) => {
        const response = await requestHelper.makeRequest(LOGIN_REQUEST_CONFIG.url, LOGIN_REQUEST_CONFIG.method, {
            username: payload?.username,
            password: payload?.password,
        });

        return response;
    };

    const handleLoginClick = async (payload) => {
        setSubmittingForm(true);

        const { data, status } = await sendLoginRequest(payload);

        if (status === 200) {
            window.localStorage.setItem('auth-token', data.token);

            const response = await requestHelper.makeRequest(USER_INFO_REQUST_CONFIG.url, USER_INFO_REQUST_CONFIG.method, null, { 'auth-token': data.token });
            setUser(response.data.user);

            successMessage(MESSAGE.LOGIN.SUCCESS);
            navigate(MENU_OPTION?.todos?.link);
        } else {
            errorMessage(MESSAGE.LOGIN.ERROR);
        }

        setSubmittingForm(false);
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
            loading={submittingForm}
        />
    );
};

LoginForm.defaultProps = {}

LoginForm.propTypes = {};

export default LoginForm;
