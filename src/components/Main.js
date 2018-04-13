import React, { Component } from "react";
import { render } from "react-dom";
import { Body } from "./Body.js";
import { AllItems } from "./AllItems.js";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      displayState: "ShowBody"
    };
    this.showAll = this.showAll.bind(this);
  }

  showAll() {
    console.log("showAll Fired!");
    this.setState({
      displayState: "ShowAll"
    });
  }

  showBody() {
    console.log("showBody Fired!");
    this.setState({
      displayState: "ShowBody"
    });
  }

  getContent() {
    console.log("getContent Fired!");
    if (this.state.displayState == "ShowBody") {
      return <Body showAll={this.showAll.bind(this)}/>;
    } else {
      console.log("getContent Else Fired!");
      return <AllItems />;
    }
  }

  render() {
    return (
      <div>
        <button className="button primary medium center-object" onClick={this.showAll.bind(this)}>
          Main Show All
        </button>
        <button className="button primary medium center-object" onClick={this.showBody.bind(this)}>
          Main Show Body
        </button>
        { this.getContent() }
      </div>
    )
  }
}

export default Main;
