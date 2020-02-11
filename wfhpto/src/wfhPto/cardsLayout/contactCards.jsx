import React, { Component } from "react";
import ImageRender from "./avtarDetails";
class cards extends Component {
  radioChange = (e, index) => {
    this.props.onUpdateDetails(e, index);
  };
  render() {
    let details = this.props.cardDetails;
    return (
      <>
        {details.map((detailList, outerIndex) => (
          <div className="row">
            {detailList.map((detail, innerIndex) => (
              <div className="card1">
                <div className="innerCard">
                  <div className="cardDetails">
                    <div className="text-center width50 float-left">
                      <ImageRender gender={detail.gender} />
                      <figcaption>
                        <b>{detail.name}</b>
                      </figcaption>
                      Status :
                      <span className="status-value"> {detail.value}</span>
                    </div>
                    <div className="float-right width50">
                      <div className="buttonDetails text-center">
                        <div className="Wfh-Btn ">
                          <input
                            type="radio"
                            name={detail.name}
                            onClick={(event, i) =>
                              this.radioChange(
                                event,
                                4 * outerIndex + innerIndex
                              )
                            }
                            value="wfh"
                            id="wfh"
                          />
                          <label htmlFor="wfh" className="wfhImg" />
                          <div className="labelName">WFH</div>
                        </div>
                        <div className="Pto-Btn ">
                          <input
                            type="radio"
                            name={detail.name}
                            onClick={(event, i) =>
                              this.radioChange(
                                event,
                                4 * outerIndex + innerIndex
                              )
                            }
                            value="pto"
                            id="pto"
                          />
                          <label htmlFor="pto" className="ptoImg" />
                          <div className="labelName">PTO</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </>
    );
  }
}

export default cards;
