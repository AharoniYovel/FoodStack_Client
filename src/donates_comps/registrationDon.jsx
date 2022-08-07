import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ClientContext } from '../context/context';
import { API_URL, doApiMethod, DONATES } from '../services/apiService';
import { toast } from "react-toastify";



export default function RegistrationDon() {

    const { setDonateID, donateID } = useContext(ClientContext);

    let { register, getValues, handleSubmit, formState: { errors } } = useForm();

    const nav = useNavigate();

    const [anomusBtn, setAnomusBtn] = useState(true);

    const onSubReg = (_bodyData) => {
        doApiReg(_bodyData);
        console.log(_bodyData);
    }

    const doApiReg = async (_bodyData) => {

        try {
            _bodyData.anonymous = anomusBtn;
            let url = API_URL + DONATES + "/reg";
            let resp = await doApiMethod(url, "post", _bodyData);
            await setDonateID(resp.data)
            // nav("/employee/donList");
        }

        catch (err) {
            // The way to collect err in axios
            console.log(err.response);
            toast.warning("wrong deatails");
        }
    }



    return (
        <div className='container'>
            <h2>Registration Donates</h2>

            <form onSubmit={handleSubmit(onSubReg)} className='col-md-6 p-3 border'>

                <label>Full Name:</label>
                <input {...register("fullName", { required: true, minLength: 2 })} type="name" className='form-control' />
                {errors.fullName && <small className='d-block text-danger'>* Enter full name, min 2 chars</small>}

                {/* <label>City:</label>
                <input {...register("city", { required: true, minLength: 2 })} type="text" className='form-control' />
                {errors.city && <small className='d-block text-danger'>* Enter city</small>}

                <label>Adress:</label>
                <input {...register("adress", { required: true, minLength: 2 })} type="text" className='form-control' />
                {errors.adress && <small className='d-block text-danger'>* Enter city</small>}

                <label>House number:</label>
                <input {...register("houseNum", { required: true, minLength: 1 })} type="number" className='form-control' />
                {errors.houseNum && <small className='d-block text-danger'>* Enter House number</small>}

                <label>Floor number:</label>
                <input {...register("floor", { required: true, minLength: 1 })} type="number" className='form-control' />
                {errors.floor && <small className='d-block text-danger'>* Enter floor number</small>} */}

                <label>Phone:</label>
                <input {...register("phone", { required: true, minLength: 9, maxLength: 10 })} type="tel" className='form-control' />
                {errors.phone && <small className='d-block text-danger'>* Enter valid phone, min 9 chars, max 10</small>}

                <label>range of people:</label>
                <input {...register("rangePeople", { required: true, minLength: 1 })} type="number" className='form-control' />
                {errors.rangePeople && <small className='d-block text-danger'>* Enter radius</small>}

                <br />

                <p>anonymous?</p>
                <div className="form-check">
                    <input {...register("anonymous", { required: true })} onClick={() => setAnomusBtn(true)} className="form-check-input" required type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                    <label className="form-check-label" >
                        Yes
                    </label>
                </div>
                <div className="form-check">
                    <input {...register("anonymous", { required: false })} onClick={() => setAnomusBtn(false)} className="form-check-input" required type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label" >
                        No
                    </label>
                </div>


                <br />
                <button className='btn btn-success mt-4'>Sign up</button>


            </form>
        </div>)
}
