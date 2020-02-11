import React, { Component } from "react";
import HydImg from "./Images/hyderabad.jpg";
import Noida from "./Images/noida.jpg";
import Ggn from "./Images/delhi.bmp";

const hydImgStyle = {
  width: "490px",
  height: "230px"
};
class home extends Component {
  submit = () => {
    console.log(this.region.value);
  };

  render() {
    return (
      <div className="col-md-12">
        <br />
        <h3 className="text-center">CPA Leave Tracking</h3>
        <br />
        <div className="row">
          <div className="col-md-4">
            <a href="/hyd">
              <img alt="hyderabad" style={hydImgStyle} src={HydImg} />
              <div className="col-md-12 text-center">
                <label className="text-center"> Hyderabad</label>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="/noida">
              <img alt="Noida" style={hydImgStyle} src={Noida} />
              <div className="col-md-12 text-center">
                <label className="text-center"> Noida </label>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="/ggn">
              <img alt="Gurgaon" style={hydImgStyle} src={Ggn} />
              <div className="col-md-12 text-center">
                <label className="text-center"> Gurgaon </label>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default home;
