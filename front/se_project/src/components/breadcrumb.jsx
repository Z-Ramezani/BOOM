import {Component} from 'react';
class Breadcrumbb extends Component {
    state = {} 
    render() { 
        return (
            <div style={{float: 'right' ,marginTop:'4px', marginRight:'10px'}} >
                <div>
                    {
                        this.props.is1OrNot ? <div dir='ltr' style={{color:'#222222', fontSize: '9px'}}>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item" >{this.props.first}</li>
                                </ol>
                            </nav>
                        </div> 
                        : <div></div>
                    }
                </div>

                <div>
                    {
                        this.props.is2OrNot ? <div dir='ltr' style={{color:'#222222', fontSize: '10px'}}>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item" >{this.props.second}</li>
                                    <li class="breadcrumb-item" >{this.props.first}</li>
                                </ol>
                            </nav>
                        </div> 
                        : <div></div>
                    }
                </div>

                <div>
                    {
                        this.props.is3OrNot ? <div dir='ltr' style={{color:'#222222', fontSize: '0.5rem'}}>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item" >{this.props.third}</li>
                                    <li class="breadcrumb-item" >{this.props.second}</li>
                                    <li class="breadcrumb-item" >{this.props.first}</li>
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