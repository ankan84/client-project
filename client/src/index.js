import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Gstregis_form from './Gstregis_form';
import Multipleinputs from './login/Multipleinputs';
import Signup from './signup/SignUp';
import Gst_filing from './gst filling/Gst_filing';
import Services from './Services';
import Compilance from './Compilance';
import Contact from './contact/Contact';
import Trademark from './Trademark';
import Gst from './gst/Gst';
import Registration from './registration/Registration';
import Admin from './admin/Admin';
import CustomizedTables from './Dashboard/home';
import AdminLogin from './Dashboard/login/Multipleinputs'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
  <Routes>
    <Route  path="/" element={<App/>}></Route>
    <Route path='/gst_registration' element={<Gstregis_form/>}></Route>
    <Route path="/login" element={<Multipleinputs/>}></Route>
    <Route path="/createAccount" element={<Signup/>}></Route>
    <Route path="/gst_filling" element={<Gst_filing/>}></Route>
    <Route path="/services" element={<Services/>}></Route>
    <Route path="/compilance" element={<Compilance/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/trademark" element={<Trademark/>}></Route>
    <Route path="/gst" element={<Gst/>}></Route>
    <Route path="/registration" element={<Registration/>}></Route>
    <Route path="/adminpanel" element={<Admin/>}></Route>
    <Route path="/dashboard" element={<CustomizedTables/>}></Route>
    <Route path="/admin/login" element={<AdminLogin> </AdminLogin>}></Route>
  </Routes>
 </BrowserRouter>
);


