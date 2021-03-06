import {Component} from 'react';


const Button = (props) => {
    return ( 
        <div className="d-grid gap-2 d-md-flex justify-content-md-end" dir={props.dir}>
            <button 
            onClick={props.onClick} 
            className="btn btn-primary" 
            type={props.type} 
            style={{width: props.width, height:props.height, backgroundColor:'#BB1542', borderColor:'#BB1542', fontSize:props.fontSize}}
            disabled={props.disabled}>
                {props.text}
            </button>
        </div>
     );
}
 
export default Button;

// import {Component} from 'react';


// const Button = (props) => {
//     return ( 
//         <div className="d-grid gap-2 d-md-flex justify-content-md-end" dir={props.dir}>
//             <a 
//             onClick={props.onClick} 

//             onChange={props.onChange} 
//             className="btn btn-primary" 
//             type="button" 
//             style={{width: props.width, height:props.height, backgroundColor:'#BB1542', borderColor:'#BB1542', fontSize:props.fontSize}}
//             disabled={props.disabled}
//             href="/mainPage"
//             >

//                 {props.text}
//             </a>
//         </div>
//      );
// }
 
// export default Button;
 
