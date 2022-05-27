import { useState } from "react";
// import Button from "../components/button";
// import InputText from "../components/input_form";
import Breadcrumbb from "../components/breadcrumb";
import Navbar from "../components/navBar/navBar";
import Footer from "../components/Footer/footer";
import ResetButton from "../components/resetButton";
import axios from "axios";

const url1 = "http://hidden.pythonanywhere.com/users/register";

const ArtistSignUp = () => {
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
      <Navbar />
      <Breadcrumbb
        is3OrNot="true"
        first="صفحه اصلی"
        second="ثبت‌نام "
        third="به عنوان هنرمند یا کارشناس"
      />
      <div className="d-flex flex-column min-vh-100">
        <form style={{ marginTop: "auto" }} onSubmit={handleSubmit}>
          <div className="container w-75 p-3 shadow p-3 mb-5 bg-white rounded mt-4">
            <div className="row justify-content-center">
              <div>
                <div className="row mb-2">
                  <div className="col row ">
                    <label
												htmlFor='flname' 
                      className="col-4 col-form-label"
                      style={{ fontSize: "1.1vw" }}
                    >
                      نام 
                    </label>
                    <div className="col-8">
                      <input
													className='form-input mb-2'
													id="flname"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>



										<label
												htmlFor='lname' 
                      className="col-4 col-form-label"
                      style={{ fontSize: "1.1vw" }}
                    >
                      نام خانوادگی 
                    </label>
                    <div className="col-8">
                      <input
													className='form-input mb-4'
													id="lname"
                        type="text"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                      />
                    </div>



                  </div>
                  <div className="col row">
                    <label
												htmlFor='national' 
                      className="col-sm-3 col-form-label mx-auto"
                      style={{ fontSize: "1.1vw" }}
                    >
                      کدملی
                    </label>
                    <div className="col-8">
                      <input
													className='form-input'
													id="national"
                        type="text"
                        value={national_id_number}
                        onChange={(e) => setNational_id_number(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="row mb-2">
                  <div className="col row ">
                    <label
												htmlFor='birth' 
                      className="col-4 col-form-label"
                      style={{ fontSize: "1.1vw" }}
                    >
                      سال تولد
                    </label>
                    <div className="col-8">
                      <input
													className='form-input'
													id="birth"
                        type="date"
                        value={birth_date}
                        onChange={(e) => setBirth_date(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col row">
                    <label
												htmlFor='phoneNum' 
                      className="col-sm-3 col-form-label mx-auto"
                      style={{ fontSize: "1.1vw" }}
                    >
                      شماره تماس
                    </label>
                    <div className="col-8">
                      <input
													className='form-input'
													id="phoneNum"
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="row ">
                  <div className="row col">
                    <label
												htmlFor='mail' 
                      className="col-sm-4 col-form-label"
                      style={{ fontSize: "1.1vw" }}
                    >
                      ایمیل
                    </label>
                    <div className="col-8">
                      <input
													className='form-input'
													id="mail"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="row col ">
                    <label
												htmlFor='communicate' 
                      className="col-sm-3 col-form-label  mx-auto"
                      style={{ fontSize: "1.1vw" }}
                    >
                      راه ارتباطی جهت نمایش در آگهی
                    </label>
                    <div className="col-8">
                      <input
													className='form-input'
													id="communicate"
                        type="text"
                        value={showNumber}
                        onChange={(e) => setShowNumber(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="row mb-2">
                  <div className="row col">
                    <label
												htmlFor='address' 
                      className="col-sm-3 col-form-label"
                      style={{ fontSize: "1.1vw" }}
                    >
                      آدرس
                    </label>
                    <div className="col-12 me-4">
                      <input
													className='form-input'
													id="address"
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="row mb-2">
                  <div className="row col">
                    <label
												htmlFor='pass' 
                      className="col-sm-4 col-form-label"
                      style={{ fontSize: "1.1vw" }}
                    >
                      رمز عبور
                    </label>
                    <div className="col-8">
                      <input
													className='form-input'
													id="pass"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row col">
                    <label
                      className="col-sm-3 col-form-label  mx-auto"
                      style={{ fontSize: "1.1vw" }}
                    >
                      تکرار رمز عبور
                    </label>
                    <div className="col-8">
                      <input type="password" />
                    </div>
                  </div>
                </div>

                <div className="row mb-2 ">
                  <fieldset className="row">
                    <label
												htmlFor='sexuality' 
                      className="col-form-label col-sm-2"
                      style={{ fontSize: "1.1vw" }}
                    >
                      جنسیت
                    </label>
                    <div className="d-flex col mt-2" required>
                      <div className="form-check">
                        <label
                          className="form-check-label"
                          style={{ fontSize: "1.1vw" }}
                        >
                          زن
                        </label>
                        <input
                          className="justify-content-right form-check-input"
                          type="radio"
                          name="gridRadios"
                        />
                      </div>
                      <div className="form-check">
                        <label
                          className="form-check-label me-5"
                          style={{ fontSize: "1.1vw" }}
                        >
                          مرد
                        </label>
                        <input
                          className="justify-content-right form-check-input"
                          type="radio"
                          name="gridRadios"
                        />
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>

          <div className="container w-75 p-3 mb-4">
            <div className="justify-content-center mt-0 mx-0">
              <div className="d-flex">
                <div className="mx-1">
                  <ResetButton />
                </div>
                <div className="mx-1">
                  {/* <Button width= 'auto' height= 'auto' text= 'ثبت‌نام به عنوان هنرمند' fontSize='1.17vw'  />  */}

                  <button
                    style={{
                      width: "100%",
                      height: "33px",
                      fontSize: "1.3vw",
                      backgroundColor: "#BB1542",
                      border: "none",
                      borderRadius: "5px",
                      color: "#fff",
                    }}
                    type="submit"
                  >
                    {" "}
                    ثبت‌نام به عنوان هنرمند{" "}
                  </button>

                  {/* reference=''*/
                  /*sholde use axios library for connect backend in next edit */}
                </div>
                <div className="mx-1 ">
                  {/* <Button width= 'auto' height= 'auto' text= 'ثبت‌نام به عنوان کارشناس' fontSize='1.17vw' /> */}
                  {/* reference=''*/
                  /*sholde use axios library for connect backend in next edit */}
                </div>
              </div>
            </div>
          </div>
        </form>
        <Footer />
      </div>
    </div>
  );
};

export default ArtistSignUp;
