import logo from './logo.svg';
import './App.css';
import Home_navbar from './Home_navbar';
import { HomeSlider } from './slider/HomeSlider';
import Services from './Services';
import Gst from './gst/Gst';
import Registration from './registration/Registration';
import Trademark from './Trademark';
import Why_chooseus from './Why_chooseus';
import Info from './Info';
import Promises from './Promises';
import axios from 'axios'
import { useEffect } from 'react';
import Compilance from './Compilance';
import Contact from './contact/Contact';
import StickyHeadTable from './Dashboard/home';

function App() {



  return (
    <div className="App">
      <Home_navbar></Home_navbar>
      <HomeSlider></HomeSlider>
      <Why_chooseus></Why_chooseus>
      <Gst></Gst>
      <Registration></Registration>
     
      <Info></Info>
      <Trademark></Trademark>
      <Promises></Promises>
      <Compilance></Compilance>
      <Services></Services>
     <Contact></Contact>
    </div>
  );
}

export default App;
