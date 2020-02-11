import React, { Component } from "react";
import Card from "./contactCards";

class layout extends Component {
  chunkArray = (myArray, chunk_size) => {
    var index = 0;
    var arrayLength = myArray.length;
    var reqdArray = [];

    for (index = 0; index < arrayLength; index += chunk_size) {
      var tempArray = myArray.slice(index, index + chunk_size);

      reqdArray.push(tempArray);
    }

    return reqdArray;
  };

  render() {
    let details = this.chunkArray(this.props.details.dataList, 4);
    return (
      <div className="col-md-12">
        <Card cardDetails={details} onUpdateDetails={this.props.UpdateStatus} />
      </div>
    );
  }
}

export default layout;
