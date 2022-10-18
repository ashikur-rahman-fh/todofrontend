import React from "react";
import Form from "../components/common/form";
import { requestHelper } from "../utility/helper";

import { FIELDS, REGISTRATION_REQUEST_CONFIG } from "./constants";
import "./style.scss";


const RegistrationForm = (props) => {
    const sendRegirationRequest = async (payload) => {
        await requestHelper.makeRequest(REGISTRATION_REQUEST_CONFIG.url, REGISTRATION_REQUEST_CONFIG.method, {
            username: payload.username,
            password: payload.password,
            email: payload.email,
            name: payload.name,
        });
    };

    const handleRegisterClick = (data) => {
        sendRegirationRequest(data)
    }

    const title = () => {
        return (
            <div className="title">
                <div className="instruction">Create your account</div>
            </div>
        );
    }

    return (
        <Form
            title={title()}
            fields={FIELDS}
            onSubmit={handleRegisterClick}
            submitButtonText="Register"
        />
    );
};

RegistrationForm.defaultProps = {}

RegistrationForm.propTypes = {};

export default RegistrationForm;
