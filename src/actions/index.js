'use strict';
import types from './types';

export function typing(char) {
  return {type: types.TYPING, char: char};
}

export function reloadChars(count) {
  return {type: types.RELOAD_CHARS, count: count};
}