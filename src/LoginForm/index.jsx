import React from "react";
import { Link } from "react-router-dom";

import Form from "../components/common/form";

import { FIELDS, REGISTRATION_TEXT } from "./constants";
import { REGISTRATION_ROUTE } from "../constants";

import "./style.scss";
const LoginForm = (props) => {

    const handleLoginClick = (data) => {
        console.log(data);
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
