import {Component} from 'react';
import Button from '../components/button';
import Input_text from '../components/input_form';
import Breadcrumbb from '../components/breadcrumb';
import Navbar from '../components/navBar/navBar';
import Footer from '../components/footer';
import ResetButton from '../components/resetButton';

class ArtistSignUp extends Component {
  render() { 
    const {names, setNames}=this.setState;
    const {codeNumber, setcodeNumber}=this.setState;
    const {birthay, setBirthay}=this.setState;
    const {phone, setPhone}=this.setState;
    const {email, setEmail}=this.setState;
    const {address, setAddress}=this.setState;
    const {password, setPassword}=this.setState;
    const {gender, setGender}=this.setState;
    const {showNumber, setShowNumber}=this.setState;


    return (
        <div>
            <Navbar/>
            <Breadcrumbb is3OrNot='true' first='صفحه اصلی' second='ثبت‌نام ' third='به عنوان هنرمند یا کارشناس'/>
            <form>
            <div className='container w-75 p-3 shadow p-3 bg-white rounded mb-5' >
                 <div className='row justify-content-center' >
                      <div>  
                               <div className='row mb-2'>
                                        <div class='col row '>
                                            <label className='col-4 col-form-label'>نام و نام‌خانوادگی</label>
                                            <div className='col-8'> 
                                                <Input_text type="text" value={names} onChange={(e)=>setNames(e.target.value)}/>
                                            </div>
                                        </div>
                                        <div className='col row'>
                                            <label className="col-sm-3 col-form-label mx-auto">کدملی</label>
                                            <div className="col-8">
                                                <Input_text type="text" value={codeNumber} onChange={(e)=>setcodeNumber(e.target.value)}/>
                                            </div>
                                        </div>
                                </div>

                                <div className='row mb-2'>
                                        <div class="col row ">
                                            <label  class="col-4 col-form-label ">سال تولد</label>
                                            <div class="col-8">
                                                <Input_text type="date" value={birthay} onChange={(e)=>setBirthay(e.target.value)}/>
                                            </div>
                                        </div>
                                        <div className='col row'>
                                            <label className="col-sm-3 col-form-label mx-auto">شماره تماس</label>
                                            <div className="col-8">
                                                <Input_text type="text" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                                            </div>
                                        </div>
                                </div>

                                <div className='row '>
                                        <div className="row col">
                                            <label  class="col-sm-4 col-form-label">ایمیل</label>
                                            <div class="col-8">
                                            <Input_text type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                            </div>
                                        </div>

                                        <div class="row col ">
                                            <label  class="col-sm-3 col-form-label  mx-auto">راه ارتباطی جهت نمایش در آگهی</label>
                                            <div class="col-8">
                                                <Input_text type="text" value={showNumber} onChange={(e)=>setShowNumber(e.target.value)}/>
                                            </div>
                                        </div>
                                </div>

                                <div className='row mb-2'>
                                <div class="row col">
                                    <label  class="col-sm-3 col-form-label ">آدرس</label>
                                    <div class="col-12 me-4">
                                        <Input_text type="text" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                                    </div>
                                </div>
                                
                                </div>

                                <div className='row mb-2'>
                                <div class="row col">
                                    <label class="col-sm-4 col-form-label">رمز عبور</label>
                                    <div class="col-8">
                                        <Input_text type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                    </div>
                                </div>
                                <div class="row col">
                                    <label class="col-sm-3 col-form-label  mx-auto">تکرار رمز عبور</label>
                                    <div class="col-8">
                                        <Input_text type="password"/>
                                    </div>
                                </div>
                                </div>
                                
                                <div className='row mb-2 '>
                                    <fieldset class="row">
                                    <label class="col-form-label col-sm-2">جنسیت</label>
                                    <div class="d-flex col mt-2" required>
                                        <div class="form-check">
                                             <label class="form-check-label">زن</label>
                                             <input class="justify-content-right form-check-input" type="radio" name='gridRadios'  checked/>
                                        </div>
                                        <div class="form-check">
                                        <label class="form-check-label me-5">مرد</label>
                                            <input class="justify-content-right form-check-input" type="radio" name='gridRadios'/>
                                        </div>
                                    </div>
                                    </fieldset>
                                </div>

                            
                      </div>
                  </div>
            </div>
            
            <div className='container w-75 p-0 mb-4' >
                 <div className='justify-content-center mt-0 mx-0' >
                                <div className='d-flex'>
                                    <div className='mx-1'>
                                        <ResetButton/>
                                    </div>
                                    <div className='mx-1'>
                                        <Button width= 'auto' height= 'auto' text= 'ثبت‌نام به عنوان هنرمند' fontSize='18px' /*reference=''*//*sholde use axios library for connect backend in next edit*//>
                                    </div> 
                                    <div className='mx-1 '>
                                        <Button width= 'auto' height= 'auto' text= 'ثبت‌نام به عنوان کارشناس' fontSize='18px'/*reference=''*//*sholde use axios library for connect backend in next edit*//>
                                    </div>
                                </div>   
                            </div>
                        </div>
                     </form>
                     <Footer/>
                 </div>                    
    );
  }
}
 
export default ArtistSignUp;
