import React, { Component } from "react";
import appDevelopment from "../../assests/images/appDevelopment.png";

export default class DataScienceImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {/* JSX content goes here */}
        <img
              src={appDevelopment}
              alt="Mobile Application Framework"
              width="500"
              height="300"
              //style={{ borderRadius: "80%" }} // Add any additional styling as needed
            />
      </div>
    );
  }
}
