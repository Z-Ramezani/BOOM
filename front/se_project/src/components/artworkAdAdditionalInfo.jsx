import { Component } from "react";
import Input_text from "./input_form";
import a from "../assets/ig.jpg";
import b from "../assets/ig.jpg";
import c from "../assets/ig.jpg";
import d from "../assets/ig.jpg";
import e from "../assets/ig.jpg";

class ArtworkAdAdditionalInfo extends Component {
    state = {  } 
    render() { 
        const {names, setNames}=this.setState;
        const {size, setSize}=this.setState;
        const {method, setMethod}=this.setState;
        const {material, setMaterial}=this.setState;
        const {date, setDate}=this.setState;
        const {cost, setCost}=this.setState;
        return (
            <div className="">
                <div class="row g-0 position-relative" dir="LTR">
                    <div class="col-md-6 mb-md-0 p-md-4">{
                        this.props.showImages ?
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
                        :<form>
                            <div class="form-group" style={{width:'23vw', height:'23vw', border:'0.11vw solid #e1e1e1', borderRadius:'0.2vw'}}>
                                <input type="file" class="form-control-file"/>
                            </div>
                      </form>
                    }  
                    </div>

                    <div class="col-md-6 p-4 ps-md-0" dir="RTL">{
                        /*for just show informations:   */
                        this.props.showText ? 
                            <div>
                                <h2 class="mt-0" style={{fontSize:'1.2vw', fontWeight:'bold'}}>نام اثر: {/*recive from back*/}</h2>
                                <br/>
                                <h2 class="mt-0" style={{fontSize:'1.2vw', fontWeight:'bold'}}>ابعاد اثر: {/*recive from back*/}*{/*recive from back*/} سانتی متر</h2>
                                <br/>
                                <h2 class="mt-0" style={{fontSize:'1.2vw', fontWeight:'bold'}}>سبک کار: {/*recive from back*/}</h2>
                                <br/>
                                <h2 class="mt-0" style={{fontSize:'1.2vw', fontWeight:'bold'}}>متریال استفاده شده: {/*recive from back*/}</h2>
                                <br/>
                                <h2 class="mt-0" style={{fontSize:'1.2vw', fontWeight:'bold'}}>تاریخ ایجاد اثر: {/*recive from back*/}</h2>
                                <br/>
                                <div>{
                                        this.props.showCostText ?
                                            <h2 class="mt-0" dir="RTL" style={{fontSize:'1.2vw', fontWeight:'bold'}}>{/*recive from back*/} قیمت:</h2>
                                        : <div></div>
                                    }
                                </div>
                                
                                <br/>
                                <h2 class="mt-0" style={{fontSize:'1.2vw', fontWeight:'bold'}}>توضیحات تکمیلی: {/*recive from back*/}</h2>
                            </div>
                        /*for fill inputs:  */ 
                        :<div className='row justify-content-center'>

                                <div className='row mb-2'>     
                                    <div class='col row '>
                                        <label className='col-4 col-form-label'>نام اثر</label>
                                        <div className='col-8'> 
                                            <Input_text type="text" value={names} onChange={(e)=>setNames(e.target.value)}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='row mb-2'>     
                                    <div class='col row '>
                                        <label className='col-4 col-form-label'>ابعاد اثر</label>
                                        <div className='col-8'> 
                                            <Input_text type="text" placeholder='80*50 سانتی‌متر' value={size} onChange={(e)=>setSize(e.target.value)}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='row mb-2'>     
                                    <div class='col row '>
                                        <label className='col-4 col-form-label'>سبک کار</label>
                                        <div className='col-8'> 
                                            <Input_text type="text" value={method} onChange={(e)=>setMethod(e.target.value)}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='row mb-2'>     
                                    <div class='col row '>
                                        <label className='col-4 col-form-label'>متریال استفاده شده</label>
                                        <div className='col-8'> 
                                            <Input_text type="text" value={material} onChange={(e)=>setMaterial(e.target.value)}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='row mb-2'>     
                                    <div class='col row'>
                                        <label className='col-4 col-form-label'>تاریخ ایجاد اثر</label>
                                        <div className='col-8'> 
                                            <Input_text type="date" value={date} onChange={(e)=>setDate(e.target.value)}/>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-2 form-group">
                                    <label for="exampleFormControlTextarea1" style={{marginBottom:'2%'}}>توضیحات تکمیلی</label>
                                    <textarea class="col-4 form-control" id="exampleFormControlTextarea1" rows="3" style={{width:'85%',marginRight:'7%'}}></textarea>
                                </div>
                                
                                <div>{
                                    this.props.showCostInput ?
                                        <div className='row mb-2'>     
                                            <div class='col row'>
                                                <label className='col-4 col-form-label' style={{marginRight:'0%',marginLeft:'-0.1vw'}}>قیمت</label>
                                                <div className='col-8'style={{width:'64%'}}> 
                                                    <Input_text type="text" placeholder='تومان' value={cost} onChange={(e)=>setCost(e.target.value)}/>
                                                </div>
                                            </div>
                                        </div>
                                        :<div></div>
                                    }
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default ArtworkAdAdditionalInfo;