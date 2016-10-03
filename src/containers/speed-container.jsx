'use strict';
import Speed from '../components/speed.jsx';
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {
    startTime: state.startTime,
    finishTime: state.finishTime,
    charCount: state.chars.length
  };
}

export default connect(mapStateToProps)(Speed);
