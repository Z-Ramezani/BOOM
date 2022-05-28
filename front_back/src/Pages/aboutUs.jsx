import {Component} from 'react';
import Footer from '../components/Footer/footer';
import Navbar from '../components/navBar/navBar';
import Breadcrumbb from '../components/breadcrumb';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

import AboutUsMember from '../components/aboutUsMember';
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
                    <AboutUsMember/>                  
                    <p className='mt-5' style={{fontSize:'1vw'}}>راه‌های ارتباطی:</p>
                    <div className='d-flex text-center'>
                    <div className='mx-5' ><i class="bi bi-telephone-fill"></i>
                                <div className='me-1' style={{fontSize:'1.3vw'}}>2030 100 0913</div>
                            </div>
                            <div ><i class="bi bi-envelope-fill"></i>
                                <div className='me-1' style={{fontSize:'1.3vw'}}>Boom@yahoo.com</div>
                            </div>
                            </div>
                    </div>
                    <Footer/>
                </div>
            </div>
    );
}
export default AboutUs;