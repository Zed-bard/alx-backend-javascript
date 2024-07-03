# TypeScript

This project contains tasks for learning to use TypeScript.

## Tasks To Complete

### 0. Creating an Interface for a Student

| Description                                                                                                         | File                           |
|---------------------------------------------------------------------------------------------------------------------|--------------------------------|
| Write an interface named `Student` that accepts the following elements: `firstName(string)`, `lastName(string)`, `age(number)`, and `location(string)`. | [task_0/js/main.ts](task_0/js/main.ts) |
| Create two students, and create an array named `studentsList` containing the two variables.                         |                                |
| Using Vanilla JavaScript, render a table and for each element in the array, append a new row to the table.         |                                |
| Each row should contain the first name of the student and the location.                                             |                                |
| When running, Webpack should return `No type errors found`.                                                         |                                |
| Every variable should use TypeScript when possible.                                                                 |                                |

### 1. Let's Build a Teacher Interface

| Description                                                                                                         | File                           |
|---------------------------------------------------------------------------------------------------------------------|--------------------------------|
| Define a `Teacher` interface with `firstName(string)` and `lastName(string)` which are modifiable only when initialized. | [task_1/js/main.ts](task_1/js/main.ts) |
| Add `fullTimeEmployee(boolean)` which is always defined, `yearsOfExperience(number)` which is optional, and `location(string)` which is always defined. |                                |
| Allow adding any attribute to the `Teacher` object without specifying the name of the attribute.                     |                                |

### 2. Extending the Teacher Class

| Description                                                                                                         | File                           |
|---------------------------------------------------------------------------------------------------------------------|--------------------------------|
| Write an interface named `Directors` that extends `Teacher` and requires an attribute named `numberOfReports(number)`. | [task_1/js/main.ts](task_1/js/main.ts) |

### 3. Printing Teachers

| Description                                                                                                         | File                           |
|---------------------------------------------------------------------------------------------------------------------|--------------------------------|
| Write a function `printTeacher` that accepts `firstName` and `lastName` and returns the first letter of `firstName` and the full `lastName`. | [task_1/js/main.ts](task_1/js/main.ts) |
| Example: `printTeacher("John", "Doe") -> J. Doe`.                                                                   |                                |

### 4. Writing a Class

| Description                                                                                                         | File                           |
|---------------------------------------------------------------------------------------------------------------------|--------------------------------|
| Write a class named `StudentClass` that implements the `Student` interface.                                         | [task_2/js/main.ts](task_2/js/main.ts) |
| The class should have a constructor that accepts `firstName`, `lastName`, and `location` as parameters and initializes these properties. |                                |
| The class should have a method named `displayName` that returns the first name of the student.                      |                                |

### 5. Advanced Types Part 1

| Description                                                                                                         | File                           |
|---------------------------------------------------------------------------------------------------------------------|--------------------------------|
| Create a function `createStudent` that accepts `firstName` and `lastName` and returns an object that includes `firstName`, `lastName`, and an optional `age` property. | [task_3/js/main.ts](task_3/js/main.ts) |
| Use TypeScript's advanced types like `Partial` and `Pick` to ensure the function works as expected.                  |                                |

### 6. Advanced Types Part 2

| Description                                                                                                         | File                           |
|---------------------------------------------------------------------------------------------------------------------|--------------------------------|
| Create a type alias `Subjects` which can be one of `Math` or `History`.                                             | [task_4/js/main.ts](task_4/js/main.ts) |
| Create a function `teachClass` that accepts a `todayClass` parameter of type `Subjects` and returns a string message indicating what subject is being taught. |                                |

### 7. Generics

| Description                                                                                                         | File                           |
|---------------------------------------------------------------------------------------------------------------------|--------------------------------|
| Create a function `printArray` that accepts an array of any type and prints each element of the array.              | [task_5/js/main.ts](task_5/js/main.ts) |
| Use TypeScript generics to ensure the function works with any type of array.                                        |                                |

### 8. Utility Types

| Description                                                                                                         | File                           |
|---------------------------------------------------------------------------------------------------------------------|--------------------------------|
| Create a function `updateStudent` that accepts a `Student` object and updates one or more of its properties using TypeScript's `Partial` utility type. | [task_6/js/main.ts](task_6/js/main.ts) |

### 9. Enums and Interfaces

| Description                                                                                                         | File                           |
|---------------------------------------------------------------------------------------------------------------------|--------------------------------|
| Define an enum `Grades` with values `A`, `B`, `C`, `D`, and `F`.                                                    | [task_7/js/main.ts](task_7/js/main.ts) |
| Define an interface `StudentWithGrade` that extends `Student` and includes a `grade` property of type `Grades`.     |                                |

### 10. Namespaces

| Description                                                                                                         | File                           |
|---------------------------------------------------------------------------------------------------------------------|--------------------------------|
| Create a namespace `School` and within it, define a class `Teacher` with properties and methods as needed.          | [task_8/js/main.ts](task_8/js/main.ts) |

---
