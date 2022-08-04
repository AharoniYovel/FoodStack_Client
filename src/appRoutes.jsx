import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DonatesList from './admin_comps/donatesList';
import EmpLogin from './admin_comps/empLogin';
import VolunteersList from './admin_comps/volunteersList';
import HeaderAdmin from './comps/headerAdmin';
import HeaderClient from './comps/headerClient';
import Home from './comps/home';
import Login from './comps/login';
import DonatePoint from './donates_comps/donatePoint';
import RegistrationDon from './donates_comps/registrationDon';
import Registration from './volunteer_comps/registration';
import VolInfo from './volunteer_comps/volInfo';


export default function AppRoutes() {
    return (
        <BrowserRouter>


            <Routes>
                <Route path='/employee/*' element={<HeaderAdmin />} />
                <Route path='/*' element={<HeaderClient />} />
            </Routes>

            <Routes>

                <Route index element={<Home />} />

                {/* Donates */}
                <Route path='registrationDon' element={<RegistrationDon />} />
                <Route path='donatePoint' element={<DonatePoint />} />

                {/* Volunteers */}
                <Route path='/login' element={<Login />} />
                <Route path='/registration' element={<Registration />} />
                <Route path='/volInfo' element={<VolInfo />} />

                {/* Employee */}
                <Route path='/loginEmployees' element={<EmpLogin />} />

                <Route path='/employee'>

                    <Route path='volList' element={<VolunteersList />} />
                    <Route path='donList' element={<DonatesList />} />

                </Route>

            </Routes>
        </BrowserRouter>
    )
}
