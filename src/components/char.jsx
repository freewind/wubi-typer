import React, {Component} from 'react';
import './char.less';

class Char extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charState: 'waiting'
    }
  }

  render() {
    const stateStyleMapping = {};
    const {char, image, typingState} = this.props.content;
    return <span className={'char ' + typingState} style={stateStyleMapping[typingState]}>
      <img src={image} title={char}/>
		</span>;
  }
}

export default Char;