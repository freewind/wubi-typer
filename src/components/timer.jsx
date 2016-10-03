import React, {Component} from "react";
import moment from 'moment';

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elapsedTime: moment().diff(props.startTime)
    }
  }

  componentDidMount() {
    this.timer = setInterval(this._onTick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  _onTick() {
    const {startTime} = this.props;
    if (!this.props.finished) {
      this.setState({
        elapsedTime: moment().diff(startTime)
      })
    }
  }

  render() {
    const {elapsedTime} = this.state;
    return <div> { moment(elapsedTime).format('mm:ss') } </div>;
  }
}