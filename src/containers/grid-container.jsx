'use strict';
import Grid from '../components/grid.jsx';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

function mapStateToProps(state) {
  return {
    chars: state.chars
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onTyping: (char) => dispatch(actions.typing(char)),
    reloadChars: (count) => dispatch(actions.reloadChars(count))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
