import {Component} from 'react';
import Button from '../components/button';
import InputText from '../components/input_form';
import Breadcrumbb from '../components/breadcrumb';
import Navbar from '../components/navBar/navBar';
import Footer from '../components/Footer/footer';
import HorizontalLine from '../components/horizontalLine/horizontalLine';
import Resume from '../components/resume';
import ShowArtworkAdInfo from '../components/ArtworkAdInfo/showartworkAdInfo';
import x from "../assets/ig.jpg";

const ViewArtistProfile = (props) => {
    return (
        <div className='d-flex flex-column min-vh-100'>
            <Navbar/>
            <Breadcrumbb is3OrNot='true' first='صفحه اصلی' second='آگهی اثر' third='نمایش حساب کاربری هنرمند'/>
            <HorizontalLine value='اطلاعات فردی'/>
            <form style={{backgroundColor:'#F9FFFF'}}>
                <div className='container w-75 rounded'>
                    <div className='row justify-content-center'>
                        <div className="row g-0 position-relative" dir="LTR"  >
                            <div className="col-md-6 p-md-4">
                                    <img className="img-fluid" src={x}/*get the first img from back */ alt="profile image"  style={{blockSize: "10vw", maxWidth:'100%',maxHeight:'100%'}}/>
                                    <figcaption className="figure-caption" dir="RTL" style={{marginRight:'18.2vw',fontSize:'0.9vw'}} >
                                    تاریخ ثبت حساب کاربری: {/*recive from back*/}
                                    </figcaption>
                                </div>
                            <div className="col-md-6 p-4 ps-md-0" dir="RTL">
                                    <h5 className="mt-3" style={{fontSize:'1.1vw', fontWeight:'bold'}}>نام و نام‌خانوادگی: {/*recive from back*/}</h5>
                                    <h2 className="mt-3" style={{fontSize:'1.1vw', fontWeight:'bold'}}>سال تولد : {/*recive from back*/}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <HorizontalLine value='سوابق کاری'/>
            <div className='container w-75 p-3 my-1' style={{marginLeft:'10.5%'}} >
                <h2  style={{fontSize:'90%', fontWeight:'bold'}}>زمینه هنری: {/*recive from back*/}</h2>
                <h2 className='mt-3' style={{fontSize:'90%', fontWeight:'bold'}}>سبک‌ کاری: {/*recive from back*/}</h2>
                <h2 className='mt-3' style={{fontSize:'90%', fontWeight:'bold'}}> سابقه فعالیت: {/*recive from back*/}</h2>
            </div> 
            <HorizontalLine value='نمونه آثار'/>
            <div className='container w-75 p-3 shadow bg-white rounded mb-5'>
                <ShowArtworkAdInfo/>
            </div> 
            <Footer/>
        </div>                    
    );
}
 
export default ViewArtistProfile;

