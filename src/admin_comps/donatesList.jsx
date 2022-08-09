import React, { useContext, useEffect, useState } from 'react'
import { ClientContext } from '../context/context';
import CustomizedListForDon from '../helpers/cardMetirial/CustomizedListForDon';
import SpinerLoader from '../helpers/spinerLoader/spinerLoader';

export default function DonatesList() {

    const { donListAr, doApiListDon, pointAr, doApiListPoints } = useContext(ClientContext);

    const [loading, setLoading] = useState(false);


    useEffect(() => {
        doApiListDon();
        doApiListPoints();
        setTimeout(timeOut, 1500);
    }, [donListAr])

    const timeOut = () => {
        setLoading(true);
    }




    return (
        <div className='container'>
            <div className="row g-4 row-cols-md-3 row-cols-1 p-5">
                {loading ?
                    donListAr.map((item, i) => {
                        if (donListAr[i]._id === pointAr[i].donateId) {
                            return (
                                <div className='col'>
                                    <CustomizedListForDon key={i} itemProp={item} pointProp={pointAr[i]} />
                                </div>
                            )
                        }
                        else { return <h1 className='text-center text-danger'>Erorr, <br /> fail to load the Donated</h1> }

                    })
                    :
                    <SpinerLoader />
                }
            </div>
        </div>
    )
}
