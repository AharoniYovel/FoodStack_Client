import React, { useState } from 'react'
import SpinerLoader from '../../helpers/spinerLoader/spinerLoader';

export default function EmpArea() {

    const [loading, setLoading] = useState(false);


    return (
        <div>
            {!loading ?
                <SpinerLoader /> : <h2>asdasdas</h2>
            }
        </div>
    )
}
