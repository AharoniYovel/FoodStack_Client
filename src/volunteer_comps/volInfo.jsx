import React, { useContext, useEffect, useState } from 'react'
import { ClientContext } from '../context/context';
import CustomizedListForVol from '../helpers/cardMetirial/CustomizedList';
import SpinerLoader from '../helpers/spinerLoader/spinerLoader';

export default function VolInfo() {

    const { volInfo, doApiVolInfo } = useContext(ClientContext);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        doApiVolInfo();
        setTimeout(timeOut, 1500);
    }, [volInfo])

    const timeOut = () => {
        setLoading(true);
    }


    return (
        <React.Fragment>
            {loading ?
                <CustomizedListForVol itemProp={volInfo} />
                // <div div className='container col-md-4 border border-danger p-2' >
                //     <ul>
                //         <h2>name: {volInfo.fullName}</h2>
                //         <li>short id : {volInfo.short_id}</li>
                //         <li>role: {volInfo.role}</li>
                //         <li>email: {volInfo.email}</li>
                //         <li>city: {volInfo.city}</li>
                //         <li>phone: {volInfo.phone}</li>
                //         <li>radius: {volInfo.radius}</li>
                //         <li>rangePeople: {volInfo.rangePeople}</li>
                //         <li>anonymous? : {volInfo.anonymous ? "Yes" : "No"} </li>
                //     </ul>
                // </div>
                :
                <SpinerLoader />
            }
        </React.Fragment>

    )
}
