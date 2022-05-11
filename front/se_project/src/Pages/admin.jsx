import {Component} from 'react';
import Button from '../components/button';
import Breadcrumbb from '../components/breadcrumb';
import Navbar from '../components/navBar/navBar';
import Footer from '../components/Footer/footer';
import HorizontalLine from '../components/horizontalLine/horizontalLine';
import ArtworkAdAdditionalInfo from '../components/artworkAdAdditionalInfo';

// class Admin extends Component {
//     state = {  } 
//     render() { 
//         return (
//             <div>
//                 <Navbar/>
//                 <Breadcrumbb is1OrNot='true' first='حساب کاربری'/>
//                 <div className='d-flex flex-column min-vh-100'>
//                     <HorizontalLine value='آگهی‌های جدید'/>
//                     <div className='container w-75 p-3 shadow bg-white rounded mb-5'>
//                             <ArtworkAdAdditionalInfo  showImages showText showCostText/>
//                             <div className='d-flex' style={{marginRight:'2%'}}>
//                                 <div className='ms-2'>
//                                     <Button width= 'auto' height= 'auto' text= 'تایید' fontSize='1.17vw'/*onClick*//>
//                                 </div>
//                                 <Button width= 'auto' height= 'auto' text= 'حذف' fontSize='1.17vw'/*onClick*//>
//                             </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
 
// export default Admin;

const Admin = (props) => {
    return ( 
        <div>
            <Navbar/>
            <Breadcrumbb is1OrNot='true' first='حساب کاربری'/>
            <div className='d-flex flex-column min-vh-100'>
                <HorizontalLine value='آگهی‌های جدید'/>
                <div className='container w-75 p-3 shadow bg-white rounded mb-5'>
                        <ArtworkAdAdditionalInfo  showImages showText showCostText/>
                        <div className='d-flex' style={{marginRight:'2%'}}>
                            <div className='ms-2'>
                                <Button width= 'auto' height= 'auto' text= 'تایید' fontSize='1.17vw'/*onClick*//>
                            </div>
                            <Button width= 'auto' height= 'auto' text= 'حذف' fontSize='1.17vw'/*onClick*//>
                        </div>
                </div>
                <Footer/>
            </div>
        </div>
     );
}
 
export default Admin;