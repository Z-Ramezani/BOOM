import { Component } from 'react';

class FooterIcon extends Component {
    render() { 
        return (
            <div>
                <div className='col-md-4' style={{marginRight:'3vw'}}>
                        <a href='' className='me-4 text-reset'>
                          <i className="bi bi-envelope img-fluid"></i>
                        </a>
                        <a href='' className='me-4 text-reset'>
                          <i className="bi bi-linkedin"></i>
                        </a>
                        <a href='' className='me-4 text-reset'>
                          <i className="bi bi-instagram"></i>
                        </a>
                        <a href='' className='me-4 text-reset'>
                          <i className="bi bi-telegram"></i>
                        </a>
                    </div>
            </div>
        );
    }
}
 
export default FooterIcon;