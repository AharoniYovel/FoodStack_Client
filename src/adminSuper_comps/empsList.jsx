import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ClientContext } from '../context/context';
import CustomizedListForEmp from '../helpers/cardMetirial/CustomizedListForEmp';
import SpinerLoader from '../helpers/spinerLoader/spinerLoader';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';



export default function EmpsList() {

    const { empListAr, doApiListEmp } = useContext(ClientContext);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        doApiListEmp();
        setTimeout(timeOut, 1000);
    }, [empListAr])

    const timeOut = () => {
        setLoading(true);
    }

    return (
        <div className='container'> <br />
            <h1 className='text-center'>Employee List</h1>

            {loading ?
                <Link to='/superAdmin/empsList/addEmp'>
                    <Box className='float-end' sx={{ '& > :not(style)': { m: 1 } }}>
                        <Fab color="primary" aria-label="add">
                            <AddIcon />
                        </Fab>
                    </Box>
                </Link>
                :
                null
            }


            <div className="row g-4 row-cols-md-3 row-cols-1 p-5">

                {loading ?

                    empListAr.map((item, i) => {

                        return (
                            <div key={i} className='col'>
                                <CustomizedListForEmp itemProp={item} />
                            </div>
                        )
                    })
                    :
                    <SpinerLoader />
                }

            </div>

        </div>
    )
}
