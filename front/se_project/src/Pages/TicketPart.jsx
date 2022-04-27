import {Component} from 'react';
import Button from '../components/button';
import Breadcrumbb from '../components/breadcrumb';
import Navbar from '../components/navBar/navBar';
import Footer from '../components/footer';

class TicketPart extends Component {
    setValue=()=>{
        this.setState({count: this.state.count + 1});
    }
    state = { 
        count:0
     } 
    render() { 
        return (
            <div>
                <Navbar/>
                <Breadcrumbb is3OrNot='true' first='صفحه اصلی' second='ثبت‌نام ' third='به عنوان خریدار'/>
                <div className='container w-75 p-3 mt-4 flex-column min-vh-100'>
                    <div className='d-flex mb-3'>
                    <label className="form-label ps-2 mt-2">تعداد تیکت باقیمانده</label>
                    <input type="text" class="form-control" disabled value={this.state.count} style={{width:'auto', height:'auto' , backgroundColor:'#f9ffff'}} ></input>
                    </div>
                    <Button width='auto' height='auto' fontSize='18px' text='خرید تیکت' onClick={this.setValue}/>
                </div>
                <Footer/>
            </div>
        );
    }
}
 
 
export default TicketPart;