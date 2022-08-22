import React, { useEffect, useState } from 'react'
import { infConect } from '../../config/secret';
import axios from 'axios'


export default function Gecode() {

    const [first, setfirst] = useState({})

    const data = {
        longitude: Number,
        attitude: Number
    }

    useEffect(() => {
        doLocation();
    }, [])

    console.log('first', first)



    const doLocation = async (_data) => {
        let url = `https://maps.googleapis.com/maps/api/geocode/json?address=הרצל 23 ראשון לציון&key=${infConect.googleMapsApiKey}`;
        let resp = await axios.get(url);
        let data = resp.data.results[0].geometry.location;
        console.log('data', data)
        // data.longitude = data.lat;
        // data.attitude = data.lng;
        setfirst(data)
    };

    return (
        <div>Gecode</div>
    )
}
