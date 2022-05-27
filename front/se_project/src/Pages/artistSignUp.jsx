import {Component} from 'react';
import { useState } from 'react';
import Button from '../components/button';
import Input_text from '../components/input_form';
import Breadcrumbb from '../components/breadcrumb';
import Navbar from '../components/navBar/navBar';
import Footer from '../components/Footer/footer';
import ResetButton from '../components/resetButton';


const ArtistSignUp = (props) => {

    const [names, setNames]=useState("");
    const [codeNumber, setcodeNumber]=useState("");
    const [birthay, setBirthay]=useState("");
    const [phone, setPhone]=useState("");
    const [email, setEmail]=useState("");
    const [address, setAddress]=useState("");
    const [password, setPassword]=useState("");
    //const [gender, setGender]=useState("");
    const [showNumber, setShowNumber]=useState("");

    return ( 
        <div>
            <Navbar/>
            <Breadcrumbb is3OrNot='true' first='صفحه اصلی' second='ثبت‌نام ' third='به عنوان هنرمند یا کارشناس'/>
            <div className='d-flex flex-column min-vh-100'>
                <form style={{marginTop: 'auto'}}>
                    <div className='container w-75 p-3 shadow p-3 mb-5 bg-white rounded mt-4' >
                        <div className='row justify-content-center' >
                            <div>  
                                <div className='row mb-2'>
                                    <div class='col row '>
                                        <label className='col-4 col-form-label' style={{fontSize:'1.1vw'}}>نام و نام‌خانوادگی</label>
                                        <div className='col-8'> 
                                            <Input_text type="text" value={names} onChange={(e)=>setNames(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className='col row'>
                                        <label className="col-sm-3 col-form-label mx-auto" style={{fontSize:'1.1vw'}}>کدملی</label>
                                        <div className="col-8">
                                            <Input_text type="text" value={codeNumber} onChange={(e)=>setcodeNumber(e.target.value)}/>
                                        </div>
                                    </div>
                                </div>

                                <div className='row mb-2'>
                                    <div class="col row ">
                                        <label  class="col-4 col-form-label" style={{fontSize:'1.1vw'}}>سال تولد</label>
                                        <div class="col-8">
                                            <Input_text type="date" value={birthay} onChange={(e)=>setBirthay(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className='col row'>
                                        <label className="col-sm-3 col-form-label mx-auto" style={{fontSize:'1.1vw'}}>شماره تماس</label>
                                        <div className="col-8">
                                            <Input_text type="text" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                                        </div>
                                    </div>
                                </div>

                                <div className='row '>
                                    <div className="row col">
                                        <label  class="col-sm-4 col-form-label" style={{fontSize:'1.1vw'}}>ایمیل</label>
                                        <div class="col-8">
                                            <Input_text type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                        </div>
                                    </div>

                                    <div class="row col ">
                                        <label  class="col-sm-3 col-form-label  mx-auto" style={{fontSize:'1.1vw'}}>راه ارتباطی جهت نمایش در آگهی</label>
                                        <div class="col-8">
                                            <Input_text type="text" value={showNumber} onChange={(e)=>setShowNumber(e.target.value)}/>
                                        </div>
                                    </div>
                                </div>

                                <div className='row mb-2'>
                                    <div class="row col">
                                        <label  class="col-sm-3 col-form-label" style={{fontSize:'1.1vw'}}>آدرس</label>
                                        <div class="col-12 me-4">
                                            <Input_text type="text" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                                        </div>
                                    </div>
                                </div>

                                <div className='row mb-2'>
                                    <div class="row col">
                                        <label class="col-sm-4 col-form-label" style={{fontSize:'1.1vw'}}>رمز عبور</label>
                                        <div class="col-8">
                                            <Input_text type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div class="row col">
                                        <label class="col-sm-3 col-form-label  mx-auto" style={{fontSize:'1.1vw'}}>تکرار رمز عبور</label>
                                        <div class="col-8">
                                            <Input_text type="password"/>
                                        </div>
                                    </div>
                                </div>
                                        
                                <div className='row mb-2 '>
                                    <fieldset class="row">
                                        <label class="col-form-label col-sm-2" style={{fontSize:'1.1vw'}}>جنسیت</label>
                                        <div class="d-flex col mt-2" required>
                                            <div class="form-check">
                                                <label class="form-check-label" style={{fontSize:'1.1vw'}}>زن</label>
                                                <input class="justify-content-right form-check-input" type="radio" name='gridRadios'/>
                                            </div>
                                            <div class="form-check">
                                                <label class="form-check-label me-5" style={{fontSize:'1.1vw'}}>مرد</label>
                                                    <input class="justify-content-right form-check-input" type="radio" name='gridRadios'/>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>      
                            </div>
                        </div>
                    </div>
                
                    <div className='container w-75 p-3 mb-4' >
                        <div className='justify-content-center mt-0 mx-0' >
                            <div className='d-flex'>
                                <div className='mx-1'>
                                    <ResetButton/>
                                </div>
                                <div className='mx-1'>
                                    <Button width= 'auto' height= 'auto' text= 'ثبت‌نام به عنوان هنرمند' fontSize='1.17vw'/>
                                </div> 
                                <div className='mx-1 '>
                                    <Button width= 'auto' height= 'auto' text= 'ثبت‌نام به عنوان کارشناس' fontSize='1.17vw'/>
                                </div>
                            </div>   
                        </div>
                    </div>
                </form>
            <Footer/>
            </div>     
        </div> 
     );
}
 
export default ArtistSignUp;