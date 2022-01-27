"use strict";
// 1.	Create class, which	extends	from an	AbstractClass
// 2.	Apply interfaces to	class, it's method, property
// 3.	Use	generics there
let c;
class AbstractClass {
    constructor(firstName, lastName, age, yearsInWork) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.yearsInWork = yearsInWork;
    }
}
class Person extends AbstractClass {
    constructor(firstName, lastName, age, yearsInWork) {
        super(firstName, lastName, age, yearsInWork);
    }
    getSalary(factor) {
        return Math.round((this.yearsInWork * (this.age / 2) * 100) / factor);
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    setFactor(args) {
        return args.length;
    }
}
let firstPerson = new Person("Robert", "Turle", 51, 2);
let factor = firstPerson.setFactor({ length: 3 });
console.log("Person's full name:", firstPerson.getFullName());
console.log("Person's salary", firstPerson.getSalary(factor));
// 4.	Analyze	transpiled	code in	ES5	and	explain	it (in `transpiledCode.js file)
