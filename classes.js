// you must create an instance of the object before you can use the included methods

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

let myCar = new Car("Ford", 2014);  // creates a new object, mycar
myCar.age(); // calls method to calculate age based on current date.


// Class with static method - methods do not necessarily need an instance of the object.

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
  static alert() {
    alert("this is an alert");
  }
}

Car.alert(); // calls the alert method without requiring an instance (object) being created.









