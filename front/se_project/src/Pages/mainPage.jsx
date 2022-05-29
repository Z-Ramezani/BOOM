import {Component} from 'react';
// import axios from 'axios';
import Navbar from '../components/navBar/navBar';
import Breadcrumbb from '../components/breadcrumb';
import Footer from '../components/Footer/footer';
import ArtworkGroup from '../components/artworkGroup';
import HeaderSlide from '../components/header-slide';

const MainPage = (props) => {
    return ( 
        <div>
            <Navbar/>
            <HeaderSlide/>
            <Breadcrumbb is1OrNot='true' first='صفحه اصلی'/>
            <div className="input-group rounded">
  <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <span className="input-group-text border-0" id="search-addon">
    <i className="fas fa-search"></i>
  </span>
</div>
            <div className='d-flex flex-column min-vh-100'>
                <div className='container w-75 p-3'>
               
                    <ArtworkGroup/>
                    <ArtworkGroup/>
                    <ArtworkGroup/>
                </div>
                <Footer/>
            </div>
        </div>
     );
}
 
export default MainPage;