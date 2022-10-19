import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import AddEmp from './adminSuper_comps/addEmp';
import EditEmp from './adminSuper_comps/editEmp';
import EmpsList from './adminSuper_comps/empsList';
import SuperArea from './adminSuper_comps/superArea';
import DonatesList from './admin_comps/donatesList';
import EditDon from './admin_comps/editDon';
import EditVol from './admin_comps/editVol';
import EmpLogin from './admin_comps/empLogin';
import EmpArea from './admin_comps/home/empArea';
import VolunteersList from './admin_comps/volunteersList';
import HeaderAdmin from './comps/headerAdmin';
import Home from './comps/home';
import Login from './comps/login';
import NotFound404 from './comps/notFound404';
import DonatePoint from './donates_comps/donatePoint';
import RegistrationDon from './donates_comps/registrationDon';
import MapForEmpArea from './maps/googleMaps/mapForEmpArea';
import AddPathsToVol from './volunteer_comps/addPathsToVol';
import PathInfoForVol from './volunteer_comps/pointInPathInfoForVol';
import Registration from './volunteer_comps/registration';
import VolArea from './volunteer_comps/volArea';
import VolInfo from './volunteer_comps/volInfo';
import VolPaths from './volunteer_comps/volPaths';
import HeaderMUIclient from './comps/headerMUIclient'
import HeaderMUIemployee from './comps/headerMUIemployee';
import PathsList from './admin_comps/pathsList';
import PathListOfVol from './admin_comps/pathListOfVol';

export default function AppRoutes() {
    return (
        <BrowserRouter>


            <Routes>
                {/* <Route path='/employee/*' element={<HeaderAdmin />} /> */}
                <Route path='/employee/*' element={<HeaderMUIemployee />} />

                <Route path='/superAdmin/*' element={<HeaderMUIemployee />} />


                {/* <Route path='/*' element={<HeaderClient />} /> */}
                <Route path='/*' element={<HeaderMUIclient />} />
            </Routes>

            <Routes>

                <Route index element={<Home />} />



                {/* Donates */}
                <Route path='/registrationDon' element={<RegistrationDon />} />
                <Route path='/registrationDon/donatePoint' element={<DonatePoint />} />



                {/* Volunteers */}
                <Route path='/login' element={<Login />} />
                <Route path='/registration' element={<Registration />} />

                <Route path='/volunteer'>

                    <Route index element={<VolArea />} />

                    <Route path='volInfo' element={<VolInfo />} />
                    <Route path='addNewPathToVol' element={<AddPathsToVol />} />
                    <Route path='allPaths' element={<VolPaths />} />
                    <Route path='/volunteer/allPaths/pathInfo/:idPath' element={<PathInfoForVol />} />


                </Route>



                {/* Employee */}
                <Route path='/loginEmployees' element={<EmpLogin />} />


                <Route path='/employee'>

                    <Route index element={<EmpArea />} />

                    <Route path='volList' element={<VolunteersList />} />
                    <Route path='/employee/volList/editVol/:id' element={<EditVol />} />

                    <Route path='donList' element={<DonatesList />} />
                    <Route path='/employee/donList/editDon/:id' element={<EditDon />} />

                    <Route path='pathList' element={<PathsList />} />
                    <Route path='pathList/pathListOfVol/:idPath/:volName' element={<PathListOfVol />} />

                    <Route path='addPathArea' element={<MapForEmpArea />} />

                </Route>




                {/* SUPER ADMIN */}
                <Route path='/superAdmin'>

                    <Route index element={<SuperArea />} />



                    <Route path='empsList' element={<EmpsList />} />
                    <Route path='/superAdmin/empsList/addEmp' element={<AddEmp />} />
                    <Route path='/superAdmin/empsList/editEmp/:id' element={<EditEmp />} />

                </Route>




                <Route path='*' element={<NotFound404 />} />

            </Routes>

            {/* div for toast */}
            <ToastContainer theme='dark' position="top-left" />

        </BrowserRouter>
    )
}
