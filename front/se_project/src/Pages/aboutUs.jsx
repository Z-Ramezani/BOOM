
import {Component} from 'react';
import Footer from '../components/Footer/footer';
import Navbar from '../components/navBar/navBar';
import Breadcrumbb from '../components/breadcrumb';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import x from "../assets/ig.jpg";
import a from "../assets/11.jpg";
import b from "../assets/11.jpg";
import c from "../assets/11.jpg";
const AboutUs = (props) => {
    return ( 
        <div>
            <Navbar/>
            <Breadcrumbb is1OrNot='true' first='درباره ما' />
            <div className='container w-75 p-3 mt-4'>
                <div className='d-flex flex-column min-vh-100'>
                    <h5><strong  style={{fontSize:'2vw',color:'#C70039'}}>جامعه جهانی هنرمندان و نقاشان بزرگترین دارایی ماست.</strong></h5>
                    <h6><strong className='me-2' style={{fontSize:'1.1vw',color:'#CC3737'}}>وقتی به بوم می‌پیوندید، به بازار هنر می‌پیوندید – دنیایی برای هنرمندان مستقل.</strong></h6>
                    <br/>
                    <h6 className='me-2' style={{fontSize:'1.1vw'}}>ما، گروهی از دانشجویان دانشگاه اصفهان دور هم جمع شده‌ایم تا واسطه شویم میان شما علاقمندان و هنرمندان.</h6>
                    
                    <div id="carouselExampleIndicators" className='carousel slide' data-bs-ride="carousel">
                        <div className='carousel-indicators'>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className='active' aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className='carousel-inner'>
                            <div className='carousel-item active'>
                                <div class="col-md-8">
                                    <img className="img-circle" src={x}  media-simple="true"style={{blockSize: "10vw", maxWidth:'100%',maxHeight:'100%'}}/>
                                    <div class="user_name mbr-bold pb-2 mbr-fonts-style display-7">
                                        Nourieh
                                    </div>
                                    <div class="user_desk mbr-light mbr-fonts-style display-7">
                                        DEVELOPER
                                    </div>
                                </div>
                            </div>
                            <div className='carousel-item'>
                                <div class="col-md-8">
                                    <img className="img-circle" src={x}  media-simple="true"style={{blockSize: "10vw", maxWidth:'100%',maxHeight:'100%'}}/>
                                    <div class="user_name mbr-bold pb-2 mbr-fonts-style display-7">
                                        dcsdcsdc
                                    </div>
                                    <div class="user_desk mbr-light mbr-fonts-style display-7">
                                        DEVELOPER
                                    </div>
                                </div>
                            </div>
                            <div className='carousel-item'>
                                <div class="col-md-8">
                                    <img className="img-circle" src={x}  media-simple="true"style={{blockSize: "10vw", maxWidth:'100%',maxHeight:'100%'}}/>
                                    <div class="user_name mbr-bold pb-2 mbr-fonts-style display-7">
                                        scljkdscksd
                                    </div>
                                    <div class="user_desk mbr-light mbr-fonts-style display-7">
                                        DEVELOPER
                                    </div>
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
                    <Footer/>
                </div>
            </div>
        </div>
    );
}
export default AboutUs;