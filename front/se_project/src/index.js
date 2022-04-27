import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
import 'bootstrap';
import App from './App';
import Login from './Pages/login';
import Navbar from './components/navBar/navBar';
import Footer from './components/footer';
import Breadcrumbb from './components/breadcrumb';
import ArtistSignUp from './Pages/artist_sign_up';

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<Login/>);