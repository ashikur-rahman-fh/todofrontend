import React from "react";

import Form from "../components/common/form";

import { FIELDS } from "./constants";
import "./style.scss";


const RegistrationForm = (props) => {

    const handleLoginClick = (data) => {
        console.log(data);
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
            onSubmit={handleLoginClick}
            submitButtonText="Register"
        />
    );
};

RegistrationForm.defaultProps = {}

RegistrationForm.propTypes = {};

export default RegistrationForm;
