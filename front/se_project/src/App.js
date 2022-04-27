import {Component} from 'react';
import Button from './components/button';
import headerSlide from './components/header-slide';
import 'bootstrap';
import logo from './assets/logo.png';
import './components/navBar/navBar.css';
import Breadcrumbb from './components/breadcrumb';
import Input_text from './components/input_form';
  

class App extends Component {
  render() { 

    return (
      <div class="custom-file">
  <input type="file" class="custom-file-input" id="customFile"/>
  <label class="custom-file-label" for="customFile">Choose file</label>
</div>  
    );
  }
}
 
export default App;

