import { Component, useEffect, useState } from "react";
import Button from "../components/button";
import InputText from "../components/input_form";
import HorizontalLine from "../components/horizontalLine/horizontalLine";
import { instance } from "../api/InstanceAPI";
import axios from "axios";

const url3 =
  "http://hidden.pythonanywhere.com/artist_profile/artist_experience/save";

const Resume = () => {
  const [artisticBackground, setartisticBackground] = useState("");
  const [workStyle, setWorkStyle] = useState("");
  const [experience, setExperience] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(name, email);
    try {
      const res = await axios.post(url3, {
        artisticBackground,
        workStyle,
        experience,
      });

      console.log(res);
      console.log("data: ", res);
    } catch (e) {
      console.log(e.response);
    }
  };

  return (
    <div>
      <HorizontalLine value="سوابق کاری" />
      <form onSubmit={handleSubmit}>
        <div className="container w-75 p-3 p-3 rounded mb-5">
          <div
            className="row justify-content-center"
            style={{ backgroundColor: "#F9FFFF" }}
          >
            <div className="row mb-2">
              <div className="col row ">
                <label
                  className="col-4 col-form-label"
                  htmlFor="background"
                  style={{ fontSize: "1.1vw" }}
                >
                  زمینه هنری
                </label>
                <div className="col-4">
                  <input
                    className="form-input"
                    id="background"
                    type="text"
                    value={artisticBackground}
                    onChange={(e) => setartisticBackground(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="row mb-2">
              <div className="col row">
                <label
                  htmlFor="workstyle"
                  className="col-4 col-form-label"
                  style={{ fontSize: "1.1vw" }}
                >
                  سبک کاری
                </label>
                <div className="col-4">
                  <input
                    className="form-input"
                    id="workstyle"
                    type="text"
                    value={workStyle}
                    onChange={(e) => setWorkStyle(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="row mb-2">
              <div className="col row ">
                <label
                  htmlFor="exp"
                  className="col-4 col-form-label"
                  style={{ fontSize: "1.1vw" }}
                >
                  سابقه فعالیت
                </label>
                <div className="col-4">
                  <input
                    className="form-input"
                    id="exp"
                    type="text"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    placeholder="سال"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-2">
            <div className="justify-content-center mt-0 mx-0">
              <div className="d-flex">
                <div className="mx-3">
                  <button
                    style={{
                      width: "auto",
                      height: "auto",
                      fontSize: "1.2vw",
                      padding: "0.5rem 2rem",
                      backgroundColor: "#BB1542",
                      border: "none",
                      borderRadius: "5px",
                      color: "#fff",
                    }}
                    type="submit"
                  >
                    ثبت‌
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Resume;
