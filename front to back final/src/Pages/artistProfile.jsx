import { Component } from "react";
import Button from "../components/button";
import Breadcrumbb from "../components/breadcrumb";
import Navbar from "../components/navBar/navBar";
import Footer from "../components/Footer/footer";
import HorizontalLine from "../components/horizontalLine/horizontalLine";
import UserInformation from "../components/userInformation";
import Resume from "../components/resume";
import SetArtworkAdInfo from "../components/ArtworkAdInfo/SetArtworkAdInfo";
import ShowArtworkAdInfo from "../components/ArtworkAdInfo/showartworkAdInfo";
import { instance } from "../api/InstanceAPI";

class ArtistProfile extends Component {
  state = {
    profs: ["1"],
  };

  async componentDidMount() {
    const res = await instance.get("artist_profile/update/4");
    console.log(res);
    this.setState({ profs: res });
  }

  handleEdit = async (prof) => {
    const res = await instance.put(`artist_profile/update/4/${prof.id}`, prof);
    console.log("updated:", res);
    const updatedProf = [...this.state.profs];
    const index = updatedProf.indexOf(prof);
    updatedProf[index] = { ...prof };
    this.setState({ profs: updatedProf });
  };

  handleDelete = async (prof) => {
    const res = await instance.delete(`artist_profile/update/4/${prof.id}`);
    const newProfs = this.state.profs.filter((p) => p.id !== prof.id);
    this.setState({ profs: newProfs });
  };

  render() {
    return (
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <Breadcrumbb
          is2OrNot="true"
          first="حساب کاربری"
          second="اطلاعات حساب کاربری"
        />
        <UserInformation />
        <Resume />
        <HorizontalLine value="نمونه آثار" />
        <div className="container w-75 p-3 shadow p-3 bg-white rounded mb-5">
          <SetArtworkAdInfo />
          <div style={{ marginRight: "3.5%" }}>
            <Button
              width="auto"
              height="auto"
              text="ثبت"
              dir="LTR"
              fontSize="1.17vw"
            />
          </div>
        </div>
        <div className="container w-75 p-3 shadow p-3 bg-white rounded mb-5">
          {/* <ShowArtworkAdInfo/> */}

          {this.state.profs.map((prof, index) => {
            return (
              <div className="d-flex" style={{ marginRight: "3.5%" }}>
                <div className="ms-2"  key={index}>
                  <Button
                    width="auto"
                    height="auto"
                    text="ویرایش"
                    dir="LTR"
                    fontSize="1.17vw" 
										onClick={() => {this.handleEdit(prof)}} 
                  />
                </div>
								<div className="ms-2"  key={index+1}>
                <Button
                  width="auto"
                  height="auto"
                  text="حذف"
                  dir="LTR"
                  fontSize="1.17vw" 
									onClick={() => {this.handleDelete(prof)}}
                />
								</div>
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
    );
  }
}

export default ArtistProfile;
