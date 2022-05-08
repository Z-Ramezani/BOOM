import {Component} from 'react';
import Button from '../components/button';
import Breadcrumbb from '../components/breadcrumb';
import Navbar from '../components/navBar/navBar';
import Footer from '../components/Footer/footer';
import HorizontalLine from '../components/horizontalLine/horizontalLine';
import UserInformation from '../components/userInformation';
import Resume from '../components/resume';
import ExportResume from '../components/exportResume';


class ExportProfile extends Component {
    state = {  } 
    render() { 
        return (
            <div className='d-flex flex-column min-vh-100'>
                <Navbar/>
                <Breadcrumbb is1OrNot='true' first='حساب کاربری'/>
                <UserInformation/>
                <ExportResume/>

            </div>
        );
    }
}
 
export default ExportProfile;