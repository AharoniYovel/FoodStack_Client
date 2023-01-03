import React, { useContext } from 'react'
import { ClientContext } from '../context/context';
import { API_URL, doApiMethod, PATHS } from '../services/apiService';
import { toast } from 'react-toastify';
import SpinerLoader from '../helpers/spinerLoader/spinerLoader';
import { useNavigate } from 'react-router-dom';
import InteractiveList from '../helpers/mapPathList/InteractiveList';

export default function AddPath() {

    const { addpointClick, setaddpointClick, donateInfoClick, setDonateInfoClick, setPointsForPath } = useContext(ClientContext);

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

    const delFromTempAr = async (_point) => {

        setaddpointClick(prevId => prevId.filter(point_id => point_id != _point._id));

        setDonateInfoClick(prevPoints => prevPoints.filter(point => point._id != _point._id));

        setPointsForPath(prev => [...prev, _point]);
    }

    let totalPeople = 0;

    return (

        <React.Fragment>

            {donateInfoClick.length > 0 ?

                <div className='m-4' >
                    <button className='text-white bg-black p-2 float-end badge fs-6 mb-3' onClick={() => { window.confirm("Are you sure?") && doApiAddPath() }}>add path</button>

                    <ul>

                        {donateInfoClick.map((item, i) => {
                            totalPeople += Number(item.donateId.rangePeople);
                            return (
                                <InteractiveList key={i} item={item} delFromTempAr={delFromTempAr} />
                            )
                        })}

                    </ul >

                    <h3 className='text-center text-success'>Total people in path: {totalPeople}</h3>

                </div >

                :

                <>
                    <h2 className='text-center text-uppercase'>Please group some dontes red pointers for add a path!</h2>
                    <SpinerLoader />
                </>
            }


        </React.Fragment >
    )
}