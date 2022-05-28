import {Component} from 'react';
const Input_text = (props) => {
    return ( 
        <div class="mx-auto">
                <input type= {props.type} className='form-control' required  placeholder={props.placeholder} onChange={props.onChange}></input> 
            </div>
     );
}
 
export default Input_text;