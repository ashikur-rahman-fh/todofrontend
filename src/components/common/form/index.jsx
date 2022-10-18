import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import "./style.scss";

const Form = (props) => {
    const { title, fields, onSubmit, submitButtonText, footerOption, redirectRoute } = props;

    const [formData, setFormData] = useState(null);

    const handleFormDataChange = (event) => {
        setFormData((previousData) => {
            return {...previousData, [event.target.name]: event.target.value};
        })
    };

    const renderFields = () => {
        return Object.keys(fields).map((fieldKey) => {
            return (
                <tr key={fieldKey}>
                    <td>
                        <label htmlFor={fields[fieldKey].id}>{fields[fieldKey].label}</label>
                    </td>
                    <td>
                        <input
                            autoFocus={fields[fieldKey].autoFocus}
                            id={fields[fieldKey].id}
                            name={fields[fieldKey].id}
                            type={fields[fieldKey].type}
                            value={formData?.[fields[fieldKey].id] ? formData[fields[fieldKey].id] : ""}
                            onChange={handleFormDataChange}
                        >
                        </input>
                    </td>
                </tr>
            );
        });
    };

    const handleSubmitButtonClick = () => {
        onSubmit(formData);
    };

    return (
        <form className="general-form">
            <div className="form-cotainer">
                <div className="form-header">
                    <div>{title}</div>
                </div>

                <table className="form-body">
                    <tbody>
                        {renderFields()}
                    </tbody>
                </table>

                <div className="form-footer">
                    {footerOption}
                    <Link
                        className="submit-button"
                        type="button"
                        onClick={handleSubmitButtonClick}
                        to={redirectRoute}
                    >
                        {submitButtonText}
                    </Link>
                </div>
            </div>
        </form>
    );
};

Form.defaultProps = {
    submitButtonText: "Enter",
    footerOption: null,
    redirectRoute: "/",
};

Form.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    fields: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    submitButtonText: PropTypes.string,
    footerOption: PropTypes.element,
}

export default Form;