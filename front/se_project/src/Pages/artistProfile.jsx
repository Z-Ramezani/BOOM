import {Component} from 'react';
import Button from '../components/button';
import Breadcrumbb from '../components/breadcrumb';
import Navbar from '../components/navBar/navBar';
import Footer from '../components/Footer/footer';
import HorizontalLine from '../components/horizontalLine/horizontalLine';
import UserInformation from '../components/userInformation';
import Resume from '../components/resume';
import SetArtworkAdInfo from '../components/ArtworkAdInfo/setArtworkAdInfo';
import ShowArtworkAdInfo from '../components/ArtworkAdInfo/showartworkAdInfo';

const ArtistProfile = (props) => { 
    return (
        <div className='d-flex flex-column min-vh-100'>
            <Navbar/>
            <Breadcrumbb is2OrNot='true' first='حساب کاربری' second='اطلاعات حساب کاربری'/>
            <UserInformation/>
            <Resume/>
            <HorizontalLine value='نمونه آثار'/>
            <div className='container w-75 p-3 shadow p-3 bg-white rounded mb-5'>
                <SetArtworkAdInfo/>
                <div style={{marginRight:'3.5%'}}>
                    <Button width= 'auto' height= 'auto' text= 'ثبت' dir='LTR' fontSize='1.17vw'/*onClick*//>
                </div>
            </div>
            <div className='container w-75 p-3 shadow p-3 bg-white rounded mb-5'>
                <ShowArtworkAdInfo/>
                <div className='d-flex' style={{marginRight:'3.5%'}}>
                  <div className='ms-2'>
                    <Button width= 'auto' height= 'auto' text= 'ویرایش' dir='LTR' fontSize='1.17vw'/*onClick*//>
                  </div>
                  <Button width= 'auto' height= 'auto' text= 'حذف' dir='LTR' fontSize='1.17vw'/*onClick*//>
                </div>
            </div>
        <Footer/>
      </div>         
   );
}
 
export default ArtistProfile;