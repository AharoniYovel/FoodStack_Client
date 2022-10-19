import React, { useEffect, useState } from 'react'
import { API_URL, doApiGet, PATHS } from '../services/apiService';
import PathItemForList from './pathItemForList';

export default function PathsList() {

    const [pathList, setPathList] = useState([]);


    useEffect(() => {
        doApiGetPathsList();
    }, [pathList])


    const doApiGetPathsList = async () => {
        let apiUrl = API_URL + PATHS + '/allPathList';
        let resp = await doApiGet(apiUrl);
        setPathList(resp.data);
    }


    return (
        <div className='container-fluid'>
            <div className='container'>
                <h2 className='display-4 my-4 text-center py-4'>Paths list</h2>
                <div className="row">

                    {pathList.map((item, i) => {
                        return (
                            <PathItemForList key={i} item={item} />
                        )
                    })}

                </div>
            </div>
        </div>
    )
}