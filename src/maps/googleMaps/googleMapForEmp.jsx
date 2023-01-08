import React, { useContext, useEffect, useMemo } from 'react'
import { GoogleMap, useLoadScript, MarkerF, InfoWindow } from '@react-google-maps/api'
import { infConect } from '../../config/secret'
import { ClientContext } from '../../context/context'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';


import './googleMaps.css'
import SpinerLoader from '../../helpers/spinerLoader/spinerLoader'


export default function GoogleMapForEmp() {

    const { isLoaded } = useLoadScript({ googleMapsApiKey: infConect.googleMapsApiKey });

    return (
        isLoaded ? <Map /> : <SpinerLoader />
    )
}


function Map() {

    const { pointsForPath, setPointsForPath, doApiGetPointsForNewPath, addpointClick, setaddpointClick, selectedPoint, setselectedPoint, donateInfoClick, setDonateInfoClick } = useContext(ClientContext);

    useEffect(() => {
        doApiGetPointsForNewPath();
    }, [])

    const addPointToAr = (_point) => {

        // * premetive array of id's
        setaddpointClick(prevPoint => [...prevPoint, _point._id]);

        // * array of objects of the points
        setDonateInfoClick(prevDonate => [...prevDonate, _point]);
    }

    const center = useMemo(() => ({ lat: 32.05406083412323, lng: 34.839882212960525 }), []);

    return <GoogleMap zoom={11} center={center} mapContainerClassName='map-container' >

        {
            pointsForPath.map((point, i) => {

                if (point.donateId.status === 'pending') {

                    return (
                        <MarkerF key={i} position={{ lat: point.location.lat, lng: point.location.lng }}
                            onClick={() => { setselectedPoint(point) }} />

                    )
                }
            })
        }


        {
            selectedPoint &&
            <InfoWindow onCloseClick={() => { setselectedPoint(null) }} position={{ lat: selectedPoint.location.lat, lng: selectedPoint.location.lng }}>
                <div className='text-center'>
                    <h2> Name: {selectedPoint.donateId.fullName}</h2>
                    <h4 className='h5'><EmojiPeopleIcon  className='fs-2'/> {selectedPoint.donateId.rangePeople}</h4>
                    <h4 className='h5'>FLOOR: {selectedPoint.floor}</h4>
                    <button className='badge bg-success fs-4 rounded-5' onClick={() => {
                        addPointToAr(selectedPoint);
                        setPointsForPath(tempPoints => tempPoints.filter(point => point._id != selectedPoint._id));
                        setselectedPoint(null);
                    }}>add to path</button>
                </div>
            </InfoWindow>
        }


    </GoogleMap >



}