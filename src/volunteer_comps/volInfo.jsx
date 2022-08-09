import React, { useContext, useEffect, useState } from 'react'
import { ClientContext } from '../context/context';
import CustomizedListForVol from '../helpers/cardMetirial/CustomizedListForVol';
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
                :
                <SpinerLoader />
            }
        </React.Fragment>

    )
}
