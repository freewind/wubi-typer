import React, {Component} from "react";

export default class Speed extends Component {

  render() {
    const {startTime, finishTime, charCount} = this.props;
    const timeInMinutes = finishTime.diff(startTime) / (1000 * 60);
    const speed = Math.floor(charCount / timeInMinutes);
    return <div>{speed} chars per minute</div>;
  }

}