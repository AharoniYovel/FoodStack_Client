import React, { useEffect, useState } from 'react'
import AppRoutes from '../appRoutes';
import { ClientContext } from "../context/context";
import { API_URL, doApiGet, DONATES, EMPLOYEES, POINTS, VOLUNTEERS } from '../services/apiService';

export default function ContextAndStates() {


    //  * volunteer info state
    const [volInfo, setvVolInfo] = useState([]);

    //  * volunteers list state
    const [volListAr, setVolListAr] = useState([]);

    //  * donates list state
    const [donListAr, setDonListAr] = useState([]);

    // * donatedID by reference state
    const [donateID, setDonateID] = useState(String);

    // * points list state
    const [pointAr, setPointAr] = useState([]);

    const [empListAr, setEmpListAr] = useState([]);


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

    const doApiListPoints = async () => {
        let apiUrl = API_URL + POINTS + "/list";
        let resp = await doApiGet(apiUrl);
        setPointAr(resp.data);
    }

    const doApiListEmp = async () => {
        let apiUrl = API_URL + EMPLOYEES + "/list";
        let resp = await doApiGet(apiUrl);
        setEmpListAr(resp.data);
    }

    return (
        <ClientContext.Provider value={
            {
                //Functions 
                doApiVolInfo, doApiListVol, doApiListDon, setDonateID, doApiListPoints, doApiListEmp,

                // States
                volListAr, donListAr, volInfo, donateID, pointAr, empListAr
            }
        }>

            <AppRoutes />

        </ClientContext.Provider>
    )
}
