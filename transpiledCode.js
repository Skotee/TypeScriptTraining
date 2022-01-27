"use strict";
// 4.	Analyze	transpiled	code in	ES5	and	explain	it
   
//namespace doesn't exist in JS

let c; // only declaration of `c` left, `PersonInterface.ArgsLength` disappeared, because JS doesn't know about `PersonInterface` interface
class AbstractClass {
    constructor(firstName, lastName, age, yearsInWork) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.yearsInWork = yearsInWork;
    }
    // abstract getSalary and abstract getFullName disappeared, because there is no abstract methods implemented in Javascript 
}
class Person extends AbstractClass {
    constructor(firstName, lastName, age, yearsInWork) {
        super(firstName, lastName, age, yearsInWork);
    }
    getSalary(factor) { //type of `factor` and of returned value disappeared because javascript doesn't support static typing
        return (this.yearsInWork * (this.age / 2) * 100) / factor;
    }
    getFullName() { //javascript doesn't support static typing
        return `${this.firstName} ${this.lastName}`;
    }
    setFactor(args) { // since it knows type, which is 'length property of whatever' it doesn't need to exact type. Also, generics aren't supported in JS 
        return args.length;
    }
}
let firstPerson = new Person("Robert", "Turle", 51, 2);
let factor = firstPerson.setFactor({ length: 2 });
console.log("Person's full name:", firstPerson.getFullName());
console.log("Person's salary", firstPerson.getSalary(factor));

