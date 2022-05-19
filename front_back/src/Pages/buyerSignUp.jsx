// import Button from "../components/button";
// import InputText from "../components/input_form";
import Breadcrumbb from "../components/breadcrumb";
import Navbar from "../components/navBar/navBar";
import Footer from "../components/Footer/footer";
import ResetButton from "../components/resetButton";

import {useState } from "react";
// import color from "../assets/images/color.png";
import axios from "axios";

// import { instance } from "../api/InstanceAPI";

const buyerURL = "https://hidden.pythonanywhere.com/users/register/customer";

const BuyerSighUp = () => {
 
  // function validateFormFields() {
  //     return password.length > 0 && names.length > 0 && phone.length > 0;

  // }

  const [names, setNames] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(buyerURL, {
        names,
        phone,
        password,
      });
      console.log(res);
    } catch (e) {
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
        third="به عنوان خریدار"
      />
      <div className="d-flex flex-column min-vh-100">
        <form style={{ marginTop: "auto" }}   onSubmit={handleSubmit}>
          <div className="container w-75 p-3 shadow mb-5 bg-white rounded">
            <div className="row justify-content-center">
              <div className="row mb-2">
                <div className="col row ">
                  <label
                    htmlFor="names"
                    className="col-4 col-form-label"
                    style={{ fontSize: "1.1vw" }}
                  >
                    نام و نام‌خانوادگی
                  </label>
                  <div className="col-8">
                    <input
                      type="text"
                      className="form-input"
                      id="names"
                      value={names}
                      onChange={(e) => setNames(e.target.value)}
                      style={{
                        width: "100%",
                        border: "1px solid #979797",
                        borderRadius: "5px",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>
                <div className="col row">
                  <label
                    htmlFor="phone"
                    className="col-sm-3 col-form-label mx-auto"
                    style={{ fontSize: "1.1vw" }}
                  >
                    شماره تماس
                  </label>
                  <div className="col-8">
                    <input
                      type="text"
                      className="form-input"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      style={{
                        width: "100%",
                        border: "1px solid #979797",
                        borderRadius: "5px",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="row mb-2">
                <div className="row col">
                  <label
                    htmlFor="password"
                    className="col-sm-4 col-form-label"
                    style={{ fontSize: "1.1vw" }}
                  >
                    رمز عبور
                  </label>
                  <div className="col-8">
                    <input
                      type="password"
                      className="form-input"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{
                        width: "100%",
                        border: "1px solid #979797",
                        borderRadius: "5px",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>
                <div className="row col">
                  <label
									   htmlFor="password2"
                    className="col-sm-3 col-form-label  mx-auto"
                    style={{ fontSize: "1.1vw" }}
                  >
                    تکرار رمز عبور
                  </label>
                  <div className="col-8">
                    {/* <input type="password" /> */}
										<input
                      type="password"
                      className="form-input"
                      id="password2"
                      style={{
                        width: "100%",
                        border: "1px solid #979797",
                        borderRadius: "5px",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container w-75 p-0">
            <div className="justify-content-center mt-0 mx-0">
              <div className="d-flex">
                <div className="mx-1">
                  <ResetButton />
                </div>
                <div className="mx-1">
                  <button
                    style={{
                      width: "auto",
                      height: "33px",
                      fontSize: "1.3vw",
                      backgroundColor: "#BB1542",
                      border: "none",
                      borderRadius: "5px",
                      color: "#fff",
                    }}
                    type="submit"
                  >
                    ثبت‌نام
                  </button>

                  {/* <Button
                    width="auto"
                    height="auto"
                    text="ثبت‌نام"
                    fontSize="1.17vw"
                  /> */}
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

export default BuyerSighUp;
