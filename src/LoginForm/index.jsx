import React, { useState } from "react";
import PropTypes from 'prop-types';

import { FIELDS } from "./constants";
import "./style.scss";
const LoginForm = (props) => {
    const { submitButtonText } = props;
    const [formData, setFormData] = useState(null);

    const handleInputValueChange = (event) => {
        setFormData((previousData) => {
            return {...previousData, [event.target.name]: event.target.value};
        });
    };

    const renderFields = () => {
        return Object.keys(FIELDS).map((fieldKey) => {
            return (
                <tr className="table-row" key={fieldKey}>
                    <td>
                        <label htmlFor={FIELDS[fieldKey].id}>{FIELDS[fieldKey].label}</label>
                    </td>
                    <td>
                        <input
                            name={FIELDS[fieldKey].id}
                            autoFocus={FIELDS[fieldKey].autoFocus}
                            id={FIELDS[fieldKey].id}
                            type={FIELDS[fieldKey].type}
                            value={formData?.[FIELDS[fieldKey].id] ? formData[FIELDS[fieldKey].id] : ''}
                            onChange={handleInputValueChange}
                        />
                    </td>
                </tr>
            )
        });
    }

    const handleLoginClick = (event) => {
        console.log(formData);
    }

    return (
        <form className="login-form">
            <table className="login-form-container">
                <tbody>
                    {renderFields()}
                </tbody>
            </table>
            <input
                className="submit-button"
                type="button"
                value={submitButtonText}
                onClick={handleLoginClick}
            />
        </form>
    );
};

LoginForm.defaultProps = {
    submitButtonText: 'Enter',
}

LoginForm.propTypes = {
    submitButtonText: PropTypes.string,
};

export default LoginForm;
