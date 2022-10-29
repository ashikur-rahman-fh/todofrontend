import React, { useState, useMemo } from "react";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import "./style.scss";

const Form = (props) => {
    const { title, fields, onSubmit, submitButtonText, footerOption } = props;
    const [formData, setFormData] = useState(null);

    const invalidForm = useMemo(() => {
        for (let fieldKey in fields) {
            const currentValue = formData?.[fields[fieldKey].id] ? formData[fields[fieldKey].id] : "";
            const validationExp = fields[fieldKey]?.validation;
            const valueCheckField = fields[fieldKey]?.valueCheck;

            
            if (validationExp && !validationExp.test(currentValue)) {
                return true;
            }

            if (valueCheckField && formData?.[fieldKey] !== formData[valueCheckField]) {
                return true;
            }
        }

        return false;
    }, [formData, fields]);

    const handleFormDataChange = (event) => {
        setFormData((previousData) => {
            return {...previousData, [event.target.name]: event.target.value};
        });
    };

    const renderFields = () => {
        return Object.keys(fields).map((fieldKey) => {
            const currentValue = formData?.[fields[fieldKey].id] ? formData[fields[fieldKey].id] : "";

            const validationExp = fields[fieldKey]?.validation;
            let invalid = validationExp && !validationExp.test(currentValue) ? true : false;
            
            const valueCheckFieldKey = fields[fieldKey]?.valueCheck;
            const fieldValue = valueCheckFieldKey ? formData?.[valueCheckFieldKey] : null;
            const unmatchedValue = fieldValue && fieldValue !== formData?.[fieldKey];

            const showError = (currentValue && invalid) || (currentValue && unmatchedValue) ? true : false;

            return (
                <tr key={fieldKey}>
                    <td>
                        <TextField
                            size={fields[fieldKey]?.size ? fields[fieldKey]?.size : "small" }
                            error={showError}
                            label={fields[fieldKey].label}
                            variant="outlined"
                            id={fields[fieldKey].id}
                            name={fields[fieldKey].id}
                            value={currentValue}
                            onChange={handleFormDataChange}
                            helperText={showError ? fields[fieldKey]?.validationMessage : ""}
                            InputProps={{ type: fields[fieldKey].type }}
                            multiline={fields[fieldKey]?.multiline}
                            minRows={fields[fieldKey]?.minRows}
                            style={{ ...fields[fieldKey]?.style }}
                        />
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
                    <span className={`submit-button-container ${invalidForm ? 'button-container-disabled' : ''}`}>
                        <Link
                            className={`submit-button ${invalidForm ? 'disabled' : ''}`}
                            type="button"
                            onClick={handleSubmitButtonClick}
                        >
                            {submitButtonText}
                        </Link>
                    </span>
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