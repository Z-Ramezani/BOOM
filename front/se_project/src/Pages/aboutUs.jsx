
import {Component} from 'react';
import Footer from '../components/Footer/footer';
import Navbar from '../components/navBar/navBar';
import Breadcrumbb from '../components/breadcrumb';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import x from "../assets/ig.jpg";
const AboutUs = (props) => {
    return ( 
        <div>
            <Navbar/>
            <Breadcrumbb is1OrNot='true' first='درباره ما' />
            <div className='container w-75 p-3 mt-4'>
                <div className='d-flex flex-column min-vh-100'>
                <h5><strong  style={{fontSize:'120%',color:'#C70039'}}>جامعه جهانی هنرمندان و نقاشان بزرگترین دارایی ماست.</strong></h5>
                <h6><strong className='me-2' style={{fontSize:'90%',color:'#CC3737'}}>وقتی به بوم می‌پیوندید، به بازار هنر می‌پیوندید – دنیایی برای هنرمندان مستقل.</strong></h6>
                <br/>
                <h6 className='me-2' style={{fontSize:'90%'}}>ما، گروهی از دانشجویان دانشگاه اصفهان دور هم جمع شده‌ایم تا واسطه شویم میان شما علاقمندان و هنرمندان.</h6>
                {/* https://mobirise.com/bootstrap-template/about-us-page-template/
                هرکاری میکنم خروجی ندارم  :| */}
                                    {/* <section class="carousel slide" >
                                        <div class="container text-center">
                                            <div class="carousel slide" data-ride="carousel" role="listbox" id="testimonials-slider1-3-carousel">
                                                <div class="carousel-inner">
                                                    <div class="carousel-item">
                                                        <div class="user col-md-8">
                                                                <img className='user_image' src={x} alt="" title="" media-simple="true"/>
                                                            <div class="user_text pb-3">
                                                                <p class="mbr-fonts-style display-7">
                                                                    Good afternoon. I am very pleased with the quality of the work of your employee representing your wonderful company.
                                                                </p>
                                                            </div>
                                                            <div class="user_name mbr-bold pb-2 mbr-fonts-style display-7">
                                                                Helen
                                                            </div>
                                                            <div class="user_desk mbr-light mbr-fonts-style display-7">
                                                                DESIGNER
                                                            </div>
                                                        </div>
                                                    </div><div class="carousel-item">
                                                        <div class="user col-md-8">
                                                            <div class="user_image">
                                                                <img src={x} alt="" title="" media-simple="true"/>
                                                            </div>
                                                            <div class="user_text pb-3">
                                                                <p class="mbr-fonts-style display-7">
                                                                    All issues are resolved promptly. In communication, the employees are pleasant, helpful. Always offer new ideas, new ways to develop, improve our project.
                                                                </p>
                                                            </div>
                                                            <div class="user_name mbr-bold pb-2 mbr-fonts-style display-7">
                                                                Linda
                                                            </div>
                                                            <div class="user_desk mbr-light mbr-fonts-style display-7">
                                                                DEVELOPER
                                                            </div>
                                                        </div>
                                                    </div><div class="carousel-item active">
                                                        <div class="user col-md-8">
                                                            <div class="user_image">
                                                                <img src={x} alt="" title="" media-simple="true"/>
                                                            </div>
                                                            <div class="user_text pb-3">
                                                                <p class="mbr-fonts-style display-7">
                                                                    Excellent client manager. He is always accurate, all promises are fulfilled, all questions get answers, the company presents very attentive and positive approach.
                                                                </p>
                                                            </div>
                                                            <div class="user_name mbr-bold pb-2 mbr-fonts-style display-7">
                                                                Linda
                                                            </div>
                                                            <div class="user_desk mbr-light mbr-fonts-style display-7">
                                                                DEVELOPER
                                                            </div>
                                                        </div>
                                                    </div></div>

                                                <div class="carousel-controls">
                                                    <a class="carousel-control-prev" role="button" data-slide="prev" href="#testimonials-slider1-3-carousel">
                                                    <span aria-hidden="true" class="mbri-arrow-prev mbr-iconfont"></span>
                                                    <span class="sr-only">Previous</span>
                                                    </a>
                                                    
                                                    <a class="carousel-control-next" role="button" data-slide="next" href="#testimonials-slider1-3-carousel">
                                                    <span aria-hidden="true" class="mbri-arrow-next mbr-iconfont"></span>
                                                    <span class="sr-only">Next</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </section> */}
            </div>
        <Footer/>
        </div>
    </div>
    );
}
export default AboutUs;