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
