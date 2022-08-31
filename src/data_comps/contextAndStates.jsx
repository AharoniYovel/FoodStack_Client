import React, { useEffect, useState } from 'react'
import AppRoutes from '../appRoutes';
import { ClientContext } from "../context/context";
import { API_URL, doApiGet, DONATES, EMPLOYEES, PATHS, POINTS, VOLUNTEERS } from '../services/apiService';

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

    // *  EMPLOYEES list state
    const [empListAr, setEmpListAr] = useState([]);

    // *  POINTS list state FOR MAP
    const [pointsForPath, setPointsForPath] = useState([]);

    const [addpointClick, setaddpointClick] = useState([]);

    const [selectedPoint, setselectedPoint] = useState(null);

    const [donateInfoClick, setDonateInfoClick] = useState([]);

    // *  Path list state FOR Vol to choose and add to him
    const [pathsForVol, setPathsForVol] = useState([]);



    // * counters of Obj in collections
    const [empCount, setEmpCount] = useState(Number);
    const [volCount, setVolCount] = useState(Number);
    const [donCount, setDonCount] = useState(Number);


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

    const doApigetCountEmp = async () => {
        let apiUrl = API_URL + EMPLOYEES + "/count";
        let resp = await doApiGet(apiUrl);
        setEmpCount(resp.data);
    }

    const doApigetCountVol = async () => {
        let apiUrl = API_URL + VOLUNTEERS + "/count";
        let resp = await doApiGet(apiUrl);
        setVolCount(resp.data);
    }

    const doApigetCountDon = async () => {
        let apiUrl = API_URL + DONATES + "/count";
        let resp = await doApiGet(apiUrl);
        setDonCount(resp.data);
    }

    const doApiGetPointsForNewPath = async () => {
        let apiUrl = API_URL + POINTS + "/listForMap";
        let resp = await doApiGet(apiUrl);
        setPointsForPath(resp.data);
    }

    const doApiGetPathForVol = async () => {
        let apiUrl = API_URL + PATHS + "/pathList";
        let resp = await doApiGet(apiUrl);
        setPathsForVol(resp.data);
    }

    



    return (
        <ClientContext.Provider value={
            {
                //Functions 
                doApiVolInfo, doApiListVol, doApiListDon, setDonateID, doApiListPoints, doApiListEmp, doApigetCountEmp, doApigetCountVol, doApigetCountDon, doApiGetPointsForNewPath, setselectedPoint, setDonateInfoClick, doApiGetPathForVol,

                // States
                volListAr, donListAr, volInfo, donateID, pointAr, empListAr, empCount, volCount, donCount, pointsForPath, addpointClick, selectedPoint, donateInfoClick, pathsForVol
            }
        }>

            <AppRoutes />

        </ClientContext.Provider>
    )
}
