import {Component} from 'react';
import { useState } from 'react';
import Button from '../components/button';
import Breadcrumbb from '../components/breadcrumb';
import Navbar from '../components/navBar/navBar';
import Footer from '../components/Footer/footer';
import HorizontalLine from '../components/horizontalLine/horizontalLine';
import ExpertOpinion from '../components/expertOpinion';
import ShowArtworkAdCost from '../components/ArtworkAdInfo/showArtworkAdCost';
import CreateSubmitExpertOpinion from '../components/createSubmitExpertOpinion';


const ArtworkAd = (props) => {
    const [visibilityButton, setVisibilityButton] = useState("block");
    const [visibilityCost, setVisibilityCost] = useState("none");

    function showText(props) {
        setVisibilityButton("none");
        setVisibilityCost("block");
    }

        return (
            <div>
                <Navbar/>
                <Breadcrumbb is2OrNot='true' first='صفحه اصلی' second='آگهی اثر'/>
                <div className='d-flex flex-column min-vh-100'>
                    <div className='container w-75 p-3 shadow bg-white rounded mb-2'>
                        <ShowArtworkAdCost/>
                    </div>
                    <div className='container w-75 p-3 shadow bg-white rounded mb-5'>
                        <div className='row'>
                            <div className='col'>
                                <h2 class="mt-0" style={{fontSize:'1.2vw', fontWeight:'bold'}}>نام هنرمند : {/*recive from back*/}</h2>
                            </div>
                            <div className='col' style={{marginLeft:'32.8%'}}>
                                <Button width= 'auto' height= 'auto' text= 'مشاهده راه ارتباطی' dir='RTL' onClick={showText} fontSize='1.1vw'/>
                            </div>
                            <div className='col' >
                                <h2 class="mt-0" style={{fontSize:'1.2vw', fontWeight:'bold'}}>۰۹۱۳۰۰۰۰۰۰۰{/*recive from back*/}</h2>
                            </div>
                            <a className='nav-link' href='#' style={{fontSize:'0.8vw',color:'#BB1542'}} >مشاهده سابقه کاری هنرمند</a>
                        </div>
                    </div>
                    <HorizontalLine value='نظرات کارشناسان'/>
                    <div className='container w-75 p-3'>
                        <div className='shadow bg-white rounded'>
                            {/* اگر کاربر کارشناس بود نمایش داده شود */}
                            <CreateSubmitExpertOpinion/>
                        </div>    
                    </div>
                    <div className='container w-75 p-3'>
                        <div className='shadow bg-white rounded'>
                            <ExpertOpinion/>
                        </div>
                        
                        <a className='nav-link' href='#' style={{fontSize:'0.8vw',color:'#BB1542'}} >مشاهده همه نظرات</a>
                    </div>
                    <Footer/>
            </div>
        </div>
    );
}
 
export default ArtworkAd;