import {Component} from 'react';

const Button = (props) => {
    return ( 
        <div className="d-grid gap-2 d-md-flex justify-content-md-end" dir={props.dir}>
            <a 
            onClick={props.onClick}
            onChange={props.onChange}
            className="btn btn-primary" 
            type="button" 
            style={{width: props.width, height:props.height, backgroundColor:'#BB1542', borderColor:'#BB1542', fontSize:props.fontSize}}
            disabled={props.disabled}
            href='/mainPage'
            >
                {props.text}
            </a>
        </div>
     );
}
 
export default Button;