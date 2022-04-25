import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App';
import HeaderSlide from './components/header-slide'
import Navbar from './components/navBar/navBar';
import Footer from './components/footer';
import Breadcrumbb from './components/breadcrumb';
import ExpertOpinion from './components/expertOpinion'
import ArtistSignUp from './Pages/artistSignUp'
import BuyerSighUp from './Pages/buyerSignUp'
import Login from './Pages/login';
import Guide from './Pages/guide';
import ArtistProfile from './Pages/artistProfile';
import HorizontalLine from './components/horizontalLine/horizontalLine';

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<HorizontalLine/>);
