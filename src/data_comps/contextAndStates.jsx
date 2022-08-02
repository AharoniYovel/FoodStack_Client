import React, { useEffect, useState } from 'react'
import AppRoutes from '../appRoutes';
import { ClientContext } from "../context/context";
import { API_URL, doApiGet, DONATES, VOLUNTEERS } from '../services/apiService';

export default function ContextAndStates() {

    const [logOutBtn, setLogOutBtn] = useState(false);
    console.log(logOutBtn)

    //  * volunteer info state
    const [volInfo, setvVolInfo] = useState([]);

    //  * volunteers list state
    const [volListAr, setVolListAr] = useState([]);

    //  * donates list state
    const [donListAr, setDonListAr] = useState([]);


    const doApiVolInfo = async () => {
        let apiUrl = API_URL + VOLUNTEERS + "/volunteerInfo";
        let resp = await doApiGet(apiUrl);
        setvVolInfo(resp.data);
    }

    const doApiListVol = async () => {
        let apiUrl = API_URL + VOLUNTEERS + "/list";
        let resp = await doApiGet(apiUrl);
        setVolListAr(resp.data);
    }

    const doApiListDon = async () => {
        let apiUrl = API_URL + DONATES + "/list";
        let resp = await doApiGet(apiUrl);
        setDonListAr(resp.data);
    }

    return (
        <ClientContext.Provider value={
            {
                //Functions 
                doApiVolInfo, doApiListVol, doApiListDon, setLogOutBtn,

                // States
                volListAr, donListAr, volInfo, logOutBtn
            }
        }>

            <AppRoutes />

        </ClientContext.Provider>
    )
}
