import React      from 'react';
import classNames from 'classnames';
import styles     from './Input.module.scss';

const Input = ({ field, form, meta: {error, touched}, ...props }) => {
    const inputClassName = classNames( styles.field, {
        [styles.fieldInvalid]: (touched && error),
        [styles.fieldValid]: (touched && !error),
    } );
    return (
        <label className={styles.container}>
            <input {...field} className={inputClassName} {...props}/>
            {error && touched && <div className={styles.errorTip}>{error}</div>}
        </label>
    );
};

export default Input;