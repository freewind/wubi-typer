import React, {Component} from 'react';
import Word from './word.jsx';
import _ from 'lodash';

class Container extends Component {
  render() {
    const {columns, words} = this.props;
    return <div> {
      _.chunk(words, columns).map((wordsInRow, row) => {
        return <div key={row}> {
          wordsInRow.map((word, column) => {
            return <Word content={word} key={row + '-' + column}/>;
          })
        } </div>
      })
    } </div>;
  }
}

export default Container;