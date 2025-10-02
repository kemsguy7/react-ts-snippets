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
