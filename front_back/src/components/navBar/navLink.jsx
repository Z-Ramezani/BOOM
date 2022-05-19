import { Component } from 'react';
class NavLink extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <li className="nav-item">
                    <a className="nav-link" aria-current={this.props.ariacurrent} href={this.props.href} style={{fontSize:'1.1vw'}}>
                          {this.props.text}
                    </a>
                </li>
            </div>

        );
    }
}
 
export default NavLink;