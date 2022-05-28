import axios from "axios";
import { Component, useState } from "react";
import { Route } from "react-router-dom";
import { instance } from "../../api/InstanceAPI";
// import InputText from '../input_form';

const url2 =
  "http://hidden.pythonanywhere.com/advertisment/create_advertisements/";

const SetArtworkAdInfo = () => {
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [method, setMethod] = useState("");
  const [materials, setMaterials] = useState("");
  const [date_created, setDate_created] = useState("");
  const [cost, setCost] = useState("");
	const [description, setDescription] = useState("");

	const [ad, setAd] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(email);
    try {
      const res = await axios.post(url2, {
        name,
        size,
        method,
        materials,
        date_created,
        cost,
				description,
      });
      console.log(res);
    } catch (e) {
      console.log(e.response);
    }
  };


	const handleCreate = async () => {
		const newAd = {
			name: {name},
			size: {size},
			method: {method},
			materials: {materials},
			date_created: {date_created},
			cost: {cost},
			description: {description}
		}
		const res = await instance.post("advertisment/create_advertisementes", newAd)
		setName(...name, newAd)
		setSize (...size, newAd)
		setMethod (...method, newAd)
		setMaterials (...materials, newAd)
		setDate_created (...date_created, newAd)
		setCost (...cost, newAd)
		setDescription (...description, newAd)
	}
 
  return (
    <div className="row g-0 position-relative" dir="LTR">
      <div className="col-md-6 mb-md-0 p-md-4">
        <input
          type="file"
          className="form-control-file"
          style={{
            width: "23vw",
            height: "23vw",
            border: "0.11vw solid #e1e1e1",
            borderRadius: "0.2vw",
          }}
        />
      </div>

      <form onSubmit={handleSubmit} className="col-md-6 p-4 ps-md-0" dir="RTL">
        <div className="row justify-content-center">
          <div className="row mb-2">
            <div className="col row ">
              <label
                htmlFor="name"
                className="col-4 col-form-label"
                style={{ fontSize: "1.1vw" }}
              >
                نام اثر
              </label>
              <div className="col-8">
                <input
                  className="form-input"
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col row ">
              <label
                htmlFor="size"
                className="col-4 col-form-label"
                style={{ fontSize: "1.1vw" }}
              >
                ابعاد اثر
              </label>
              <div className="col-8">
                <input
                  className="form-input"
                  id="size"
                  type="text"
                  placeholder="80*50 سانتی‌متر"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col row ">
              <label
                htmlFor="style"
                className="col-4 col-form-label"
                style={{ fontSize: "1.1vw" }}
              >
                سبک کار
              </label>
              <div className="col-8">
                <input
                  className="form-input"
                  id="style"
                  type="text"
                  value={method}
                  onChange={(e) => setMethod(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col row ">
              <label
                htmlFor="material"
                className="col-4 col-form-label"
                style={{ fontSize: "1.1vw" }}
              >
                متریال استفاده شده
              </label>
              <div className="col-8">
                <input
                  className="form-input"
                  id="material"
                  type="text"
                  value={materials}
                  onChange={(e) => setMaterials(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col row">
              <label
                htmlFor="date"
                className="col-4 col-form-label"
                style={{ fontSize: "1.1vw" }}
              >
                تاریخ ایجاد اثر
              </label>
              <div className="col-8">
                <input
                  className="form-input"
                  id="date"
                  type="date"
                  value={date_created}
                  onChange={(e) => setDate_created(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="row mb-2 form-group">
            <label
              htmlFor="desc"
              style={{ marginBottom: "2%", fontSize: "1.1vw" }}
            >
              توضیحات تکمیلی
            </label>
            <textarea
              className="col-4 form-control"
              id="desc"
              rows="3"
              style={{ width: "85%", marginRight: "7%" }}
							onChange={(e) => setDescription(e.target.value)}

            ></textarea>
          </div>

          <div>
            <div className="row mb-2">
              <div className="col row">
                <label
                  htmlFor="cost"
                  className="col-4 col-form-label"
                  style={{
                    marginRight: "0%",
                    marginLeft: "-0.1vw",
                    fontSize: "1.1vw",
                  }}
                >
                  قیمت
                </label>
                <div
                  className="col-8"
                  style={{ width: "64%", fontSize: "1.1vw" }}
                >
                  <input
                    className="form-input"
                    id="cost"
                    type="text"
                    placeholder="تومان"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            style={{
              width: "50%",
              height: "33px",
              fontSize: "1.3vw",
              backgroundColor: "#BB1542",
              border: "none",
              borderRadius: "5px",
              color: "#fff",
            }}
            type="submit"
						onClick={() => {this.handleEdit(ad)}}
          >
            {" "}
            ثبت‌{" "}
        </button>
        </div>
      </form>
    </div>
  );
};

export default SetArtworkAdInfo;
