import React, { useState } from 'react';
import { Map, Marker } from 'react-map-gl';
import { infConect } from '../../config/secret';
import { MdLocationPin } from 'react-icons/md'

import json from './locations.json'

export default function MapForEmp() {

    const viewPort = {
        latitude: 32.0712963,
        longitude: 34.77249070000001,
        zoom: 10,
    }


    return (
        <div>
            <Map mapboxAccessToken={infConect.mapboxAccessToken}
                initialViewState={viewPort}
                style={{ width: '100vw', height: "100vh" }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
            >
                {json.map((point, i) => {
                    return (
                        <Marker key={i} latitude={point.lat} longitude={point.lng}>
                            <MdLocationPin className='fs-1 text-danger'>asdasdasd</MdLocationPin>
                        </Marker>
                    )
                })}

            </Map>
        </div>
    )
}
