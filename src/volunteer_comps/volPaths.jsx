import React, { useEffect, useState } from 'react'
import { API_URL, doApiGet, VOLUNTEERS } from '../services/apiService';
import PathItemToShow from './pathItemToShow';

export default function VolPaths() {

    const [pathsOfVol, setPathsOfVol] = useState([]);

    const [empty, setEmpty] = useState(false);

    const doApigetPathsOfVol = async () => {
        let apiUrl = API_URL + VOLUNTEERS + "/listOfPathsOfVol";
        let resp = await doApiGet(apiUrl);
        setPathsOfVol(resp.data);
        if (resp.data.length === 0) {
            setEmpty(true);
        }
    }

    useEffect(() => {
        doApigetPathsOfVol();
    }, [pathsOfVol])



    return (
        <div className='container-fluid'>
            <div className='container'>
                <h2 className='display-4 my-4 text-center py-4'>My paths</h2>
                <div className="row">

                    {pathsOfVol.length !== 0 &&
                        pathsOfVol.map((item, i) => {
                            return (
                                <PathItemToShow key={i} item={item} />
                            )
                        })
                    }

                    {empty && <h2 className='display-4 my-4 text-center py-4 fw-bolder text-danger'>You dont have personal paths 😥</h2>
                    }

                </div>
            </div>
        </div>
    )
}
