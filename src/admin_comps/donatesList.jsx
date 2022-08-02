import React, { useContext, useEffect } from 'react'
import { ClientContext } from '../context/context';
import DonItem from '../donates_comps/donItem';

export default function DonatesList() {

    const { donListAr, doApiListDon } = useContext(ClientContext);

    useEffect(() => {
        doApiListDon();
    }, [donListAr])


    return (
        <div className='container'>
            <div className="row">
                {donListAr.map((item, i) => {
                    return (
                        <DonItem key={i} item={item} />
                    )
                })}
            </div>
        </div>
    )
}
