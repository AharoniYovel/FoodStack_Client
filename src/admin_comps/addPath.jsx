import React, { useContext } from 'react'
import { ClientContext } from '../context/context';
import { API_URL, doApiMethod, PATHS } from '../services/apiService';
import { toast } from 'react-toastify';
import DeleteIcon from '@mui/icons-material/Delete';
import SpinerLoader from '../helpers/spinerLoader/spinerLoader';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import { useNavigate } from 'react-router-dom';
import aos from 'aos';





export default function AddPath() {

    const { addpointClick, donateInfoClick } = useContext(ClientContext);

    const nav = useNavigate();


    const doApiAddPath = async () => {

        try {
            let apiUrl = API_URL + PATHS + "/addPath";
            let resp = await doApiMethod(apiUrl, 'post', addpointClick);
            console.log('resp', resp);
            addpointClick.splice(0, addpointClick.length);
            donateInfoClick.splice(0, donateInfoClick.length);
            nav(-1);
            toast.success("Path has been add");
        }

        catch (err) {
            console.log(err.response);
        }

    }

    const delFromTempAr = async (_index) => {
        addpointClick.splice(_index, 1);
        donateInfoClick.splice(_index, 1);
        console.log(addpointClick);
        console.log(donateInfoClick);
    }

    let totalPeople = 0;

    return (

        <React.Fragment>

            {donateInfoClick.length > 0 ?

                <div className='m-4' >
                    <button className='text-white bg-success p-2' onClick={doApiAddPath}>add path</button>

                    <ul className='border border-dark'>

                        {donateInfoClick.map((item, i) => {
                            totalPeople += Number(item.donateId.rangePeople);
                            return (

                                <div key={item.point_id} className='row m-2 border border-danger p-1'>

                                    <div className='col-9 text-center'>
                                        <li>{item.donateId.fullName}</li>
                                        <li>{item.donateId.rangePeople} <EmojiPeopleIcon /></li>
                                    </div>

                                    <button className='bg-danger col-3' onClick={() => delFromTempAr(i)}><DeleteIcon /></button>

                                </div>
                            )
                        })}

                    </ul >

                    <h3 className='text-center text-success'>Total people in path: {totalPeople}</h3>

                </div >

                :


                <SpinerLoader />


            }


        </React.Fragment >
    )
}
