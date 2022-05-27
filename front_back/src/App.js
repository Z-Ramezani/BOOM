import {Component} from 'react';
import {BrowserRouter, BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Button from './components/button';
import 'bootstrap';
import './components/navBar/navBar.css';
import Breadcrumbb from './components/breadcrumb';
import InputText from './components/input_form';
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
import ExportOpinion from './components/exportOpinion';
import HeaderSlide from './components/header-slide';
import ResetButton from './components/resetButton';
import Resume from './components/resume';
import UserInformation from './components/userInformation';
import NavBar from './components/navBar/navBar';
import ShowArtworkAdCost from './components/ArtworkAdInfo/showArtworkAdCost';
import axios from 'axios';

const url = 'http://hidden.pythonanywhere.com/users';

class App extends Component {

  state = {
    user: null,
  }

  componentDidMount=async()=>{
    const token = localStorage.getItem('token');
    if(!token){
      this.setState({user : null});
      return;
    }
    const res = await axios.post(url, {token});
    if(!res.data.user){
      this.setState({user : null});
      return;
    }
    this.setState({user: res.data.user});
  }

  render() { 
    return (
      <>
        {/* <AlertProvider template={AlertTemplate} {...Options}> */}
          <BrowserRouter>
            <Routes>
              {/* components */}
              <Route path='/horizontalLine/horizontalLine' element={<HorizontalLine/>}/>
              <Route path='/navBar' element={<NavBar/>}/>
              <Route path='/showArtworkAdCost' element={<ShowArtworkAdCost/>}/>
              <Route path='/artworkAdMainPage' element={<ArtworkAdMainPage/>}/>
              <Route path='/artworkGroup/:id' element={<ArtworkAd/>}/> {/*check this that is correctly work or no!!!!*/}
              <Route path='/artworkGroup' element={<ArtworkGroup/>}/>
              <Route path='/breadcrumb' element={<Breadcrumbb/>}/>
              <Route path='/button' element={<Button/>}/>
              <Route path='/exportOpinion' element={<ExportOpinion/>}/>
              <Route path='/footer' element={<Footer/>}/>
              <Route path='/header-slide' element={<HeaderSlide/>}/>
              <Route path='/input_form' element={<InputText/>}/>
              <Route path='/resetButton' element={<ResetButton/>}/>
              <Route path='/resume' element={<Resume/>}/>
              <Route path='/userInformation' element={<UserInformation/>}/>
              


              {/* Pages */}
              <Route index element={<MainPage/>}/>
              <Route path='/admin' element={<Admin/>}/>
              <Route path='/artistProfile' element={<ArtistProfile/>}/>
              <Route path='/artistSignUp' element={<ArtistSignUp/>}/>
              {/* <Route path="/artworkAd" element={<ArtworkAd/>}/> */}
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

