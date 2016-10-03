import React, {Component} from "react";
import Char from "./char.jsx";

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
    const {chars} = this.props;
    return <div> {
      chars.map((char, index) => <Char content={char} key={index}/>)
    } </div>;
  }

  _onKeyPress(event) {
    this.props.onTyping(event.key);
  }
};