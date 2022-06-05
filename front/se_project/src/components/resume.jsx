import {Component} from 'react';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Button from '../components/button';
import InputText from '../components/input_form';
import HorizontalLine from '../components/horizontalLine/horizontalLine';

const Resume = (props) => {
     const [artisticBackground, setArtisticBackground]=useState([]);
    useEffect(() => {
        fetchArtisticBackground();
    }, []);
    const fetchArtisticBackground = () => {
        axios
            .get('http://localhost:8000/api/artisticBackground')
            .then((res) => {
                // console.log(res);
                setArtisticBackground(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const [workStyle, setWorkStyle]=useState([]);
    useEffect(() => {
        fetchWorkStyle();
    }, []);
    const fetchWorkStyle = () => {
        axios
            .get('http://localhost:8000/api/workStyle')
            .then((res) => {
                // console.log(res);
                setWorkStyle(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

     const [experience, setExperience]=useState([]);
    useEffect(() => {
        fetchExperience();
    }, []);
    const fetchExperience = () => {
        axios
            .get('http://localhost:8000/api/experience')
            .then((res) => {
                // console.log(res);
                setExperience(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <form>
                <div className='container w-75 p-3 p-3 rounded mb-5' >
                    <div className='row justify-content-center' style={{backgroundColor:'#F9FFFF'}}>
                        <div className='row mb-2'>     
                            <div className='col row '>
                                <label className='col-4 col-form-label' style={{fontSize:'1.1vw'}}>زمینه هنری</label>
                                <div className='col-4'>
                                    <InputText type="text" value={artisticBackground} onChange={(e)=>setArtisticBackground(e.target.value)}/>
                                </div>
                            </div>
                        </div>

                        <div className='row mb-2'>
                            <div className='col row'>
                                <label className='col-4 col-form-label' style={{fontSize:'1.1vw'}}>سبک کاری</label>
                                <div className='col-4'>
                                    <InputText type="text" value={workStyle} onChange={(e)=>setWorkStyle(e.target.value)}/>
                                </div>
                            </div>
                        </div>
    
                        <div className='row mb-2'>
                            <div className="col row ">
                                <label  className="col-4 col-form-label" style={{fontSize:'1.1vw'}}>سابقه فعالیت</label>
                                <div className='col-4'>
                                    <InputText type="text" value={experience} onChange={(e)=>setExperience(e.target.value)} placeholder="سال"/>
                                </div>
                            </div>
                        </div>     
                                
                    </div>
                    
                    < div className='row mb-2' >
                        <div className='justify-content-center mt-0 mx-0' >
                            <div className='d-flex'>
                                <div className='mx-3'>
                                    <Button width= 'auto' height= 'auto' text= 'ثبت' fontSize='1.17vw'/*reference=''*//*sholde use axios library for connect backend in next edit*//>
                                </div>               
                            </div>   
                        </div> 
                    </div>

                </div>
            </form>
        </div>                    
    );
}
 
export default Resume;