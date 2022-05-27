import {Component} from 'react';
import Button from '../components/button';
import Input_text from '../components/input_form';
import Breadcrumbb from '../components/breadcrumb';
import Navbar from '../components/navBar/navBar';
import Footer from '../components/Footer/footer';
import HorizontalLine from '../components/horizontalLine/horizontalLine';
import ExpertResume from '../components/expertResume';
import ShowArtworkAdCost from '../components/ArtworkAdInfo/showArtworkAdCost';
import x from "../assets/ig.jpg";

const ViewExpertProfile = (props) => {

    return (
        <div className='d-flex flex-column min-vh-100'>
            <Navbar/>
            <Breadcrumbb is3OrNot='true' first='صفحه اصلی' second='آگهی اثر' third='نمایش حساب کاربری کارشناس'/>
            <HorizontalLine value='اطلاعات فردی'/>
            <form style={{backgroundColor:'#F9FFFF'}}>
                <div className='container w-75 rounded'>
                    <div className='row justify-content-center'>
                        <div className="row position-relative" dir="LTR"  >
                            <div className="col-md-5 p-md-4">
                                    <img className="img-fluid" src={x}/*get the first img from back */ alt="profile image"  style={{blockSize: "9vw", maxWidth:'100%',maxHeight:'100%',marginLeft:'5vw'}}/>
                                    <figcaption className="figure-caption" dir="RTL" style={{marginRight:'9.5vw',fontSize:'0.9vw'}} >
                                    تاریخ ثبت حساب کاربری: {/*recive from back*/}
                                    </figcaption>
                                </div>
                            <div className="col-md-6 p-4 ps-md-0" dir="RTL" style={{marginLeft:'7.8%'}}>
                                    <h2 className="mt-3" style={{fontSize:'1.1vw', fontWeight:'bold'}}>نام و نام‌خانوادگی: {/*recive from back*/}</h2>
                                    <h2 className="mt-3" style={{fontSize:'1.1vw', fontWeight:'bold'}}>راه ارتباطی: {/*recive from back*/}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <HorizontalLine value='سوابق کاری'/>
            <div className='container w-75 p-3 my-1' style={{marginLeft:'10.5%'}} >
                <h2  style={{fontSize:'90%', fontWeight:'bold'}}>زمینه فعالیت : {/*recive from back*/}</h2>
                <h2 className='mt-3' placeholder='ماه' style={{fontSize:'90%', fontWeight:'bold'}}> سابقه فعالیت: {/*recive from back*/}</h2>

            </div> 
            <div className='container w-75 p-3 shadow bg-white rounded mb-5'>
                    <ShowArtworkAdCost showCost/>
                    <h2 className="mt-0 text-danger" style={{fontSize:'110%', fontWeight:'bold', }}> قیمت پیشنهادی کارشناس: {/*recive from back*/}</h2>
                    <h2 className="mt-0" style={{fontSize:'100%' }}>تومان {/*recive from back*/}</h2>

                    <br/>
                    <h2 className="mt-0 text-danger" style={{fontSize:'90%', fontWeight:'bold', }}> توضیحات: {/*recive from back*/}</h2>
            </div>  
            <Footer/>
        </div>                    
    );
}
 
export default ViewExpertProfile;