import React, { useEffect, useState } from 'react'
import AppRoutes from '../appRoutes';
import { ClientContext } from "../context/context";
import { API_URL, doApiGet } from '../services/apiService';

export default function ContextAndStates() {

    const [volListAr, setVolListAr] = useState([]);

    useEffect(() => {
        doApi();
    }, [])


    const doApi = async () => {
        let apiUrl = API_URL + "/volunteers/list";
        let resp = await doApiGet(apiUrl);
        console.log(resp.data);
        setVolListAr(resp.data);
    }

    return (
        <ClientContext.Provider value={
            {
                volListAr
            }
        }>

            <AppRoutes />

        </ClientContext.Provider>
    )
}
