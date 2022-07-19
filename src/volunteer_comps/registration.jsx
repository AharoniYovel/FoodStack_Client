import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../services/apiService';

export default function Registration() {

    const nav = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSub = (_bodyData) => {

    }

    const doApiLogin = async (_bodyData) => {
        try {
            let url = API_URL + ""
        }

        catch (err) {

        }
    }

    return (
        <React.Fragment>

        </React.Fragment>

    )
}
