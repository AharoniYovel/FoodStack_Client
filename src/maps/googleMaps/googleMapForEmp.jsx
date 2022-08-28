import React, { useContext, useEffect, useMemo, useState } from 'react'
import { GoogleMap, useLoadScript, MarkerF, InfoWindow } from '@react-google-maps/api'
import { infConect } from '../../config/secret'
import { ClientContext } from '../../context/context'

import './googleMaps.css'

import json from './../mapBox/locations.json'



export default function GoogleMapForEmp() {

    const { isLoaded } = useLoadScript({ googleMapsApiKey: infConect.googleMapsApiKey });

    if (!isLoaded) return <div>Loading...</div>





    return (

        json ? <Map /> : <div>loadibg...</div>

    )
}


function Map() {

    const { pointsForPath, doApiGetPointsForNewPath } = useContext(ClientContext);

    useEffect(() => {
        doApiGetPointsForNewPath();
    }, [pointsForPath])

    // console.log('pointsForPath', pointsForPath)
    const [selectedPark, setSelectedPark] = useState(null);

    const center = useMemo(() => ({ lat: 32.05406083412323, lng: 34.839882212960525 }), []);

    return <GoogleMap zoom={11} center={center} mapContainerClassName='map-container'>

        {pointsForPath.map((point, i) => {

            return (
                <MarkerF key={i} position={{ lat: point.location.lat, lng: point.location.lng }}
                    onClick={() => { setSelectedPark(point) }} />

            )
        })}


        {selectedPark && (<InfoWindow onCloseClick={() => { setSelectedPark(null) }} position={{ lat: selectedPark.location.lat, lng: selectedPark.location.lng }}>
            <div className='text-center'>
                <h2>Name={selectedPark.donateId.fullName}</h2>
                <h4>Range of people={selectedPark.donateId.rangePeople}</h4>
                <h4>FLOOR= {selectedPark.floor}</h4>
            </div>
        </InfoWindow>)}


    </GoogleMap>

}