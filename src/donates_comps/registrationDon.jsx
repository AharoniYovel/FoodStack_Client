import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ClientContext } from '../context/context';
import { API_URL, doApiMethod, DONATES } from '../services/apiService';
import { toast } from "react-toastify";
import { BsArrowRightCircleFill } from 'react-icons/bs';
import SpinerLoader from '../helpers/spinerLoader/spinerLoader';



export default function RegistrationDon() {

    const { setDonateID } = useContext(ClientContext);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setTimeout(timeOut, 500);
    }, [])

    const timeOut = () => {
        setLoading(true);
    }

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
            nav("/registrationDon/donatePoint");
        }

        catch (err) {
            // The way to collect err in axios
            console.log(err.response);
            toast.warning(`wrong deatails, ${err.response.data.err_msg}`);
        }
    }



    return (
        <React.Fragment>
            {loading ?
                <div className='container-fluid backRound'>
                    <div className='container col-md-5'>
                        <h2 className='text-center p-3'>Registration Donates</h2>

                        <form onSubmit={handleSubmit(onSubReg)} className='p-3 border border-dark rounded-5'>

                            <label>Full Name:</label>
                            <input {...register("fullName", { required: true, minLength: 2 })} type="name" className='form-control' />
                            {errors.fullName && <small className='d-block text-danger'>* Enter full name, min 2 chars</small>}

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
                            <button className='btn btn-info mt-4'>Next<BsArrowRightCircleFill className='ms-2 fs-4' /></button><small className='float-end display-6'>1/2</small>


                        </form>
                        <br />

                    </div>
                </div>
                :
                <SpinerLoader />
            }
        </React.Fragment>
    )
}
