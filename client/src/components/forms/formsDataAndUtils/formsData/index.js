import Input from "../../Input";
import PasswordInput from "../../PasswordInput";
import FileInput from "../../FileInput";

export const fieldValues = [
    {
        component: Input,
        fieldOptions: {
            name: 'login',
        },
        inputProps: {
            placeholder: 'Login',
        },
    },
    {
        component: PasswordInput,
        fieldOptions: {
            name: 'password',
        },
        inputProps: {
            placeholder: 'Password',
            type: 'password',
        },
    },
    {
        component: PasswordInput,
        fieldOptions: {
            name: 'confirmPassword',
        },
        inputProps: {
            placeholder: 'Confirm Password',
            type: 'password',
        },
    },
    {
        component: FileInput,
        fieldOptions: {
            name: 'profilePicture',
            label: 'Profile picture',
        },
        inputProps: {
            type: 'file',
            multiple : false,
            accept:'image/*'
        },
    }
];
