import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { API_URL, doApiGet, VOLUNTEERS } from '../services/apiService';

export default function AuthComp() {

    const nav = useNavigate();

    useEffect(() => {
        doApi();
    }, [])


    const doApi = async () => {
        try {
            let url = API_URL + VOLUNTEERS + '/checkToken';
            let resp = await doApiGet(url);
            if (resp.data.role !== "volunteer") {
                logOutAdmin("loged in to be here");
            }
        }

        catch (err) {
            console.log(err.response);
            logOutAdmin("pls log in");
        }
    }

    const logOutAdmin = (_msg) => {
        nav('/login');
        toast.warning(_msg);
    }

    return (
        <React.Fragment></React.Fragment>
    )
}
