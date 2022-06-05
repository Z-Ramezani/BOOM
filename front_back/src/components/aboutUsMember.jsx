import  { Component } from 'react';
import MH from "../assets/2.png";
import NM from "../assets/6.png"
import AA from "../assets/5.png"
import MB from "../assets/3.png"
import AN from "../assets/7.png"
import ZR from "../assets/1.png"
import MS from "../assets/4.png"
import CarouselItemss from './carouselItemss';

const AboutUsMember = (props) => {
    return (
        <div>
            <div className='container w-25 text-center mt-5'>
                <div id="carouselExampleIndicators" className='carousel slide' data-bs-ride="carousel">
                    <div className='carousel-inner'>
                        <div className='carousel-item active'>
                            <div class="row d-flex justify-content-center">
                                <CarouselItemss src={MH} textone='محمدحسین هوشمند' texttwo='BackEnd'/>                                       
                            </div>
                        </div>
                        <div className='carousel-item'>
                            <div class="row d-flex justify-content-center">
                                <CarouselItemss src={AA} textone='علی عباس ملایی' texttwo='BackEnd'/>                                       
                            </div>
                        </div>
                        
                        <div className='carousel-item'>
                            <div class="row d-flex justify-content-center">
                                <CarouselItemss src={MB} textone='میکائیل باقرلی' texttwo='BackEnd'/>                                       
                            </div>
                        </div>
                        <div className='carousel-item'>
                            <div class="row d-flex justify-content-center">
                                <CarouselItemss src={NM} textone='نوریه سادات مدنیان' texttwo='FrontEnd'/>
                            </div>
                        </div>
                        
                        <div className='carousel-item'>
                            <div class="row d-flex justify-content-center">
                                <CarouselItemss src={MS} textone='مریم شفیع‌زادگان' texttwo='FrontEnd'/>
                            </div>
                        </div>
                        <div className='carousel-item'>
                            <div class="row d-flex justify-content-center">
                                <CarouselItemss src={ZR} textone='زهرا رمضانی' texttwo='FrontEnd'/>
                            </div>
                        </div>
                        <div className='carousel-item'>
                            <div class="row d-flex justify-content-center">
                                <CarouselItemss src={AN} textone='علی نریمانی' texttwo='FrontEnd'/>
                            </div>
                        </div>
                    </div>
                    <button className='carousel-control-prev' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className='carousel-control-prev-icon' aria-hidden="true"></span>
                        <span className='visually-hidden'>Previous</span>
                    </button>
                    <button className='carousel-control-next' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className='carousel-control-next-icon' aria-hidden="true"></span>
                        <span className='visually-hidden'>Next</span>
                    </button>
                </div>
            </div>
        </div>
      );
}
 
export default AboutUsMember;