import {Component} from 'react';
import '../horizontalLine/horizontalLine.css'

const HorizontalLine = () => {
    return ( 
        <div className="text-hr text-hr--right">
                <span className="text-hr__text" style={{fontSize:'1.1vw'}}>{this.props.value}</span> 
            </div> 
     );
}
export default HorizontalLine;