import {Component} from 'react';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Button from '../components/button';
import InputText from '../components/input_form';
import HorizontalLine from '../components/horizontalLine/horizontalLine';
const UserInformation = (props) => {
    const {names, setNames}=useState("");
    useEffect(() => {
        fetchNames();
    }, []);
    const fetchNames = () => {
        axios
            .get('http://localhost:8000/api/names')
            .then((res) => {
                // console.log(res);
                setNames(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const [codeNumber, setcodeNumber]=useState([]);
    useEffect(() => {
        fetchCodeNumber();
    }, []);
    const fetchCodeNumber = () => {
        axios
            .get('http://localhost:8000/api/codeNumber')
            .then((res) => {
                // console.log(res);
                setcodeNumber(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const [birthay, setBirthay]=useState([]);
    useEffect(() => {
        fetchBirthay();
    }, []);
    const fetchBirthay = () => {
        axios
            .get('http://localhost:8000/api/birthay')
            .then((res) => {
                // console.log(res);
                setBirthay(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const [phone, setPhone]=useState([]);
    useEffect(() => {
        fetchPhone();
    }, []);
    const fetchPhone = () => {
        axios
            .get('http://localhost:8000/api/phone')
            .then((res) => {
                // console.log(res);
                setPhone(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const [email, setEmail]=useState([]);
    useEffect(() => {
        fetchEmail();
    }, []);
    const fetchEmail = () => {
        axios
            .get('http://localhost:8000/api/email')
            .then((res) => {
                // console.log(res);
                setEmail(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const [address, setAddress]=useState([]);
    useEffect(() => {
        fetchAddress();
    }, []);
    const fetchAddress = () => {
        axios
            .get('http://localhost:8000/api/address')
            .then((res) => {
                // console.log(res);
                setAddress(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const [password, setPassword]=useState("");
    useEffect(() => {
        fetchPassword();
    }, []);
    const fetchPassword = () => {
        axios
            .get('http://localhost:8000/api/password')
            .then((res) => {
                // console.log(res);
                setPassword(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const [showNumber, setShowNumber]=useState([]);
    useEffect(() => {
        fetchShowNumber();
    }, []);
    const fetchShowNumber = () => {
        axios
            .get('http://localhost:8000/api/showNumber')
            .then((res) => {
                // console.log(res);
                setShowNumber(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <form style={{backgroundColor:'#F9FFFF'}}>
                <div className='container w-75 p-3 p-3 rounded mb-5'>
                    <div className='row justify-content-center'>
                      <div className='col-9'>
                        <div className='row mb-2'>     
                            <div className='col row '>
                                <label className='col-4 col-form-label' style={{fontSize:'1.1vw'}}>?????? ?? ?????????????????????????</label>
                                <div className='col-6'> 
                                    <InputText type="text" value={names} onChange={(e)=>setNames(e.target.value)}/>
                                </div>
                            </div>
                        </div>

                        <div className='row mb-2'>
                            <div className='col row'>
                                <label className='col-4 col-form-label' style={{fontSize:'1.1vw'}}>??????????</label>
                                <div className='col-6'>
                                    <InputText type="text" value={codeNumber} onChange={(e)=>setcodeNumber(e.target.value)}/>
                                </div>
                            </div>
                        </div>
    
                        <div className='row mb-2'>
                            <div className="col row ">
                                <label  className="col-4 col-form-label" style={{fontSize:'1.1vw'}}>?????? ????????</label>
                                <div className='col-6'>
                                    <InputText type="date" value={birthay} onChange={(e)=>setBirthay(e.target.value)}/>
                                </div>
                            </div>
                        </div> 

                        <div className='row mb-2'>
                            <div className='col row'>
                                <label className='col-4 col-form-label' style={{fontSize:'1.1vw'}}>?????????? ????????</label>
                                <div className='col-6'>
                                    <InputText type="text" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                                </div>
                            </div>
                        </div>

                        <div className='row mb-2'>
                            <div className="row col">
                                <label  className="col-sm-4 col-form-label" style={{fontSize:'1.1vw'}}>??????????</label>
                                <div className='col-6'>
                                    <InputText type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                </div>
                            </div>
                        </div>

                        <div className='row mb-2'>
                            <div className="row col ">
                                <label  className='col-4 col-form-label' style={{fontSize:'1.1vw'}}>?????? ?????????????? ?????? ?????????? ???? ????????</label>
                                <div className='col-6'>
                                    <InputText type="text" value={showNumber} onChange={(e)=>setShowNumber(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                                    
                        <div className='row mb-2'>
                            <div className="row col">
                                <label  className='col-4 col-form-label' style={{fontSize:'1.1vw'}}>????????</label>
                                <div className="col-8">
                                    <InputText type="text" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                                </div>
                            </div>          
                        </div>

                        <div className='row mb-2'>
                            <div className="row col">
                                <label className="col-sm-4 col-form-label" style={{fontSize:'1.1vw'}}>?????? ???????? ????????</label>
                                <div className='col-6'>
                                    <InputText type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                </div>
                            </div>
                        </div>      
                                
                    </div>
                    <form className='col-3 justify-content-end'>
                            <div className="form-group " style={{width:'15vw', height:'15vw', border:'0.11vw solid #e1e1e1', borderRadius:'0.2vw'}}>
                                <input type="file" className="form-control-file"/>
                               
                            </div>
                            <figcaption className="figure-caption" dir="RTL" style={{marginRight:'0.2vw',fontSize:'0.9vw'}} >
                                        ?????????? ?????? ???????? ????????????: {/*recive from back*/}
                                </figcaption>
                      </form>
                    <div className='row mb-2' >
                        <div className='justify-content-center mt-0 mx-0' >
                            <div className='d-flex'>
                                <div className='mx-3'>
                                    <Button width= 'auto' height= 'auto' text= '????????????' fontSize='1.17vw'/*reference=''*//*sholde use axios library for connect backend in next edit*//>
                                </div>               
                            </div>   
                        </div>
                    </div>
                    
                    </div>
                </div>
            </form>
        </div>
    );
}
 
export default UserInformation;