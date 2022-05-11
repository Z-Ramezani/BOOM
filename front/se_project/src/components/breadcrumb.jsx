import {Component} from 'react';

// class Breadcrumbb extends Component {
//     state = {} 
//     render() { 
//         return (
//             <div className='d-flex justify-content-start' style={{marginTop:'0.3%', marginRight:'0.5%'}} >
//                 <div>
//                     {
//                         this.props.is1OrNot ? <div dir='ltr' style={{color:'#222222', fontSize: '0.55vw'}}>
//                             <nav aria-label="breadcrumb">
//                                 <ol class="breadcrumb">
//                                     <li class="breadcrumb-item">{this.props.first}</li>
//                                 </ol>
//                             </nav>
//                         </div> 
//                         : <div></div>
//                     }
//                 </div>

//                 <div>
//                     {
//                         this.props.is2OrNot ? <div dir='ltr' style={{color:'#222222', fontSize: '0.55vw'}}>
//                             <nav aria-label="breadcrumb">
//                                 <ol class="breadcrumb">
//                                     <li class="breadcrumb-item">{this.props.second}</li>
//                                     <li class="breadcrumb-item">{this.props.first}</li>
//                                 </ol>
//                             </nav>
//                         </div> 
//                         : <div></div>
//                     }
//                 </div>

//                 <div>
//                     {
//                         this.props.is3OrNot ? <div dir='ltr' style={{color:'#222222', fontSize: '0.55vw'}}>
//                             <nav aria-label="breadcrumb">
//                                 <ol class="breadcrumb">
//                                     <li class="breadcrumb-item">{this.props.third}</li>
//                                     <li class="breadcrumb-item">{this.props.second}</li>
//                                     <li class="breadcrumb-item">{this.props.first}</li>
//                                 </ol>
//                             </nav>
//                         </div> 
//                         : <div></div>
//                     }
//                 </div>
//             </div>
//         );
//     }
// }

// export default Breadcrumbb;

const Breadcrumbb = (props) => {
    return ( 
        <div className='d-flex justify-content-start' style={{marginTop:'0.3%', marginRight:'0.5%'}} >
                <div>
                    {
                        props.is1OrNot ? <div dir='ltr' style={{color:'#222222', fontSize: '0.55vw'}}>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item">{props.first}</li>
                                </ol>
                            </nav>
                        </div> 
                        : <div></div>
                    }
                </div>

                <div>
                    {
                        props.is2OrNot ? <div dir='ltr' style={{color:'#222222', fontSize: '0.55vw'}}>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item">{props.second}</li>
                                    <li class="breadcrumb-item">{props.first}</li>
                                </ol>
                            </nav>
                        </div> 
                        : <div></div>
                    }
                </div>

                <div>
                    {
                        props.is3OrNot ? <div dir='ltr' style={{color:'#222222', fontSize: '0.55vw'}}>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item">{props.third}</li>
                                    <li class="breadcrumb-item">{props.second}</li>
                                    <li class="breadcrumb-item">{props.first}</li>
                                </ol>
                            </nav>
                        </div> 
                        : <div></div>
                    }
                </div>
            </div>
     );
}
 
export default Breadcrumbb;