import _ from 'lodash';
import charsMapping from './chars-mapping';

const charPairs = _(charsMapping).map((images, char) => images.map(image => {
  return {char, image}
})).flatten().value();

export default function () {
  const randomIndex = Math.floor(Math.random() * charPairs.length);
  return charPairs[randomIndex];
};