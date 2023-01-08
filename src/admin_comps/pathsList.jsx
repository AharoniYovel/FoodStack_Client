import React, { useContext, useEffect, useState } from 'react'
import { ClientContext } from '../context/context';
import SpinerLoader from '../helpers/spinerLoader/spinerLoader';
import PathItemForList from './pathItemForList';

export default function PathsList() {

    const { pathList, doApiGetPathsList } = useContext(ClientContext);

    const [filterAr, setFilterAr] = useState([]);

    const [loading, setLoading] = useState(false);


    useEffect(() => {
        doApiGetPathsList();
        filterPathsWithNoVol();
        setTimeout(timeOut, 1000);
    }, [pathList])

    const timeOut = () => {
        setLoading(true);
    }


    const filterPathsWithNoVol = () => {
        let filter = pathList.filter(path => path.volunteerID !== null);
        setFilterAr(filter);
    }


    return (
        <div className='container-fluid'>
            <div className='container'>
                <h2 className='display-4 my-4 text-center py-4'>Paths list</h2>
                <div className="row">

                    {loading ?

                        filterAr.map((item, i) => {
                            return (
                                <PathItemForList key={i} item={item} />
                            )
                        })
                        :
                        <SpinerLoader />
                    }

                </div>
            </div>
        </div>
    )
}