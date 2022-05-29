import {Component} from 'react';
import { useState } from "react";
import Button from "../components/button";
import Input_text from "../components/input_form";
import Breadcrumbb from "../components/breadcrumb";
import Navbar from "../components/navBar/navBar";
import Footer from "../components/Footer/footer";
import ResetButton from "../components/resetButton";
import axios from "axios";
import SignUp from '../components/signUp';

const url1 = "http://hidden.pythonanywhere.com/users/register/expert";

const ExpertSignUp = () => {
  const [name, setName] = useState("");
	const [lastname, setLastname] = useState("");
  const [national_id_number, setNational_id_number] = useState("");
  const [birth_date, setBirth_date] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  //const [gender, setGender]= useState("");
  const [showNumber, setShowNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(url1, {
        name,
		lastname,
        national_id_number,
        birth_date,
        phone,
        email,
        address,
        password,
        showNumber,
      });
      localStorage.setItem('token' , res.data.token);
      console.log(res);
    } catch (e) {
      alert('this user exist with this mobile phone!')
      console.log(e.response);
    }
  };

  return ( 
    <div>
        <SignUp onSubmit={handleSubmit}/>
    </div> 
 );
};

export default ExpertSignUp;
