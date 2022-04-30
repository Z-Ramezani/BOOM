import {Component} from 'react';
import {BrowserRouter, BrowserRouter as Router, Route, Routes, Switch} from 'react-router-dom';
import Button from './components/button';
import 'bootstrap';
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
import Footer from './components/footer';
import ArtworkAd from './Pages/artwokAd';
import MainPage from './Pages/mainPage';
import HorizontalLine from './components/horizontalLine/horizontalLine';
import ArtworkAdAdditionalInfo from './components/artworkAdAdditionalInfo';
import ArtworkAdMainPage from './components/artworkAdMainPage';
import ArtworkGroup from './components/artworkGroup';
import ExportOpinion from './components/exportOpinion';
import HeaderSlide from './components/header-slide';
import ResetButton from './components/resetButton';
import Resume from './components/resume';
import UserInformation from './components/userInformation';
import NavBar from './components/navBar/navBar';
  

class App extends Component {
  render() { 

    return (
      
      <>
        {/* <AlertProvider template={AlertTemplate} {...Options}> */}
          <BrowserRouter>
            <Routes>
              {/* components */}
              <Route path='/horizontalLine/horizontalLine' element={<HorizontalLine/>}/>
              <Route path='/navBar/navBar' element={<NavBar/>}/>
              <Route path='/artworkAdAdditionalInfo' element={<ArtworkAdAdditionalInfo/>}/>
              <Route path='/artworkAdMainPage' element={<ArtworkAdMainPage/>}/>
              <Route path='/artworkGroup' element={<ArtworkGroup/>}/>
              <Route path='/breadcrumb' element={<Breadcrumbb/>}/>
              <Route path='/button' element={<Button/>}/>
              <Route path='/exportOpinion' element={<ExportOpinion/>}/>
              <Route path='/footer' element={<Footer/>}/>
              <Route path='/header-slide' element={<HeaderSlide/>}/>
              <Route path='/input_form' element={<Input_text/>}/>
              <Route path='/resetButton' element={<ResetButton/>}/>
              <Route path='/resume' element={<Resume/>}/>
              <Route path='/userInformation' element={<UserInformation/>}/>
              
              {/* Pages */}
              <Route index element={<MainPage/>}/>
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
              <Route path='/' Component={App}/>
            </Routes>
          </BrowserRouter>
        {/* </AlertProvider> */}
        
      </>
      
    );
  }
}
 
export default App;

