import { Component } from "react";
import a from "../assets/ig.jpg";
import b from "../assets/ig.jpg";
import c from "../assets/ig.jpg";
import d from "../assets/ig.jpg";
import e from "../assets/ig.jpg";

class ArtworkAdAdditionalInfo extends Component {
    showCost=()=>{
        this.setState({text: '999.000 تومان'});
    }
    state = { 
        text: 'نمایش قیمت اثر'
     } 
    render() { 
        return (
            <div className="container w-75 p-3 shadow mb-5 rounded">
                <div class="row g-0 position-relative" dir="LTR">
                    <div class="col-md-6 mb-md-0 p-md-4">
                        {/* images for artWork */}
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
                                    <img src={a} className='d-block w-100' alt="j1" style={{width:'543px', height:'543px'}}/>
                                </div>
                                <div className='carousel-item'>
                                    <img src={b} className='d-block w-100' alt="j2" style={{width:'543px', height:'543px'}}/>
                                </div>
                                <div className='carousel-item'>
                                    <img src={c} className='d-block w-100' alt="j3" style={{width:'543px', height:'543px'}}/>
                                </div>
                                <div className='carousel-item'>
                                    <img src={d} className='d-block w-100' alt="j4" style={{width:'543px', height:'543px'}}/>
                                </div>
                                <div className='carousel-item'>
                                    <img src={e} className='d-block w-100' alt="j5" style={{width:'543px', height:'543px'}}/>
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
                        <h2 class="mt-0" style={{fontSize:'18px', fontWeight:'bold'}}>نام اثر: {}</h2>
                        <br/>
                        <h2 class="mt-0" style={{fontSize:'18px', fontWeight:'bold'}}>ابعاد اثر: {}*{} سانتی متر</h2>
                        <br/>
                        <h2 class="mt-0" style={{fontSize:'18px', fontWeight:'bold'}}>سبک کار: {}</h2>
                        <br/>
                        <h2 class="mt-0" style={{fontSize:'18px', fontWeight:'bold'}}>متریال استفاده شده: {}</h2>
                        <br/>
                        <h2 class="mt-0" style={{fontSize:'18px', fontWeight:'bold'}}>تاریخ ایجاد اثر: {}</h2>
                        <br/>
                        <button onClick={this.showCost} className="btn btn-primary" type="button" style={{width:'auto', height:'auto', fonotSize:'18px', backgroundColor:'#BB1542', borderColor:'#BB1542'}}>{this.state.text}</button>
                        <br/>
                        <br/>
                        <h2 class="mt-0" style={{fontSize:'18px', fontWeight:'bold'}}>توضیحات تکمیلی: {}</h2>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ArtworkAdAdditionalInfo;