'use strict';
import Timer from '../components/timer.jsx';
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {
    startTime: state.startTime,
    finished: state.finished
  };
}

export default connect(mapStateToProps)(Timer);
