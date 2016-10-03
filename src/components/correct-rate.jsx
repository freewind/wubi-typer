import React, {Component} from "react";

export default class CorrectRate extends Component {
  render() {
    const {correctCount, totalCount} = this.props;
    const rate = correctCount / totalCount * 100;
    return <div>
      <div>Correct Rate: {rate.toFixed(2)} %</div>
    </div>
  }
}