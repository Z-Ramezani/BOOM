import React, {Component} from 'react';
import Button from './button';

class Login extends Component {
    state = {  } 
    render() { 
        return (<Button width= '337px' height= '48px' text= 'ورود' /*reference=''*//>); //sholde use axios library for connect backend in next edit
    }
}
 
export default Login;