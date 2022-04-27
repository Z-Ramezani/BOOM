import {Component} from 'react';
import Button from '../components/button';
import Input_text from '../components/input_form';
import Breadcrumbb from '../components/breadcrumb';
import Navbar from '../components/navBar/navBar';
import Footer from '../components/footer';
import ResetButton from '../components/resetButton';
import HorizontalLine from '../components/horizontalLine/horizontalLine';

class ArtistProfile extends Component {
  render() { 
    const {names, setNames}=this.setState;
    const {codeNumber, setcodeNumber}=this.setState;
    const {birthay, setBirthay}=this.setState;
    const {phone, setPhone}=this.setState;
    const {email, setEmail}=this.setState;
    const {address, setAddress}=this.setState;
    const {password, setPassword}=this.setState;
    const {showNumber, setShowNumber}=this.setState;
    const {artisticBackground, setartisticBackground}=this.setState;
    const {workStyle, setWorkStyle}=this.setState;
    const {experience, setExperience}=this.setState;


    return (
        <div className='d-flex flex-column min-vh-100'>
            <Navbar/>
            <Breadcrumbb is2OrNot='true' first='حساب کاربری' second='اطلاعات حساب کاربری'/>
            <HorizontalLine value='اطلاعات کاربری'/>
            <form style={{marginTop: 'auto'}}>
                <div className='container w-75 p-3 shadow p-3 bg-white rounded mb-5'>
                    <div className='row justify-content-center'>

                        <div className='row mb-2'>     
                            <div class='col row '>
                                <label className='col-4 col-form-label'>نام و نام‌خانوادگی</label>
                                <div className='col-4'> 
                                    <Input_text type="text" value={names} onChange={(e)=>setNames(e.target.value)}/>
                                </div>
                            </div>
                        </div>

                        <div className='row mb-2'>
                            <div className='col row'>
                                <label className='col-4 col-form-label'>کدملی</label>
                                <div className='col-4'>
                                    <Input_text type="text" value={codeNumber} onChange={(e)=>setcodeNumber(e.target.value)}/>
                                </div>
                            </div>
                        </div>
    
                        <div className='row mb-2'>
                            <div className="col row ">
                                <label  className="col-4 col-form-label ">سال تولد</label>
                                <div className='col-4'>
                                    <Input_text type="date" value={birthay} onChange={(e)=>setBirthay(e.target.value)}/>
                                </div>
                            </div>
                        </div> 

                        <div className='row mb-2'>
                            <div className='col row'>
                                <label className='col-4 col-form-label'>شماره تماس</label>
                                <div className='col-4'>
                                    <Input_text type="text" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                                </div>
                            </div>
                        </div>

                        <div className='row mb-2'>
                            <div className="row col">
                                <label  className="col-sm-4 col-form-label">ایمیل</label>
                                <div className='col-4'>
                                    <Input_text type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                </div>
                            </div>
                        </div>

                        <div className='row mb-2'>
                            <div className="row col ">
                                <label  className='col-4 col-form-label'>راه ارتباطی جهت نمایش در آگهی</label>
                                <div className='col-4'>
                                    <Input_text type="text" value={showNumber} onChange={(e)=>setShowNumber(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                                    

                        <div className='row mb-2'>
                            <div className="row col">
                                <label  className='col-4 col-form-label'>آدرس</label>
                                <div className="col-8">
                                    <Input_text type="text" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                                </div>
                            </div>          
                        </div>

                        <div className='row mb-2'>
                            <div className="row col">
                                <label className="col-sm-4 col-form-label">رمز عبور جدید</label>
                                <div className='col-4'>
                                    <Input_text type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                </div>
                            </div>
                        </div>      
                                
                    </div>
                </div>
            
            
                <div className='container w-75 p-0 mb-4' >
                    <div className='justify-content-center mt-0 mx-0' >
                        <div className='d-flex'>
                            <div className='mx-1'>
                                <Button width= 'auto' height= 'auto' text= 'ویرایش' /*reference=''*//*sholde use axios library for connect backend in next edit*//>
                            </div>               
                        </div>   
                    </div>
                </div>
            </form>

            <HorizontalLine value='سوابق کاری'/>
            <form>
                <div className='container w-75 p-3 shadow p-3 bg-white rounded mb-5' >
                    <div className='row justify-content-center' >

                        <div className='row mb-2'>     
                            <div class='col row '>
                                <label className='col-4 col-form-label'>زمینه هنری</label>
                                <div className='col-4'>
                                    <Input_text type="text" value={artisticBackground} onChange={(e)=>setartisticBackground(e.target.value)}/>
                                </div>
                            </div>
                        </div>

                        <div className='row mb-2'>
                            <div className='col row'>
                                <label className='col-4 col-form-label'>سبک کاری</label>
                                <div className='col-4'>
                                    <Input_text type="text" value={workStyle} onChange={(e)=>setWorkStyle(e.target.value)}/>
                                </div>
                            </div>
                        </div>
    
                        <div className='row mb-2'>
                            <div className="col row ">
                                <label  className="col-4 col-form-label ">سابقه فعالیت</label>
                                <div className='col-4'>
                                    <Input_text type="text" value={experience} onChange={(e)=>setExperience(e.target.value)} placeholder="سال"/>
                                </div>
                            </div>
                        </div>     
                                
                    </div>
                </div>
            
            
                <div className='container w-75 p-0 mb-4' >
                    <div className='justify-content-center mt-0 mx-0' >
                        <div className='d-flex'>
                            <div className='mx-1'>
                                <Button width= 'auto' height= 'auto' text= 'ثبت' /*reference=''*//*sholde use axios library for connect backend in next edit*//>
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
 
export default ArtistProfile;
