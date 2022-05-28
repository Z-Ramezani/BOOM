import {Component} from 'react';
import {BrowserRouter, BrowserRouter as Router, Link, NavLink, Route, Routes, Switch} from 'react-router-dom';
import 'bootstrap';
import './components/navBar/navLinks.css';
import Button from './components/button';
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
import Footer from './components/Footer/footer';
import ArtworkAd from './Pages/artwokAd';
import MainPage from './Pages/mainPage';
import HorizontalLine from './components/horizontalLine/horizontalLine';
import ArtworkAdMainPage from './components/artworkAdMainPage';
import ArtworkGroup from './components/artworkGroup';
import ExpertOpinion from './components/expertOpinion';
import HeaderSlide from './components/header-slide';
import ResetButton from './components/resetButton';
import Resume from './components/resume';
import UserInformation from './components/userInformation';
import NavBar from './components/navBar/navBar';
import NavLinks from './components/navBar/navLinks';
import ShowArtworkAdCost from './components/ArtworkAdInfo/showArtworkAdCost';
import ExpertProfile from './Pages/expertProfile';
import ViewExpertProfile from './Pages/viewExpertProfile';
import Logout from './components/logout';
import AboutUs from './Pages/aboutUs';
import axios from 'axios';

const url = 'http://hidden.pythonanywhere.com/users';

const App = () => {
  return ( 
    <BrowserRouter>
            <Routes>
              {/* <Route exact path='/' exact element={<MainPage />} /> */}
              <Route index element={<MainPage/>}/>

              {/* components */}
              <Route path='/horizontalLine/horizontalLine' element={<HorizontalLine/>}/>
              <Route path='/navBar/navBar' element={<NavBar/>}/>
              <Route path='/navBar/navLink' element={<navLink/>}/>
              <Route path='/navBar/navLinks' element={<NavLinks/>}/>
              <Route path='/showArtworkAdCost' element={<ShowArtworkAdCost/>}/>
              <Route path='/artworkAdMainPage' element={<ArtworkAdMainPage/>}/>
              <Route path='/artworkGroup' element={<ArtworkGroup/>}/>
              <Route path='/breadcrumb' element={<Breadcrumbb/>}/>
              <Route path='/button' element={<Button/>}/>
              <Route path='/expertOpinion' element={<ExpertOpinion/>}/>
              <Route path='/footer' element={<Footer/>}/>
              <Route path='/header-slide' element={<HeaderSlide/>}/>
              <Route path='/input_form' element={<Input_text/>}/>
              <Route path='/resetButton' element={<ResetButton/>}/>
              <Route path='/resume' element={<Resume/>}/>
              <Route path='/userInformation' element={<UserInformation/>}/>
              <Route path='/logout' element={<Logout/>}/>
              
              {/* Pages */}
              <Route path='/admin' element={<Admin/>}/>
              <Route path='/artistProfile' element={<ArtistProfile/>}/>
              <Route path='/artistSignUp' element={<ArtistSignUp/>}/>
              <Route path="/artworkAd" element={<ArtworkAd/>}/>
              <Route path='/buyerSignUp' element={<BuyerSighUp/>}/>
              <Route path='/guide' element={<Guide/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/mainPage' element={<MainPage/>}/>
              <Route path='/TicketPart' element={<TicketPart/>}/>
              <Route path='/viewArtistProfile' element={<ViewArtistProfile/>}/>
              <Route path='/expertProfile' element={<ExpertProfile/>}/>
              <Route path='/viewExpertProfile' element={<ViewExpertProfile/>}/>
              <Route path='/AboutUs' element={<AboutUs/>}/>

              <Route path='/' Component={App}/>
            </Routes>
          </BrowserRouter>
   );
}
 
export default App;
  // componentDidMount=async()=>{
  //   const token = localStorage.getItem('token');
  //   if(!token){
  //     this.setState({user : null});
  //     return;
  //   }
  //   const res = await axios.post(url, {token});
  //   if(!res.data.user){
  //     this.setState({user : null});
  //     return;
  //   }
  //   this.setState({user: res.data.user});
  // }