1. object : {} has properties and methods
const Person={name:'Skye', age: 12}

2. this :In an object method, this refers to the "owner"(object) of the method.

const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
 this refers to person; and this refers to caller
 const Alice={
     name:'Alice',
     getName:function(){
         return this.name;
     }
 }

Alice.getName( ) // Alice
const Bob={ }
Bob.name='Bob';
Bob.getName=Aloce.getName
Bob.getName( )//Bob , this refers to caller 
getName( )//underfined

3. const alice={
    name:'alice',
    brother:{
        name:'bob',
        getName:function ( ){ return this.name}
    }
}

alice.brother.getName( )/ bob

however, if :
const alice={
    name:'alice',
    brother:{
    
        getName:function ( ){ return this.name}
    }
}
alice.brother.getName( ) //undefined
this only cares about the caller


4. class: Use the keyword class to create a class, Always add a method named constructor():

class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  }
  class ClassName {
    constructor() { ... }
    method_1() { ... }
    method_2() { ... }
    method_3() { ... }
  }

  class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
    age() {
      let date = new Date();
      return date.getFullYear() - this.year;
    }
  }
  
let myCar = new Car("Ford", 2014);

5. solid principle : reusable, readable, maintainable
6. webpack  and babel 
7. Flexbox and responsive 
8. CLass use this.props instead of props , the constructor: initialize and define your state
define state using constructor.
constructor( ) { this.state={showUser: true }} // using class, the state must be an object

if you want to change the state, this.setState( )

