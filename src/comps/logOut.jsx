import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ClientContext } from '../context/context'
import { TOKEN_NAME } from '../services/apiService';

export default function LogOut() {

    const { setVolunteer } = useContext(ClientContext);

    useEffect(() => {
        setVolunteer({ name: "", role: "" });
        let name = localStorage["Name"];
        localStorage.removeItem(TOKEN_NAME);
        localStorage.removeItem("Name");
        window.location.href = "/";
        toast.dark(`Log out, see you soon ${name}!`);

    }, [])


    return (
        <React.Fragment></React.Fragment>
    )
}
