import React, { useContext, useEffect, useMemo, useState } from 'react'
import { GoogleMap, useLoadScript, MarkerF, InfoWindow } from '@react-google-maps/api'
import { infConect } from '../../config/secret'
import { ClientContext } from '../../context/context'

import './googleMaps.css'
import SpinerLoader from '../../helpers/spinerLoader/spinerLoader'


export default function GoogleMapForEmp() {

    const { isLoaded } = useLoadScript({ googleMapsApiKey: infConect.googleMapsApiKey });

    return (
        isLoaded ? <Map /> : <SpinerLoader />
    )
}


function Map() {

    const { pointsForPath, doApiGetPointsForNewPath, addpointClick } = useContext(ClientContext);

    useEffect(() => {
        doApiGetPointsForNewPath();
    }, [pointsForPath])


    const addPointToAr = (_point) => {
        addpointClick.push(_point._id);
        console.log(addpointClick);
    }

    const [selectedPoint, setselectedPoint] = useState(null);

    const center = useMemo(() => ({ lat: 32.05406083412323, lng: 34.839882212960525 }), []);

    return <GoogleMap zoom={11} center={center} mapContainerClassName='map-container'>

        {pointsForPath.map((point, i) => {

            return (
                <MarkerF key={i} position={{ lat: point.location.lat, lng: point.location.lng }}
                    onClick={() => { setselectedPoint(point) }} />

            )
        })}


        {selectedPoint && (<InfoWindow onCloseClick={() => { setselectedPoint(null) }} position={{ lat: selectedPoint.location.lat, lng: selectedPoint.location.lng }}>
            <div className='text-center'>
                <h2>Name={selectedPoint.donateId.fullName}</h2>
                <h4 className='h5'>Range of people={selectedPoint.donateId.rangePeople}</h4>
                <h4 className='h5'>FLOOR= {selectedPoint.floor}</h4>
                <button onClick={() => { addPointToAr(selectedPoint) }}>add to path</button>
            </div>
        </InfoWindow>)}


    </GoogleMap>



}