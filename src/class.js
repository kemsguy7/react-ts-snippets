class Person {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setName(newName) {
    newName = newName.trim();
    if (newName === '') {
      throw 'Then name cannot be empty';
    }
    this.name = newName;
  }
}

let person = new Person('Matthew');
console.log(person.getName());

console.log('Setting New Name');
person.setName(' Matthew Idungafa ');
console.log(person.getName());

// ES6 Getter and setter syntax
class Person2 {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    newName = newName.trim();
    if (newName === '') {
      throw 'Cannot be empty';
    }
    this._name = newName;
  }
}

let person2 = new Person2('Ekemini');
console.log(person2.name);

console.log('Setting New Name');
person2.name = ' Ekemini Idungafa ';
console.log(person2.name);

//using getter in an object Literal
let meeting = {
  attendees: [],
  add(attendee) {
    console.log(`${attendee} joined the meeting`);
    this.attendees.push(attendee);
    return this;
  },
  get lastest() {
    let count = this.attendees.length;
    return count == 0 ? undefined : this.attendees[count - 1];
  },
};

meeting.add('John').add('Jane').add('Matthew');
console.log(`Latest Attendee: ${meeting.lastest}`);

// CLASS EXPRESSION
//does not require an identifier (name) after the class keyword
let Person3 = class {
  constructor(name) {
    this.name = name;
  }
};
//create a new instance, same as class declaration
let person3 = new Person3('Ekemini');
console.log(person3.name);

function factory(aClass) {
  return new aClass();
}

let greeting = factory(
  class {
    sayHi() {
      console.log('Hi');
    }
  },
);

greeting.sayHi();

//SINGLETION PATTERN
// Design pattern that limits the instantiatio of a class to a single instance .  Ensures that only one instance of a class can be created throughout the system
/*
- To implement this, you use the new operator with a class operation and include the parentheses at the end of the class declaration 
*/

let app = new (class {
  constructor(name) {
    this.name = name;
  }
  start() {
    console.log(`Starting the ${this.name} application...`);
  }
})('MyApp');

app.start();

/** computed properties
 *
 *  Allows  you to create objects dynamically using an expression in square brackets []
 */

//syntax
// let propName = 'propertyName';
// const obj = {
//   [propName]: value
// }; access with obj.propertyName or obj['propertyName']

// basic javaScript example
let propName = 'c';

const rank = {
  a: 1,
  b: 2,
  [propName]: 3,
};

console.log(rank[propName]);
console.log(rank.c);
//both return 3

//using computed properties in a class
const name = 'fullName';

class Person4 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get [name]() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let person4 = new Person4('Ekemini', 'Idungafa');
console.log(person4.fullName);
console.log(person4[name]);
//both return Ekemini Idungafa

// creating an object from a key/value pair
const createObject = (key, value) => {
  return {
    [key]: value,
  };
};
const one = createObject('name', 'Ekemini');
console.log(one); // { name: 'Ekemini' }

//without computed values, you'll write it this way
const createObject2 = (key, value) => {
  let obj = {};
  obj[key] = value;
  return obj;
};

const one2 = createObject2('name', 'Ekemini2');
console.log(one2); // { name: 'Ekemini' }
