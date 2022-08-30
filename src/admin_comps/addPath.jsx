import React, { useContext } from 'react'
import { ClientContext } from '../context/context';
import { API_URL, doApiMethod, PATHS } from '../services/apiService';
import { toast } from 'react-toastify';


export default function AddPath() {

    const { addpointClick, pointsForPath, setPointsForPath, selectedPoint } = useContext(ClientContext);

    // console.log(pointsForPath);
    const doApiAddPath = async () => {

        try {
            let apiUrl = API_URL + PATHS + "/addPath";
            let resp = await doApiMethod(apiUrl, 'post', addpointClick);
            console.log('resp', resp)
            setPointsForPath(null);
        }

        catch (err) {
            console.log(err.response);
            toast.warning("There's error try again");
        }

    }


    return (
        <div>
            <ul>

                {addpointClick.map((item, i) => {
                    return (
                        <li key={i}>{selectedPoint.donateId.fullName}</li>

                    )
                })}

            </ul>

            <button onClick={doApiAddPath}>add path</button>
        </div>


    )
}
