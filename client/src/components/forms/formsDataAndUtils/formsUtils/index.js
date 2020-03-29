import React from 'react';
import { Field } from 'formik';

export const withField = (WrappedComponent, key) => (fieldOptions) => {

    return (inputProps) => {
        return (
            <Field key={key} {...fieldOptions}>
                {
                    fieldProps => <WrappedComponent {...fieldProps} {...inputProps}/>
                }
            </Field>
        );
    }
};

export const renderFields = (fieldsValues) => {
    return fieldsValues.map((fieldValuesForAuth, key) => {
        const {component, fieldOptions, inputProps} = fieldValuesForAuth;
        return withField(component, key)(fieldOptions)(inputProps);
    })
};