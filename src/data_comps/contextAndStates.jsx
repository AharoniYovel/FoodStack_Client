import React, { useEffect, useState } from 'react'
import AppRoutes from '../appRoutes';
import { ClientContext } from "../context/context";
import { API_URL, doApiGet } from '../services/apiService';

export default function ContextAndStates() {

    //  * volunteers list state
    const [volListAr, setVolListAr] = useState([]);

    //  * donates list state
    const [donListAr, setDonListAr] = useState([]);

    useEffect(() => {
        doApiListVol();
        doApiListDon();
    }, [volListAr, donListAr])


    const doApiListVol = async () => {
        let apiUrl = API_URL + "/volunteers/list";
        let resp = await doApiGet(apiUrl);
        setVolListAr(resp.data);
    }

    const doApiListDon = async () => {
        let apiUrl = API_URL + "/donates/list";
        let resp = await doApiGet(apiUrl);
        setDonListAr(resp.data);
    }

    return (
        <ClientContext.Provider value={
            {
                volListAr, donListAr
            }
        }>

            <AppRoutes />

        </ClientContext.Provider>
    )
}
