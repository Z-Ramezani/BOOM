import {Component} from 'react';

class Breadcrumbb extends Component {
    state = {} 
    render() { 
        return (
            <div className='d-flex justify-content-start' style={{marginTop:'0.3%', marginRight:'0.5%'}} >
                <div>
                    {
                        this.props.is1OrNot ? <div dir='ltr' style={{color:'#222222', fontSize: '0.55vw'}}>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">{this.props.first}</li>
                                </ol>
                            </nav>
                        </div> 
                        : <div></div>
                    }
                </div>

                <div>
                    {
                        this.props.is2OrNot ? <div dir='ltr' style={{color:'#222222', fontSize: '0.55vw'}}>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">{this.props.second}</li>
                                    <li className="breadcrumb-item">{this.props.first}</li>
                                </ol>
                            </nav>
                        </div> 
                        : <div></div>
                    }
                </div>

                <div>
                    {
                        this.props.is3OrNot ? <div dir='ltr' style={{color:'#222222', fontSize: '0.55vw'}}>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">{this.props.third}</li>
                                    <li className="breadcrumb-item">{this.props.second}</li>
                                    <li className="breadcrumb-item">{this.props.first}</li>
                                </ol>
                            </nav>
                        </div> 
                        : <div></div>
                    }
                </div>
            </div>
        );
    }
}

export default Breadcrumbb;