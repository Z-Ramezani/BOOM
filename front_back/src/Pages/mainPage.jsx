import {Component} from 'react';
// import axios from 'axios';
import Navbar from '../components/navBar/navBar';
import Breadcrumbb from '../components/breadcrumb';
import Footer from '../components/Footer/footer';
import ArtworkGroup from '../components/artworkGroup';
import HeaderSlide from '../components/header-slide';
import { MDBInput, MDBCol } from "mdbreact";

function getToken() {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  }
class MainPage extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Navbar/>
                <HeaderSlide/>
                <Breadcrumbb is1OrNot='true' first='صفحه اصلی'/>
                <div className='d-flex flex-column min-vh-100'>
                    <div className='container w-75 p-3'>
                        <MDBCol md="6">
                            <MDBInput hint="Search" type="text" containerClass="mt-0" />
                        </MDBCol>
                        <ArtworkGroup/>
                    </div>
                    <Footer/>
                </div>
            </div>
        );
    }
}
 
export default MainPage;