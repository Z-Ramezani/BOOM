import {Component} from 'react';
import Button from '../components/button';
import Breadcrumbb from '../components/breadcrumb';
import Navbar from '../components/navBar/navBar';
import Footer from '../components/Footer/footer';
import HorizontalLine from '../components/horizontalLine/horizontalLine';
import UserInformation from '../components/userInformation';
import ExpertResume from '../components/expertResume';
import ShowArtworkAdCost from '../components/ArtworkAdInfo/showArtworkAdCost';


class ExpertProfile extends Component {
    state = {  } 
    render() { 
        return (
            <div className='d-flex flex-column min-vh-100'>
                <Navbar/>
                <Breadcrumbb is1OrNot='true' first='حساب کاربری'/>
                <UserInformation/>
                <HorizontalLine value='سوابق کاری'/>
                <ExpertResume/>
                <div className='container w-75 p-3 shadow bg-white rounded mb-5'>
                    <ShowArtworkAdCost/>
                    <h2 class="mt-0 text-danger" style={{fontSize:'1.3vw', fontWeight:'bold', }}> قیمت پیشنهادی کارشناس: {/*recive from back*/}</h2>
                    <br/>
                    <h2 class="mt-0 text-danger" style={{fontSize:'1.1vw', fontWeight:'bold', }}> توضیحات: {/*recive from back*/}</h2>
                </div>
            </div>
        );
    }
}
 
export default ExpertProfile;