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
      <div>
        <label for="startDate">Start</label>
          <input id="startDate" class="form-control" type="date" />
      </div>     
    );
  }
}
 
export default App;

