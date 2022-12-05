import React, { useContext, useEffect, useState } from 'react'
import { ClientContext } from '../context/context';
import PathItemForList from './pathItemForList';

export default function PathsList() {

    const { pathList, doApiGetPathsList } = useContext(ClientContext);

    const [filterAr, setFilterAr] = useState([]);

    useEffect(() => {
        doApiGetPathsList();
        filterPathsWithNoVol();
    }, [pathList])


    const filterPathsWithNoVol = () => {
        let filter = pathList.filter(path => path.volunteerID !== null);
        setFilterAr(filter);
    }


    return (
        <div className='container-fluid'>
            <div className='container'>
                <h2 className='display-4 my-4 text-center py-4'>Paths list</h2>
                <div className="row">

                    {filterAr.map((item, i) => {
                        return (
                            <PathItemForList key={i} item={item} />
                        )
                    })}

                </div>
            </div>
        </div>
    )
}