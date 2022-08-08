import React, { useContext, useEffect, useState } from 'react'
import { ClientContext } from '../context/context';
import DonItem from '../donates_comps/donItem';
import SpinerLoader from '../helpers/spinerLoader/spinerLoader';

export default function DonatesList() {

    const { donListAr, doApiListDon } = useContext(ClientContext);

    const [loading, setLoading] = useState(false);


    useEffect(() => {
        doApiListDon();
        setTimeout(timeOut, 1500);
    }, [donListAr])

    const timeOut = () => {
        setLoading(true);
    }


    return (
        <div className='container'>
            <div className="row">
                {loading ?
                    donListAr.map((item, i) => {
                        return (
                            <DonItem key={i} item={item} />
                        )
                    })
                    :
                    <SpinerLoader />
                }
            </div>
        </div>
    )
}
