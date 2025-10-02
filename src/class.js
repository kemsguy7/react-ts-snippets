class Person {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

let Matthew = new Person('Matthew');
console.log(Matthew.getName());
console.log(typeof Person);
