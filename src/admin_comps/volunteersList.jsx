import React, { useContext, useEffect, useState } from 'react'
import { ClientContext } from '../context/context';
import SpinerLoader from '../helpers/spinerLoader/spinerLoader';
import VolItem from '../volunteer_comps/volItem';


export default function VolunteersList() {

    const { volListAr, doApiListVol } = useContext(ClientContext);

    const [loading, setLoading] = useState(false);


    useEffect(() => {
        doApiListVol();
        setTimeout(timeOut, 3000);
    }, [volListAr])

    const timeOut = () => {
        setLoading(false);
    }


    return (

        <div className='container'>
            <div className="row">
                {loading ?

                    volListAr.map((item, i) => {
                        return (
                            <VolItem key={i} item={item} />
                        )
                    })
                    :
                    <SpinerLoader />
                }
            </div>

        </div>
    )
}
