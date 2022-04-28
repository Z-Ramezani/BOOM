import {Component} from 'react';
import Button from '../components/button';
import Input_text from '../components/input_form';
import Breadcrumbb from '../components/breadcrumb';
import Navbar from '../components/navBar/navBar';
import Footer from '../components/footer';
import ResetButton from '../components/resetButton';
import HorizontalLine from '../components/horizontalLine/horizontalLine';
import ArtworkAdAdditionalInfo from '../components/artworkAdAdditionalInfo'
import UserInformation from '../components/userInformation';

class ArtistProfile extends Component {
  render() { 
    const {artisticBackground, setartisticBackground}=this.setState;
    const {workStyle, setWorkStyle}=this.setState;
    const {experience, setExperience}=this.setState;
    return (
        <div className='d-flex flex-column min-vh-100'>
            <Navbar/>
            <Breadcrumbb is2OrNot='true' first='حساب کاربری' second='اطلاعات حساب کاربری'/>
            <UserInformation/>
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
            <HorizontalLine value='نمونه آثار'/>
            <div className='container w-75 p-3 shadow p-3 bg-white rounded mb-5'>
                <ArtworkAdAdditionalInfo/>
                <div style={{marginRight:'3.5%'}}>
                    <Button width= 'auto' height= 'auto' text= 'ثبت' dir='LTR' /*onClick*//>
                </div>
            </div>
            <Footer/>
        </div>                    
    );
  }
}
 
export default ArtistProfile;
