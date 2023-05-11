import React from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import AjoutStationnements from './component/AjoutStationnements';
import ChercherParking from './component/ChercherParking';
import ConsulterDepenses from './component/ConsulterDepenses';
import ServiceNombre from './component/ServiceNombre';
import ShowPage from './component/ShowPage';
<<<<<<< HEAD
import Register from './login forms/Register';
import Login from './login forms/Login';
=======
import Example from './Navbar';
import Register from './Register';
>>>>>>> f8a0dd1 (Modify Stationnement Add)
const LandingPage = () => {
    const id = useParams()
    return (
        <>
            <div >
                <Routes>
                    <Route path='/ajoutStationnements' element={<AjoutStationnements />}></Route>
                    <Route path='/chercherParking' element={<ChercherParking />}></Route>
                    <Route path='/consulterDepenses' element={<ConsulterDepenses />}></Route>
                    <Route path='/serviceNombre' element={<ServiceNombre />} />
                    <Route path='/show/:id' element={<ShowPage />} />
                    <Route path='/register' element={<Register />} />
<<<<<<< HEAD
                    <Route path='/login' element={<Login />} />
=======
>>>>>>> f8a0dd1 (Modify Stationnement Add)
                </Routes>

            </div>
        </>
    );
};

export default LandingPage;