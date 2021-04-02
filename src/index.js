import _ from 'lodash'
import { NAME, NiJou } from './utilities'
import * as utilities from './utilities'
import Tiger from './utilities'

console.log(NiJou(13))
console.log(NAME)
console.log(utilities.NAME)
console.log(utilities.NiJou(12))
console.log(Tiger.say())

function component() {
  const element = document.createElement('div');
  const array = ['Hello', 'webpack', '!!'];
  element.innerHTML = _.join(array, ' ');
  return element;
}

document.body.appendChild(component());

