import React, { useEffect, useState } from 'react'
import { infConect } from '../../config/secret';
import axios from 'axios'


export default function GecodeTemplte() {

    const [first, setfirst] = useState({})

    const data1 = {
        longitude: Number,
        latitude: Number
    }

    useEffect(() => {
        doLocation();
    }, [])

    console.log('first', first)



    const doLocation = async (_data) => {
        let url = `https://maps.googleapis.com/maps/api/geocode/json?address=HaShalom 32, Ramat HaSharon&key=${infConect.googleMapsApiKey}`;
        let resp = await axios.get(url);
        let data = resp.data.results[0].geometry.location;
        console.log('data', data)
        data1.latitude = data.lng;
        data1.longitude = data.lat;
        setfirst(data1)
    };

    return (
        <div>Gecode</div>
    )
}
