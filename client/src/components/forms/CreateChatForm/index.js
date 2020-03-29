import React from "react";
import styles from './CreateChatForm.module.scss';
import {Form, withFormik} from 'formik';
import store from "../../../store";
import {createChatCreatingRequestAction} from '../../../actions';
import {createChatSchema} from "../validationSchema";
import {renderFields} from '../formsDataAndUtils/formsUtils'
import {fieldValuesForChatCreating} from '../formsDataAndUtils/formsData'


const handleSubmit = values => {
    store.dispatch(createChatCreatingRequestAction(values));
};

function CreateChatForm(props) {

    return (
        <>
            <div className={styles.container}>
                <h4>Please fill in this form to create chat</h4>
                <Form>
                    {
                        renderFields(fieldValuesForChatCreating)
                    }
                    <div className={styles.confirmButton} onClick={props.submitForm}>Create chat</div>
                </Form>
            </div>
        </>
    );
}

export default withFormik({
    mapPropsToValues: () => ({chatName: '',}),
    validationSchema: createChatSchema,
    handleSubmit,
})(CreateChatForm);