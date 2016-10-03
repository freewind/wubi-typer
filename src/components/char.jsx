import React, {Component} from 'react';

class Char extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charState: 'waiting'
    }
  }

  render() {
    const stateStyleMapping = {
      'waiting': {
        backgroundColor: 'white'
      },
      'correct': {
        backgroundColor: 'green'
      },
      'wrong': {
        backgroundColor: 'red'
      }
    };
    const {char, typed} = this.props.content;
    return <span style={stateStyleMapping[typed]}>
		  {char}
		</span>;
  }
}

export default Char;