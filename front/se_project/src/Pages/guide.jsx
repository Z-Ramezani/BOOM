import {Component} from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navBar/navBar';
import Breadcrumbb
 from '../components/breadcrumb';
class Guide extends Component {

    state = {  } 
    render() { 
        return (
            <div className='d-flex flex-column min-vh-100'>
                <Navbar/>
                <Breadcrumbb is1OrNot='true' first='راهنمای سایت' />
                <p>
                    
                </p>
                <Footer/>
            </div>
        );
    }
}
 
export default Guide;
