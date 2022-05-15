import {Component} from 'react';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Button from '../components/button';
import Breadcrumbb from '../components/breadcrumb';
import NavBar from '../components/navBar/navBar';
import Footer from '../components/Footer/footer';
import HorizontalLine from '../components/horizontalLine/horizontalLine';
import SetArtworkAdInfo from '../components/ArtworkAdInfo/setArtworkAdInfo';
import ShowArtworkAdCost from '../components/ArtworkAdInfo/showArtworkAdCost';

// class TicketPart extends Component {
//     setValueIncrease=()=>{
//         this.setState({count: this.state.count + 1});
//     }
//     setValueDecrease=()=>{
//         this.setState({count: this.state.count - 1});
//     }
//     state = { 
//         count:0
//      } 
//     render() { 
//         return (
//             <div>
//                 <Navbar/>
//                 <Breadcrumbb is2OrNot='true' first='حساب کاربری' second='ثبت آگهی و تیکت'/>
//                 <div className='d-flex flex-column min-vh-100'>
//                     <HorizontalLine value='تیکت'/>
//                     <div className='container w-75 p-3'>
//                         <div className='d-flex mb-3'>
//                             <label className="form-label ps-2 mt-2"  style={{fontSize:'1.1vw'}}>تعداد تیکت باقیمانده</label>
//                             <input type="text" class="form-control" disabled value={this.state.count} style={{width:'3.5vw', height:'auto' , backgroundColor:'#f9ffff'}} ></input>
//                         </div>
//                         <Button width='auto' height='auto' fontSize='1.17vw' text='خرید تیکت' dir='LTR' onClick={this.setValueIncrease}/>
//                     </div>
//                     <HorizontalLine value='آگهی اثر هنری'/>
//                     <div>
//                         <div className='container w-75 p-3 shadow bg-white rounded mb-5'>
//                             <ArtworkAdAdditionalInfo showCostInput/>
//                             <div style={{marginRight:'3.5%'}}>
//                                 <Button width= 'auto' height= 'auto' fontSize='1.17vw' text= 'ارسال درخواست ثبت آگهی' dir='LTR' onClick={this.setValueDecrease}/>
//                             </div>
//                         </div>
//                         <div className='container w-75 p-3 shadow bg-white rounded mb-5'>
//                             <ArtworkAdAdditionalInfo  showImages showCostText/>
//                             <div className='d-flex' style={{marginRight:'2%'}}>
//                                 <div className='ms-2'>
//                                     <Button width= 'auto' height= 'auto' fontSize='1.17vw' text= 'ویرایش' /*onClick*//>
//                                 </div>
//                                 <div className='ms-2'>
//                                     <Button width= 'auto' height= 'auto' fontSize='1.17vw' text= 'حذف' /*onClick*//>
//                                 </div>
//                                 <Button width= 'auto' height= 'auto' fontSize='1.17vw' text= 'خرید نردبان' onClick={this.setValueDecrease}/>
//                             </div>
//                         </div>
//                     </div>
//                     <Footer/>
//                 </div>
//             </div>
//         );
//     }
// }
 
// export default TicketPart;

const TicketPart = (props) => {

     const {count, setCount}=useState("");
//     useEffect(() => {
//         fetchCount();
//     }, []);
//     const fetchCount = () => {
//         axios
//             .get('http://localhost:8000/api/count')
//             .then((res) => {
//                 // console.log(res);
//                 setCount(res.data);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     };

     const [valueDecrease, setValueDecrease]=useState([]);
//     useEffect(() => {
//         fetchValueDecrease();
//     }, []);
//     const fetchValueDecrease = () => {
//         axios
//             .get('http://localhost:8000/api/valueDecrease')
//             .then((res) => {
//                 // console.log(res);
//                 setValueDecrease(res.data);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     };

     const [valueIncrease, setValueIncrease]=useState([]);
//     useEffect(() => {
//         fetchValueIncrease();
//     }, []);
//     const fetchValueIncrease = () => {
//         axios
//             .get('http://localhost:8000/api/valueIncrease')
//             .then((res) => {
//                 // console.log(res);
//                 setValueIncrease(res.data);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     };

    return ( 
        <div>
                <NavBar/>
                <Breadcrumbb is2OrNot='true' first='حساب کاربری' second='ثبت آگهی و تیکت'/>
                <div className='d-flex flex-column min-vh-100'>
                    <HorizontalLine value='تیکت'/>
                    <div className='container w-75 p-3'>
                        <div className='d-flex mb-3'>
                            <label className="form-label ps-2 mt-2"  style={{fontSize:'1.1vw'}}>تعداد تیکت باقیمانده</label>
                            <input type="text" class="form-control" disabled value={count} style={{width:'3.5vw', height:'auto' , backgroundColor:'#f9ffff'}} ></input>
                        </div>
                        <Button width='auto' height='auto' fontSize='1.17vw' text='خرید تیکت' dir='LTR' onClick={valueIncrease}/>
                    </div>
                    <HorizontalLine value='آگهی اثر هنری'/>
                    <div>
                        <div className='container w-75 p-3 shadow bg-white rounded mb-5'>
                            <SetArtworkAdInfo/>
                            <div style={{marginRight:'3.5%'}}>
                                <Button width= 'auto' height= 'auto' fontSize='1.17vw' text= 'ارسال درخواست ثبت آگهی' dir='LTR' onClick={valueDecrease}/>
                            </div>
                        </div>
                        <div className='container w-75 p-3 shadow bg-white rounded mb-5'>
                            <ShowArtworkAdCost/>
                            <div className='d-flex' style={{marginRight:'2%'}}>
                                <div className='ms-2'>
                                    <Button width= 'auto' height= 'auto' fontSize='1.17vw' text= 'ویرایش' /*onClick*//>
                                </div>
                                <div className='ms-2'>
                                    <Button width= 'auto' height= 'auto' fontSize='1.17vw' text= 'حذف' /*onClick*//>
                                </div>
                                <Button width= 'auto' height= 'auto' fontSize='1.17vw' text= 'خرید نردبان' onClick={valueDecrease}/>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            </div>
     );
}
 
export default TicketPart;