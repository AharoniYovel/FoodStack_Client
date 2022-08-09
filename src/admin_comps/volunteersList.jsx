import React, { useContext, useEffect, useState } from 'react'
import { ClientContext } from '../context/context';
import CustomizedListForVol from '../helpers/cardMetirial/CustomizedList';
import SpinerLoader from '../helpers/spinerLoader/spinerLoader';


export default function VolunteersList() {

    const { volListAr, doApiListVol } = useContext(ClientContext);

    const [loading, setLoading] = useState(false);


    useEffect(() => {
        doApiListVol();
        setTimeout(timeOut, 1500);
    }, [volListAr])

    const timeOut = () => {
        setLoading(true);
    }


    return (

        <div className='container'>
            <div className="row g-4 row-cols-md-3 row-cols-1 p-5">

                {loading ?

                    volListAr.map((item, i) => {
                        return (
                            <div className='col'>
                                <CustomizedListForVol key={i} itemProp={item} />
                            </div>
                        )
                    })
                    :
                    <SpinerLoader />
                }

            </div>

        </div>
    )
}
