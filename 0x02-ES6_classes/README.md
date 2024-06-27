# ES6 Classes

This project contains tasks for learning to use classes in ECMAScript 2015 (ES6).

## Main Topics

1. **Class Definition and Instantiation**
    - How to define a class using the `class` keyword.
    - Creating instances of classes using the `new` keyword.

2. **Constructor Method**
    - The role of the constructor method in initializing object properties.
    - How to define and use constructor parameters.

3. **Class Methods**
    - How to define methods within a class.
    - Instance methods vs. static methods.

4. **Getters and Setters**
    - How to define getter and setter methods to access and modify properties.
    - The benefits of using getters and setters for encapsulation.

5. **Inheritance**
    - How to create a class that inherits from another class using the `extends` keyword.
    - The `super` keyword to call the constructor and methods of the parent class.

6. **Static Methods**
    - Definition and use of static methods that belong to the class itself rather than any instance.

7. **Abstract Classes and Methods**
    - Concept of abstract classes and how to enforce implementation in derived classes.
    - Throwing errors in abstract methods.

8. **Method Overriding**
    - How to override methods in a subclass.
    - The importance of method overriding in polymorphism.

9. **Encapsulation**
    - Using private fields and methods to restrict access to certain class properties and methods.

10. **Type Checking and Data Validation**
    - Ensuring correct data types are assigned to class properties.
    - Implementing data validation within setters.

## Tasks To Complete

| Task Number | Task Name | Description |
| ----------- | --------- | ----------- |
| 0 | **You used to attend a place like this at some point** | [0-classroom.js](0-classroom.js) exports a class named `ClassRoom` that accepts one attribute `maxStudentsSize` and assigns it to `_maxStudentsSize`. |
| 1 | **Let's make some classrooms** | [1-make_classrooms.js](1-make_classrooms.js) exports a function `initializeRooms` that returns an array of 3 `ClassRoom` objects with sizes 19, 20, and 34. |
| 2 | **A Course, Getters, and Setters** | [2-hbtn_course.js](2-hbtn_course.js) exports a class named `HolbertonCourse` that accepts `name`, `length`, and `students` as attributes. It includes getters and setters for each attribute and verifies the type of attributes during object creation. |
| 3 | **Methods, static methods, computed methods names..... MONEY** | [3-currency.js](3-currency.js) exports a class named `Currency` that accepts `code` and `name` as attributes. It includes getters and setters for each attribute and a method `displayFullCurrency` that returns the attributes in the format `name (code)`. |
| 4 | **Pricing** | [4-pricing.js](4-pricing.js) exports a class named `Pricing` that accepts `amount` and `currency` as attributes. It includes getters and setters for each attribute, a method `displayFullPrice` that returns the attributes in the format `amount currency_name (currency_code)`, and a static method `convertPrice` that returns the amount multiplied by the conversion rate. |
| 5 | **A Building** | [5-building.js](5-building.js) exports a class named `Building` that accepts `sqft` as an attribute. It includes a getter for the attribute and is considered an abstract class that requires subclasses to implement an `evacuationWarningMessage` method. |
| 6 | **Inheritance** | [6-sky_high.js](6-sky_high.js) exports a class named `SkyHighBuilding` that extends `Building`. It accepts `sqft` and `floors` as attributes, includes getters for each attribute, and overrides the `evacuationWarningMessage` method to return `Evacuate slowly the NUMBER_OF_FLOORS floors`. |
| 7 | **Airport** | [7-airport.js](7-airport.js) exports a class named `Airport` that accepts `name` and `code` as attributes. It includes a default string description that returns the airport `code`. |
| 8 | **Primitive - Holberton Class** | [8-hbtn_class.js](8-hbtn_class.js) exports a class named `HolbertonClass` that accepts `size` and `location` as attributes. When cast into a `Number`, it returns the size, and when cast into a `String`, it returns the location. |
| 9 | **Hoisting** | [9-hoisting.js](9-hoisting.js) contains a fixed and working copy of the provided code that includes two classes: `HolbertonClass` and `StudentHolberton`. The `HolbertonClass` class accepts `year` and `location` as attributes, while the `StudentHolberton` class accepts `firstName` and `lastName` as attributes and includes getters for `fullName`, `holbertonClass`, and `fullStudentDescription`. |
| 10 | **Vroom** | [10-car.js](10-car.js) exports a class named `Car` that accepts `brand`, `motor`, and `color` as attributes. It includes a method `cloneCar` that returns a new object of the class. |
| 11 | **EVCar** | [100-evcar.js](100-evcar.js) exports a class named `EVCar` that extends `Car`. It accepts `brand`, `motor`, `color`, and `range` as attributes. For privacy reasons, when `cloneCar` is called on an `EVCar` object, the object returned is an instance of `Car` instead of `EVCar`. |

## Author

Zerihun Shiferaw (GitHub: [Zed-bard](https://github.com/Zed-bard))
