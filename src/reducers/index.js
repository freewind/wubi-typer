'use strict';
import actionTypes from '../actions/types';
import generateChar from '../char-generator';

const initStore = {
  currentCharIndex: 0,
  chars: [] // [{char: String, image:String, typingState: 'waiting/correct/wrong'}]
};

function _handleTyping(state, action) {
  return Object.assign({}, state, {
    currentCharIndex: state.currentCharIndex + 1,
    chars: state.chars.map((item, index) => {
      if (index === state.currentCharIndex) {
        return Object.assign({}, item, {
          typingState: item.char.toLowerCase() === action.char.toLowerCase() ? 'correct' : 'wrong'
        });
      } else {
        return item;
      }
    })
  });
}

function _handleReloadChars(state, action) {
  return Object.assign({}, state, {
    currentCharIndex: 0,
    chars: _.fill(Array(action.count), {}).map(x => {
      const {char, image}= generateChar();
      return {
        char,
        image,
        typingState: 'waiting'
      }
    })
  });
}

export default function (state = initStore, action) {
  switch (action.type) {
    case actionTypes.TYPING:
      return _handleTyping(state, action);
    case actionTypes.RELOAD_CHARS:
      return _handleReloadChars(state, action);
    default:
      return state;
  }
};
