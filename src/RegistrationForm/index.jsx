import React from "react";
import Form from "../components/common/form";
import { errorMessage, requestHelper } from "../utility/helper";
import { useNavigate } from "react-router-dom";


import { FIELDS, REGISTRATION_REQUEST_CONFIG, MESSAGE } from "./constants";
import { successMessage } from "../utility/helper";
import { REGISTRATION_ROUTE, HOME_ROUTE } from "../constants";

import "./style.scss";

const RegistrationForm = (props) => {
    const navigate = useNavigate();

    const sendRegirationRequest = async (payload) => {
        const response = await requestHelper.makeRequest(REGISTRATION_REQUEST_CONFIG.url, REGISTRATION_REQUEST_CONFIG.method, {
            username: payload.username,
            password: payload.password,
            email: payload.email,
            name: payload.name,
        });

        if (response.status === 200 || response.status === 201) {
            successMessage(MESSAGE.REGISRATION.SUCCESS);
            navigate(HOME_ROUTE);
        } else {
            errorMessage(MESSAGE.REGISRATION.ERROR);
            navigate(REGISTRATION_ROUTE);
        }
    };

    const handleRegisterClick = (data) => {
        sendRegirationRequest(data);
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
