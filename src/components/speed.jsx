import React, {Component} from "react";

export default class Speed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {finished, startTime, finishTime, charCount} = this.props;
    if (finished) {
      const timeInMinutes = finishTime.diff(startTime) / (1000 * 60);
      const speed = Math.floor(charCount / timeInMinutes);
      return <div className="speed">
        <div>Finished</div>
        <div>{speed} chars per minutes</div>
      </div>
    } else {
      return <div/>;
    }
  }
}