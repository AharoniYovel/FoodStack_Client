import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DonatesList from './admin_comps/donatesList';
import VolunteersList from './admin_comps/volunteersList';
import HeaderAdmin from './comps/headerAdmin';
import HeaderClient from './comps/headerClient';
import Home from './comps/home';
import Login from './comps/login';
import RegistrationDon from './donates_comps/registrationDon';
import Registration from './volunteer_comps/registration';


export default function AppRoutes() {
    return (
        <BrowserRouter>


            <Routes>
                <Route path='/admin/*' element={<HeaderAdmin />} />
                <Route path='/*' element={<HeaderClient />} />
            </Routes>

            <Routes>

                <Route index element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/registration' element={<Registration />} />
                <Route path='registrationDon' element={<RegistrationDon />} />

                {/* admin */}
                <Route path='/admin/volList' element={<VolunteersList />} />
                <Route path='/admin/donList' element={<DonatesList />} />

            </Routes>
        </BrowserRouter>
    )
}
