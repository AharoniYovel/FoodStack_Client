import React, { useContext, useEffect, useState } from 'react'
import { ClientContext } from '../context/context';
import SpinerLoader from '../helpers/spinerLoader/spinerLoader';
import VolItem from '../volunteer_comps/volItem';


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
            <div className="row row-cols-md-2 row-cols-1 g-5 m-0">

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
