import React, { useEffect, useState } from 'react'
import AppRoutes from '../appRoutes';
import { ClientContext } from "../context/context";
import { API_URL, doApiGet, DONATES, VOLUNTEERS } from '../services/apiService';

export default function ContextAndStates() {

    const [logOutBtn, setLogOutBtn] = useState(false);

    //  * volunteer info state
    const [volInfo, setvVolInfo] = useState([]);

    //  * volunteers list state
    const [volListAr, setVolListAr] = useState([]);

    //  * donates list state
    const [donListAr, setDonListAr] = useState([]);

    const [donateID, setDonateID] = useState(String);


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
                doApiVolInfo, doApiListVol, doApiListDon, setLogOutBtn, setDonateID,

                // States
                volListAr, donListAr, volInfo, logOutBtn, donateID
            }
        }>

            <AppRoutes />

        </ClientContext.Provider>
    )
}
