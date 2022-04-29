import {Component} from 'react';
import {BrowserRouter, BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';
import Button from './components/button';
import headerSlide from './components/header-slide';
import 'bootstrap';
import logo from './assets/logo.png';
import './components/navBar/navBar.css';
import Breadcrumbb from './components/breadcrumb';
import Input_text from './components/input_form';
import Guide from './Pages/guide';
import Login from './Pages/login';
import ArtistSignUp from './Pages/artistSignUp';
import ArtistProfile from './Pages/artistProfile';
import Admin from './Pages/admin';
import BuyerSighUp from './Pages/buyerSignUp';
import TicketPart from './Pages/TicketPart';
import ViewArtistProfile from './Pages/viewArtistProfile';
import navBar from './components/navBar/navBar'
import Footer from './components/footer';
import ArtworkAd from './Pages/artwokAd';
  

class App extends Component {
  render() { 

    return (
      //  <div className='container mt-3'>
      //    <BrowserRouter>
      //    <Routes>
      //  <Route path='/' Component={App}/>
      //  <Route path='/guide' Component={Guide}/>
      //  <Route path='/login' Component={Login}/>
      //  <Route path='/artistSignUp' Component={ArtistSignUp}/>
      //  <Route path='/artistProfile' Component={ArtistProfile}/>
 
      //  <Route path='/buyerSignUp' Component={BuyerSighUp}/>
      //  <Route path='/ticketPart' Component={TicketPart}/>
      //  <Route path='/viewArtistProfile' Component={ViewArtistProfile}/>
      //  </Routes>
      //  </BrowserRouter>
      //  </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Admin />}>
            <Route index element={<Guide />} />
            <Route path="login" element={<Login />} />
            <Route path="artworkAd" element={<ArtworkAd />} />
            <Route path='/artistProfile' Component={ArtistProfile}/>
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
 
export default App;

