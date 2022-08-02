import React, { useContext, useEffect } from 'react'
import { ClientContext } from '../context/context';
import VolItem from '../volunteer_comps/volItem';

export default function VolunteersList() {

    const { volListAr, doApiListVol } = useContext(ClientContext);

    useEffect(() => {
        doApiListVol();
    }, [volListAr])


    return (

        <div className='container'>
            <div className="row">
                {volListAr.map((item, i) => {
                    return (
                        <VolItem key={i} item={item} />
                    )
                })}
            </div>
        </div>
    )
}
