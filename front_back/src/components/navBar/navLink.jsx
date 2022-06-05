import { Component } from 'react';
import { Link } from 'react-router-dom';

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