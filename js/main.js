'use strict';

var {color, position} = {
  color: 'Blue',
  name: 'John',
  state: 'New York',
  position: 'Forward'
}
console.log(color, position);

function generateObj() {
  return {
    color: 'Blue',
    name: 'John',
    state: 'New York',
    position: 'Forward'
  }
}

var {name, state} = generateObj();
console.log(name, state);

var people = [
  {
    firstName: 'Mihail',
    lastName: 'Sitnic',
    phone: '079-21-21-95',
    email: 'mihail.sitnic@gmail.com',
    adress: 'M.Spataru 13/2'
  },
  {
    firstName: 'Nicolai',
    lastName: 'Voronin',
    phone: '079-21-21-95',
    email: 'nicolai.voronin@gmail.com',
    adress: 'M.Vieru 11/1'
  },
  {
    firstName: 'Dmitrii',
    lastName: 'Lazucov',
    phone: '079-21-21-95',
    email: 'dmitrii.lazucov@gmail.com',
    adress: 'Puskin 22'
  },
  {
    firstName: 'Mihai',
    lastName: 'Ciobanu',
    phone: '079-21-21-95',
    email: 'mihail.ciobanu@gmail.com',
    adress: '31 August 10'
  },
]

var [,Nicolai] = people;
function logEmail({email}) {
  console.log(email);
}
logEmail(Nicolai);

people.forEach(({firstName}) => console.log(firstName));
