import {Component} from 'react';
import { useState } from 'react';
import Button from '../components/button';
import Breadcrumbb from '../components/breadcrumb';
import Navbar from '../components/navBar/navBar';
import Footer from '../components/footer';
import HorizontalLine from '../components/horizontalLine/horizontalLine';
import ArtworkAdAdditionalInfo from '../components/artworkAdAdditionalInfo';
import ExportOpinion from '../components/exportOpinion';

// class ArtworkAd extends Component {
//     showText=()=>{
//         this.setState({visibilityButton: 'none'});
//         this.setState({visibilityCost: 'block'});
//     }
//     state = { 
//         visibilityButton: 'block',
//         visibilityCost: 'none'
//      } 
//     render() { 
//         return (
//             <div>
//                 <Navbar/>
//                 <Breadcrumbb is2OrNot='true' first='صفحه اصلی' second='آگهی اثر'/>
//                 <div className='d-flex flex-column min-vh-100'>
//                     <div className='container w-75 p-3 shadow bg-white rounded mb-5'>
//                         <ArtworkAdAdditionalInfo showImages showText showCostText/>
//                     </div>
//                     <div className='container w-75 p-3 shadow bg-white rounded mb-5'>
//                         <div className='row'>
//                             <div className='col'>
//                                 <h2 class="mt-0" style={{fontSize:'1.2vw', fontWeight:'bold'}}>نام هنرمند : {/*recive from back*/}</h2>
//                             </div>
//                             <div className='col' style={{marginLeft:'33.9%', display:this.state.visibilityButton}}>
//                                 <Button width= 'auto' height= 'auto' text= 'مشاهده راه ارتباطی' dir='RTL' onClick={this.showText} fontSize='1.1vw'/>
//                             </div>
//                             <div className='col' style={{display:this.state.visibilityCost}}>
//                                 <h2 class="mt-0" style={{fontSize:'1.2vw', fontWeight:'bold'}}>۰۹۱۳۰۰۰۰۰۰۰{/*recive from back*/}</h2>
//                             </div>
//                             <a className='nav-link' href='#' style={{fontSize:'0.8vw',color:'#BB1542'}} >مشاهده سابقه کاری هنرمند</a>
//                         </div>
//                     </div>
//                     <HorizontalLine value='نظرات کارشناسان'/>
//                     <div className='container w-75 p-3'>
//                         <div className='shadow bg-white rounded'>
//                             <ExportOpinion/>
//                         </div>
//                         <a className='nav-link' href='#' style={{fontSize:'0.8vw',color:'#BB1542'}} >مشاهده همه نظرات</a>
//                     </div>
//                     <Footer/>
//                 </div>
//             </div>
//         );
//     }
// }
 
// export default ArtworkAd;


const ArtworkAd = (props) => {
    const [visibilityButton, setVisibilityButton] = useState("block");
    const [visibilityCost, setVisibilityCost] = useState("none");

    function showText(){
        setVisibilityButton("none");
        setVisibilityCost("block");
    }
    return ( 
        <div>
            <Navbar/>
            <Breadcrumbb is2OrNot='true' first='صفحه اصلی' second='آگهی اثر'/>
            <div className='d-flex flex-column min-vh-100'>
                <div className='container w-75 p-3 shadow bg-white rounded mb-5'>
                    <ArtworkAdAdditionalInfo showImages showText showCostText/>
                </div>
                <div className='container w-75 p-3 shadow bg-white rounded mb-5'>
                    <div className='row'>
                        <div className='col'>
                            <h2 class="mt-0" style={{fontSize:'1.2vw', fontWeight:'bold'}}>نام هنرمند : {/*recive from back*/}</h2>
                        </div>
                        <div className='col' style={{marginLeft:'33.9%', display:visibilityButton}}>
                            <Button width= 'auto' height= 'auto' text= 'مشاهده راه ارتباطی' dir='RTL' onClick={showText} fontSize='1.1vw'/>
                        </div>
                        <div className='col' style={{display:visibilityCost}}>
                            <h2 class="mt-0" style={{fontSize:'1.2vw', fontWeight:'bold'}}>۰۹۱۳۰۰۰۰۰۰۰{/*recive from back*/}</h2>
                        </div>
                        <a className='nav-link' href='#' style={{fontSize:'0.8vw',color:'#BB1542'}} >مشاهده سابقه کاری هنرمند</a>
                    </div>
                </div>
                <HorizontalLine value='نظرات کارشناسان'/>
                <div className='container w-75 p-3'>
                    <div className='shadow bg-white rounded'>
                        <ExportOpinion/>
                    </div>
                    <a className='nav-link' href='#' style={{fontSize:'0.8vw',color:'#BB1542'}} >مشاهده همه نظرات</a>
                </div>
                <Footer/>
            </div>
        </div>
    );
}
 
export default ArtworkAd;