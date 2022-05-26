import { Component } from 'react';
import { Link } from 'react-router-dom';
// class NavLink extends Component {
//     state = {  } 
//     render() { 
//         return (
            // <div>
                // <li className="nav-item">
                //     <a className="nav-link" aria-current={this.props.ariacurrent} href={this.props.href} style={{fontSize:'1.1vw'}}>
                //           {this.props.text}
                //     </a>
                // </li>
            // </div>
//         );
//     }
// }
 
// export default NavLink;

const NavLink = (props) => {
    return ( 
        <div>
            <li className="nav-item">
                <Link className="nav-link" aria-current={props.ariacurrent} to="/" style={{fontSize:'1.1vw'}}>
                        {props.text}
                </Link>
            </li>
        </div>
     );
}
 
export default NavLink;