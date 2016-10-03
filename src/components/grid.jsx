import React, {Component} from 'react';
import Char from './char.jsx';
import TimerContainer from '../containers/timer-container.jsx';
import SpeedContainer from '../containers/speed-container.jsx';
import CorrectRateContainer from '../containers/correct-rate-container.jsx';
import './grid.less';

export default class Grid extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {count} = this.props;
    this.props.reloadChars(count);
    document.body.onkeypress = this._onKeyPress.bind(this);
  }

  componentWillUnmount() {
    document.body.onkeypress = undefined;
  }

  render() {
    const {finished, chars} = this.props;
    return <div>
      <div>{
        chars.map((char, index) => <Char content={char} key={index}/>)
      } </div>
      <div className="footer">
        {
          finished ? <div>
            <div>Finished!</div>
            <SpeedContainer />
            <CorrectRateContainer />
          </div> : <div />
        }
        <TimerContainer />
      </div>
    </div>;
  }

  _onKeyPress(event) {
    this.props.onTyping(event.key);
  }
};