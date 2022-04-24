import {Component} from 'react';
import Button from './components/button';
import headerSlide from './components/header-slide';
import 'bootstrap';
import logo from './assets/logo.png';
import './components/navBar/navBar.css';
import Breadcrumbb from './components/breadcrumb';

class App extends Component {
  
  render() { 
    return (
      <div>
        <Breadcrumbb is3OrNot='true' first='صفحه اصلی' second='آگهی اثر' third='اثر'/>
      </div>
    )
  }
}
 
export default App;
