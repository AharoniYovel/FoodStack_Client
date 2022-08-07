import React, { useState } from 'react'
import Loader from '../../helpers/loading';

export default function IndexEmp() {

    const [loading, setLoading] = useState(false);


    return (
        <div>
            {!loading ?
                <Loader />: <h2>asdasdas</h2>
        }
        </div>
    )
}
