import { Component } from 'react';
import a from "../../assets/11.jpg";
import b from "../../assets/11.jpg";
import c from "../../assets/11.jpg";
import d from "../../assets/11.jpg";
import e from "../../assets/11.jpg";
const ShowArtworkAdCost = (props) => {
    return (
        <div className="">
            <div class="row g-0 position-relative" dir="LTR">
                <div class="col-md-6 mb-md-0 p-md-4">
                        <div id="carouselExampleIndicators" className='carousel slide' data-bs-ride="carousel">
                            <div className='carousel-indicators'>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className='active' aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            </div>
                            <div className='carousel-inner'>
                                <div className='carousel-item active'>
                                    <img src={a} className='d-block w-100' alt="img1" style={{width:'30vw', height:'30vw'}}/>
                                </div>
                                <div className='carousel-item'>
                                    <img src={b} className='d-block w-100' alt="img2" style={{width:'30vw', height:'30vw'}}/>
                                </div>
                                <div className='carousel-item'>
                                    <img src={c} className='d-block w-100' alt="img3" style={{width:'30vw', height:'30vw'}}/>
                                </div>
                                <div className='carousel-item'>
                                    <img src={d} className='d-block w-100' alt="img4" style={{width:'30vw', height:'30vw'}}/>
                                </div>
                                <div className='carousel-item'>
                                    <img src={e} className='d-block w-100' alt="img5" style={{width:'30vw', height:'30vw'}}/>
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
                

                <div class="col-md-6 p-4 ps-md-0" dir="RTL">
                    <div>
                        <h2 class="mt-0" style={{fontSize:'1.1vw', fontWeight:'bold'}}>نام اثر: {/*recive from back*/}</h2>
                        <br/>
                        <h2 class="mt-0" style={{fontSize:'1.1vw', fontWeight:'bold'}}>ابعاد اثر: {/*recive from back*/}*{/*recive from back*/} سانتی متر</h2>
                        <br/>
                        <h2 class="mt-0" style={{fontSize:'1.1vw', fontWeight:'bold'}}>سبک کار: {/*recive from back*/}</h2>
                        <br/>
                        <h2 class="mt-0" style={{fontSize:'1.1vw', fontWeight:'bold'}}>متریال استفاده شده: {/*recive from back*/}</h2>
                        <br/>
                        <h2 class="mt-0" style={{fontSize:'1.1vw', fontWeight:'bold'}}>تاریخ ایجاد اثر: {/*recive from back*/}</h2>
                        <br/>
                        {
                        props.ShowCost ?
                            <div>
                                <h2 class="mt-0" dir="RTL" style={{fontSize:'1.1vw', fontWeight:'bold'}}>{/*recive from back*/} قیمت:</h2>
                            </div>
                            :
                            <div></div>
                         }
                        
                        <br/>
                        <h2 class="mt-0" style={{fontSize:'1.1vw', fontWeight:'bold'}}>توضیحات تکمیلی: {/*recive from back*/}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

 
export default ShowArtworkAdCost;