import React, { useContext, useEffect, useState } from 'react'
import { ClientContext } from '../context/context';
import CustomizedListForVol from '../helpers/cardMetirial/CustomizedListForVol';
import SpinerLoader from '../helpers/spinerLoader/spinerLoader';

export default function VolInfo() {

    const { volInfo, doApiVolInfo } = useContext(ClientContext);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        doApiVolInfo();
        setTimeout(timeOut, 1000);
    }, [volInfo])

    const timeOut = () => {
        setLoading(true);
    }


    return (
        <React.Fragment>
            {loading ?
                <div className='d-flex align-items-center justify-content-center col-12'>
                    <CustomizedListForVol itemProp={volInfo} />
                </div>
                :
                <SpinerLoader />
            }
        </React.Fragment>

    )
}
