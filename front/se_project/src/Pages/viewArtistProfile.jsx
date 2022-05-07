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
import Resume from '../components/resume';

// class ViewArtistProfile extends Component {
//   render() { 
//     return (
//         <div className='d-flex flex-column min-vh-100'>
//             <Navbar/>
//             <Breadcrumbb is3OrNot='true' first='صفحه اصلی' second='آگهی اثر' third='نمایش حساب کاربری هنرمند'/>
//             <HorizontalLine value='اطلاعات فردی'/>
//             <Resume/>
//             <HorizontalLine value='نمونه آثار'/>
//             <div className='container w-75 p-3 shadow p-3 bg-white rounded mb-5'>
//                 <ArtworkAdAdditionalInfo/>
//             </div> 
//             <Footer/>
//         </div>                    
//     );
//   }
// }
 
// export default ViewArtistProfile;

const ViewArtistProfile = () => {
  return ( 
    <div className='d-flex flex-column min-vh-100'>
          <Navbar/>
          <Breadcrumbb is3OrNot='true' first='صفحه اصلی' second='آگهی اثر' third='نمایش حساب کاربری هنرمند'/>
          <HorizontalLine value='اطلاعات فردی'/>
          <Resume/>
          <HorizontalLine value='نمونه آثار'/>
          <div className='container w-75 p-3 shadow p-3 bg-white rounded mb-5'>
              <ArtworkAdAdditionalInfo/>
          </div> 
          <Footer/>
      </div>   
   );
}
 
export default ViewArtistProfile;