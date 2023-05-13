import React from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import AjoutStationnements from './component/AjoutStationnements';
import ChercherParking from './component/ChercherParking';
import ConsulterDepenses from './component/ConsulterDepenses';
import ServiceNombre from './component/ServiceNombre';
import ShowPage from './component/ShowPage';
import Register from './login forms/Register';
import Login from './login forms/Login';
const LandingPage = () => {
    const id = useParams()
    return (
        <div >
            <Routes>
                <Route path='/ajoutStationnements' element={<AjoutStationnements />}></Route>
                <Route path='/chercherParking' element={<ChercherParking />}></Route>
                <Route path='/consulterDepenses' element={<ConsulterDepenses />}></Route>
                <Route path='/serviceNombre' element={<ServiceNombre />} />
                <Route path='/show/:id' element={<ShowPage />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </div>
    );
};

export default LandingPage;