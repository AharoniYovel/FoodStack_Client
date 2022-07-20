import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { API_URL, doApiMethod, TOKEN_NAME } from '../services/apiService';

export default function Login() {

    const nav = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSub = (_bodyData) => {
        console.log(_bodyData);
        doApiLogin(_bodyData);
    }

    const doApiLogin = async (_bodyData) => {
        try {
            let url = API_URL + "/volunteers/login";
            let resp = await doApiMethod(url, "post", _bodyData);
            console.log(resp.data);

            if (resp.data.token) {
                localStorage.setItem(TOKEN_NAME, resp.data.token);
                nav("/admin/volList");
            }
        }

        catch (err) {
            console.log(err.response);
            alert("User or Password wrong");
        }
    }

    return (
        <React.Fragment>
            <div className='container'>
                <h1>Login</h1>
                <form onSubmit={handleSubmit(onSub)} className='col-md-6 p-3 shadow'>

                    <label>Email:</label>
                    <input {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} type="email" className='form-control' />
                    {errors.email && <small className='d-flex text-danger'>* Enter valid mail</small>}

                    <label>Password:</label>
                    <input {...register("password", { required: true, minLength: 3 })} type="password" className='form-control' />
                    {errors.password && <small className='d-flex text-danger'>* Enter valid password (min 3 chars)</small>}


                    <button className='btn btn-info mt-3'>Log in</button>
                </form>
            </div>
        </React.Fragment>

    )
}
