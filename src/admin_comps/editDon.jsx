import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import SpinerLoader from '../helpers/spinerLoader/spinerLoader';
import { API_URL, doApiGet, doApiMethod, DONATES } from '../services/apiService';

export default function EditDon() {

    const [donated, setDonated] = useState({});
    const [loading, setLoading] = useState(false);
    const [anomusBtn, setAnomusBtn] = useState(true);

    // ! state that prevent to show btn to block multi req...
    const [fade, setFade] = useState(false);

    let { register, handleSubmit, formState: { errors } } = useForm();


    const params = useParams();

    const nav = useNavigate();

    useEffect(() => {
        doApiInit();
        setTimeout(timeOut, 1000);
    }, [])

    const timeOut = () => {
        setLoading(true);
    }

    // * to collect data to inputs
    const doApiInit = async () => {
        let url = API_URL + DONATES + "/donInfo/" + params.id;
        try {
            let resp = await doApiGet(url);
            setDonated(resp.data);
        }

        catch (err) {
            console.log(err.response);
            toast.warning("There's error try again");
        }

    }

    const onSub = (_dataBody) => {
        console.log(_dataBody);
        doApiEdit(_dataBody);
    }

    const doApiEdit = async (_dataBody) => {
        setFade(true);

        _dataBody.anonymous = anomusBtn;
        let url = API_URL + DONATES + "/editDon/" + donated._id;
        try {
            let resp = await doApiMethod(url, "PUT", _dataBody);
            if (resp.data.modifiedCount == 1) {
                toast.success("Donated updated");
                nav(-1);
            }

        }

        catch (err) {
            if (err.response.data.code == 11000) {
                toast.warning("email already in system");
            }
            console.log(err.response);
            toast.warning("There's error try again");
        }

        setFade(false);
    }


    return (
        <div className='container'>
            <h1>Edit {donated.fullName}</h1>

            {donated._id && loading ?
                <form onSubmit={handleSubmit(onSub)} className='col-md-6 p-3 shadow'>

                    <label>phone:</label>
                    <input defaultValue={donated.phone} {...register("phone", { required: true, minLength: 9 })} type="text" className='form-control' />
                    {errors.phone && <small className='d-flex text-danger'>* Enter valid phone</small>}

                    <label>range of people:</label>
                    <input defaultValue={donated.rangePeople} {...register("rangePeople", { required: true, minLength: 1 })} type="number" className='form-control' />
                    {errors.rangePeople && <small className='d-block text-danger'>* Enter number above 0</small>}

                    <label>Status:</label>
                    <select defaultValue={donated.status} {...register("status")} className='form-select'>
                        <option value="pending">Pending</option>
                        <option value="allow">Allow</option>
                    </select>

                    <br />

                    <div className='border p-1 rounded'>
                        <p>Anonymous? :  {donated.anonymous ? "Yes" : "No"}</p>
                        <div className="form-check">
                            <input {...register("anonymous", { required: true })} onClick={() => setAnomusBtn(true)} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" >
                                Yes
                            </label>
                        </div>
                        <div className="form-check">
                            <input {...register("anonymous", { required: false })} onClick={() => setAnomusBtn(false)} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label className="form-check-label" >
                                No
                            </label>
                        </div>
                    </div>



                    {!fade && <button button onClick={() => { window.confirm("Are you sure?") }} className='btn btn-warning mt-3'>Edit donated</button>}
                    <button className='btn btn-danger mt-3 ms-5' onClick={() => {
                        window.confirm("are you sure?") && nav(-1);
                    }} type="button">Back</button>
                </form>
                :
                <SpinerLoader />

            }

        </div >
    )
}
