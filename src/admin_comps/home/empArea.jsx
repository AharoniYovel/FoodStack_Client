import React, { useState } from 'react'
import SpinerLoader from '../../helpers/spinerLoader/spinerLoader';

export default function EmpArea() {

    const [loading, setLoading] = useState(false);


    return (
        <div>
            {loading ?
                <SpinerLoader /> : <h2>EmpArea</h2>
            }
        </div>
    )
}
