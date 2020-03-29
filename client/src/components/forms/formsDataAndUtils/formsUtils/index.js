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
    return fieldsValues.map((fieldValues, key) => {
        const {component, fieldOptions, inputProps} = fieldValues;
        return withField(component, key)(fieldOptions)(inputProps);
    })
};