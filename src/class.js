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
