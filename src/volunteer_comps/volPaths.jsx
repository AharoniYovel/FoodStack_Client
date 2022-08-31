import React, { useEffect, useState } from 'react'
import { API_URL, doApiGet, VOLUNTEERS } from '../services/apiService';
import PathItemToShow from './pathItemToShow';

export default function VolPaths() {

    const [pathsOfVol, setPathsOfVol] = useState([]);

    const doApigetPathsOfVol = async () => {
        let apiUrl = API_URL + VOLUNTEERS + "/listOfPathsOfVol";
        let resp = await doApiGet(apiUrl);
        setPathsOfVol(resp.data);
    }

    useEffect(() => {
        doApigetPathsOfVol();
    }, [pathsOfVol])



    return (
        <div className='container-fluid'>
            <div className='container'>
                <h2 className='display-4 my-4 text-center py-4'>My paths</h2>
                <div className="row">

                    {pathsOfVol.map((item, i) => {
                        return (
                            <PathItemToShow key={i} item={item} />
                        )
                    })}

                </div>
            </div>
        </div>
    )
}
