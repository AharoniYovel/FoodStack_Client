import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ClientContext } from '../context/context';
import { API_URL, doApiMethod, EMPLOYEES, TOKEN_NAME } from '../services/apiService';
import { toast } from "react-toastify";
import './loginEmp.css'


export default function EmpLogin() {

    const { doApiListDon, doApiListVol } = useContext(ClientContext);


    const nav = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSub = (_bodyData) => {
        console.log(_bodyData);
        doApiEmpLogin(_bodyData);
    }

    const doApiEmpLogin = async (_bodyData) => {
        try {
            let url = API_URL + EMPLOYEES + "/login";
            let resp = await doApiMethod(url, "post", _bodyData);
            console.log(resp.data);

            if (resp.data.token) {
                localStorage.setItem(TOKEN_NAME, resp.data.token);
                localStorage.setItem("NickName", resp.data.employee.nickName)
                await doApiListDon();
                await doApiListVol();

                if (resp.data.employee.role === "superAdmin") {
                    nav("/superAdmin");
                }
                else { nav("/employee"); }

                toast.success(`Welcome back ${resp.data.employee.nickName}`)
            }
        }

        catch (err) {
            console.log(err.response);
            toast.error("User or Password wrong");
        }
    }


    return (
        <React.Fragment>
            <div className='container-fluid full-screen-containerEmp'>
                <div className='login-container'>

                    <h1 className='login-title'>Welcome employees</h1>
                    <form onSubmit={handleSubmit(onSub)} className='form'>

                        <div className="input-group">
                            <label>Email:</label>
                            <input {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} required type="email" />
                            {errors.email && <small className='text-danger'>* Enter valid mail</small>}
                        </div>

                        <div className="input-group">
                            <label>Password:</label>
                            <input {...register("password", { required: true, minLength: 3 })} required type="password" />
                            {errors.password && <small className='text-danger'>* Enter valid password (min 3 chars)</small>}
                        </div>

                        <button className='login-button'>Log in</button>

                    </form>
                </div>
            </div>
        </React.Fragment>

    )
}
