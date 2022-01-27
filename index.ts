// 1.	Create class, which	extends	from an	AbstractClass
// 2.	Apply interfaces to	class, it's method, property
// 3.	Use	generics there

namespace PersonInterface {
  export interface ArgsLength {
    length: number;
  }
}

let c: PersonInterface.ArgsLength;

abstract class AbstractClass {
  firstName: string;
  lastName: string;
  age: number;
  yearsInWork: number;

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    yearsInWork: number
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.yearsInWork = yearsInWork;
  }
  protected abstract getSalary(factor: number): number;
  protected abstract getFullName(): string;
}

class Person extends AbstractClass {
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    yearsInWork: number
  ) {
    super(firstName, lastName, age, yearsInWork);
  }

  getSalary(factor: number): number {
    return Math.round((this.yearsInWork * (this.age / 2) * 100) / factor);
  }
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  setFactor<T extends PersonInterface.ArgsLength>(args: T): number {
    return args.length;
  }
}

let firstPerson = new Person("Robert", "Turle", 51, 2);
let factor = firstPerson.setFactor({ length: 2 });
console.log("Person's full name:", firstPerson.getFullName());
console.log("Person's salary", firstPerson.getSalary(factor));

// 4.	Analyze	transpiled	code in	ES5	and	explain	it (in `transpiledCode.js file)



