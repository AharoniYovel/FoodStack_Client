import React, { useEffect } from 'react'
import { toast } from 'react-toastify';
import { TOKEN_NAME } from '../services/apiService';

export default function EmpLogOut() {

    useEffect(() => {
        let name = localStorage["NickName"];
        localStorage.removeItem(TOKEN_NAME);
        localStorage.removeItem("NickName");
        window.location.href="/loginEmployees";
        toast.dark(`Log out, see you soon ${name}!`);

    }, [])


    return (
        <React.Fragment></React.Fragment>
    )
}
