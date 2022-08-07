import React, { useContext, useEffect, useState } from 'react'
import { ClientContext } from '../context/context';
import Loader from '../helpers/loading';
import VolItem from '../volunteer_comps/volItem';

export default function VolunteersList() {

    const { volListAr, doApiListVol } = useContext(ClientContext);

    const [loading, setLoading] = useState(false);


    useEffect(() => {
        doApiListVol();
        setTimeout(timeOut, 10000);
    }, [volListAr])

    const timeOut = () => {
        setLoading(true);
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
                    <Loader />
                }
            </div>

        </div>
    )
}
