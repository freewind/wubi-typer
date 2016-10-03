import React, {Component} from 'react';
import Word from './word.jsx';
import _ from 'lodash';

class Container extends Component {

  componentWillMount() {
    document.body.onkeypress = this._onKeyPress;
  }

  componentWillUnmount() {
    document.body.onkeypress = undefined;
  }

  render() {
    const {columns, words} = this.props;
    return <div onKeyPress={this._onKeyPress.bind(this)}> {
      _.chunk(words, columns).map((wordsInRow, row) => {
        return <div key={row}> {
          wordsInRow.map((word, column) => {
            return <Word content={word} key={row + '-' + column}/>;
          })
        } </div>
      })
    } </div>;
  }

  _onKeyPress(event) {
    alert(event.key);
  }
}

export default Container;