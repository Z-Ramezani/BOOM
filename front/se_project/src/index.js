import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App';
import Login from './Pages/login';
import Navbar from './components/navBar/navBar';
import Footer from './components/footer';

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<Footer/>);