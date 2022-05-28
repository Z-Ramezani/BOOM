import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App';
import Login from './Pages/login';
import BuyerSighUp from './Pages/buyerSignUp';
import ArtistSignUp from './Pages/artistSignUp';
import ArtworkAd from './Pages/artwokAd';
import Admin from './Pages/admin';
import ArtistProfile from './Pages/artistProfile';
import ViewArtistProfile from './Pages/viewArtistProfile';
import MainPage from './Pages/mainPage';
import TicketPart from './Pages/TicketPart';
// import HeaderSlide from './components/header-slide'
// import Navbar from './components/navBar/navBar';
// import Footer from './components/Footer/footer';
// import Breadcrumbb from './components/breadcrumb';
// import ArtistSignUp from './Pages/artistSignUp'
// import BuyerSighUp from './Pages/buyerSignUp'
// import Login from './Pages/login';
// import Guide from './Pages/guide';
// import TicketPart from './Pages/TicketPart';
// import Button from './components/button';
// import InputText from './components/input_form';
// import ResetButton from './components/resetButton';
// import ArtistProfile from './Pages/artistProfile';
// import Admin from './Pages/admin'; 
// import ArtworkAd from './Pages/artwokAd';
// import ViewArtistProfile from './Pages/viewArtistProfile';
// import ArtworkAdMainPage from './components/artworkAdMainPage';
// import MainPage from './Pages/mainPage';
// import UserInformation from './components/userInformation';
// import ExportProfile from './Pages/exportProfile';

// const cors = require('cors');
// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// App.use(cors(corsOptions));

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
