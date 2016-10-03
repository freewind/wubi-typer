'use strict';
import CorrectRate from '../components/correct-rate.jsx';
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {
    correctCount: state.chars.filter(char => char.typingState === 'correct').length,
    totalCount: state.chars.length
  };
}

export default connect(mapStateToProps)(CorrectRate);
