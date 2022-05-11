import {Component} from 'react';
// import axios from 'axios';
import Navbar from '../components/navBar/navBar';
import Breadcrumbb from '../components/breadcrumb';
import Footer from '../components/Footer/footer';
import ArtworkGroup from '../components/artworkGroup';
import HeaderSlide from '../components/header-slide';
// class MainPage extends Component {
//     state = { 
//          // ads: []
//      } 
//     // async componentDidMount(){
//     //     const response = await axios.get(/'url from back'/);
//     // this.setState.ads({ads: response./this is based on back variables/});
//     // }
//     render() { 
//         return (
//             <div>
//                 <Navbar/>
//                 <HeaderSlide/>
//                 <Breadcrumbb is1OrNot='true' first='صفحه اصلی'/>
//                 <div className='d-flex flex-column min-vh-100'>
//                     <div className='container w-75 p-3'>
//                         <ArtworkGroup/>
//                         <ArtworkGroup/>
//                         <ArtworkGroup/>
//                     </div>
//                     <Footer/>
//                 </div>
//             </div>
//         );
//     }
// }
 
// export default MainPage;

const MainPage = (props) => {
    return ( 
        <div>
            <Navbar/>
            <HeaderSlide/>
            <Breadcrumbb is1OrNot='true' first='صفحه اصلی'/>
            <div className='d-flex flex-column min-vh-100'>
                <div className='container w-75 p-3'>
                    <ArtworkGroup/>
                    <ArtworkGroup/>
                    <ArtworkGroup/>
                </div>
                <Footer/>
            </div>
        </div>
     );
}
 
export default MainPage;