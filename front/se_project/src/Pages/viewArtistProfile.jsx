import {Component} from 'react';
import Button from '../components/button';
import Input_text from '../components/input_form';
import Breadcrumbb from '../components/breadcrumb';
import Navbar from '../components/navBar/navBar';
import Footer from '../components/Footer/footer';
import HorizontalLine from '../components/horizontalLine/horizontalLine';
import Resume from '../components/resume';
import ShowArtworkAdInfo from '../components/ArtworkAdInfo/showartworkAdInfo';

class ViewArtistProfile extends Component {

  render() {
    
    const {names, setNames}=this.setState;
    const {birthay, setBirthay}=this.setState;
    const {dataUserAccount, setDataUserAccount}=this.setState;
    const {showNumber, setShowNumber}=this.setState;
    return (
        <div className='d-flex flex-column min-vh-100'>
            <Navbar/>
            <Breadcrumbb is3OrNot='true' first='صفحه اصلی' second='آگهی اثر' third='نمایش حساب کاربری هنرمند'/>
            <HorizontalLine value='اطلاعات فردی'/>
            <form style={{backgroundColor:'#F9FFFF'}}>
                <div className='container w-75 p-3 p-3 rounded mb-5'>
                    <div className='row justify-content-center'>
                      <div className='col-9'>
                        <div className='row mb-2'>     
                            <div class='col row '>
                                <label className='col-4 col-form-label' style={{fontSize:'1.1vw'}}>نام و نام‌خانوادگی</label>
                                <div className='col-6'> 
                                    <Input_text type="text" value={names} onChange={(e)=>setNames(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                        <div className='row mb-2'>
                            <div className="col row ">
                                <label  className="col-4 col-form-label" style={{fontSize:'1.1vw'}}>سال تولد</label>
                                <div className='col-6'>
                                    <Input_text type="date" value={birthay} onChange={(e)=>setBirthay(e.target.value)}/>
                                </div>
                            </div>
                        </div> 

                        <div className='row mb-2'>
                            <div className="col row ">
                                <label  className="col-4 col-form-label" style={{fontSize:'1.1vw'}}>تاریخ ثبت حساب کاربری</label>
                                <div className='col-6'>
                                    <Input_text type="date" value={dataUserAccount} onChange={(e)=>setDataUserAccount(e.target.value)}/>
                                
                                </div>
                            </div>
                        </div> 

                        <div className='row mb-2'>
                            <div className="row col ">
                                <label  className='col-4 col-form-label' style={{fontSize:'1.1vw'}}>راه ارتباطی جهت نمایش در آگهی</label>
                                <div className='col-6'>
                                    <Input_text type="text" value={showNumber} onChange={(e)=>setShowNumber(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
            </form>
            <div className='container w-75 p-3 p-3 rounded mb-5' ><Resume/></div> 
            <HorizontalLine value='نمونه آثار'/>
            <div className='container w-75 p-3 shadow p-3 bg-white rounded mb-5'>
                <ShowArtworkAdInfo/>
            </div> 
            <Footer/>
        </div>                    
    );
  }
}
 
export default ViewArtistProfile;
