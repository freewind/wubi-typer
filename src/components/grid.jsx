import React, {Component} from 'react';
import Char from './char.jsx';
import _ from 'lodash';

export default class Grid extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const {rows, columns} = this.props;
    this.props.reloadChars(rows * columns);
    document.body.onkeypress = this._onKeyPress.bind(this);
  }

  componentWillUnmount() {
    document.body.onkeypress = undefined;
  }

  render() {
    const {rows, columns, chars} = this.props;
    return <div> {
      _.chunk(chars, columns).map((charsInRow, row) => {
        return <div key={row}> {
          charsInRow.map((char, column) => {
            return <Char content={char} key={row + '-' + column}/>;
          })
        } </div>
      })
    } </div>;
  }

  _onKeyPress(event) {
    this.props.onTyping(event.key);
  }
};