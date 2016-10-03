import React, {Component} from 'react';

class Word extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordState: 'waiting'
    }
  }

  render() {
    const stateStyleMapping = {
      'waiting': {
        backgroundColor: 'red'
      },
      'correct': {
        backgroundColor: 'yellow'
      },
      'wrong': {
        backgroundColor: 'blue'
      }
    };
    return <span style={stateStyleMapping[this.state.wordState]}>
		  {this.props.content}
		</span>;
  }
}

export default Word;