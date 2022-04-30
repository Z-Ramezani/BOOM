import {Component} from 'react';
const Input_text = (props) => {
    return ( 
        <div class="mx-auto">
                <input type= {props.type} className='form-control' required  placeholder={this.props.placeholder}></input> 
            </div>
     );
}
 
export default Input_text;