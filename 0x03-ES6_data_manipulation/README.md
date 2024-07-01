# ES6 Data Manipulation

### This table lists the tasks related to ES6 data manipulation and provides a brief description of each task.
Here is a table summarizing each task with its description:

| Task Number | Task Name                 | File Name                       | Description                                                                                                                |
|-------------|---------------------------|---------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| 0           | Basic list of objects     | [0-get_list_students.js](0-get_list_students.js) | Exports a function `getListStudents` that returns an array of objects with `id`, `firstName`, and `location` attributes.      |
| 1           | More mapping              | [1-get_list_student_ids.js](1-get_list_student_ids.js) | Exports a function `getListStudentIds` that returns an array of ids from a list of objects, using the map function.           |
| 2           | Filter                    | [2-get_students_by_loc.js](2-get_students_by_loc.js) | Exports a function `getStudentsByLocation` that returns an array of objects located in a specific city, using the filter function. |
| 3           | Reduce                    | [3-get_ids_sum.js](3-get_ids_sum.js) | Exports a function `getStudentIdsSum` that returns the sum of all student ids, using the reduce function.                     |
| 4           | Combine                   | [4-update_grade_by_city.js](4-update_grade_by_city.js) | Exports a function `updateStudentGradeByCity` that returns an array of students for a specific city with their new grade.     |
| 5           | Typed Arrays              | [5-typed_arrays.js](5-typed_arrays.js) | Exports a function `createInt8TypedArray` that returns a new `ArrayBuffer` with an `Int8` value at a specific position.       |
| 6           | Set data structure        | [6-set.js](6-set.js) | Exports a function `setFromArray` that returns a `Set` from an array.                                                          |
| 7           | More set data structure   | [7-has_array_values.js](7-has_array_values.js) | Exports a function `hasValuesFromArray` that returns a boolean if all elements in the array exist within the set.             |
| 8           | Clean set                 | [8-clean_set.js](8-clean_set.js) | Exports a function `cleanSet` that returns a string of all set values starting with a specific string, separated by `-`.     |
| 9           | Map data structure        | [9-groceries_list.js](9-groceries_list.js) | Exports a function `groceriesList` that returns a map of groceries with specified items and quantities.                       |
| 10          | More map data structure   | [10-update_uniq_items.js](10-update_uniq_items.js) | Exports a function `updateUniqueItems` that returns an updated map for all items with an initial quantity of 1.                |
| 11          | Weak link data structure  | [100-weak.js](100-weak.js) | Exports a `WeakMap` instance `weakMap` and a function `queryAPI` to track the number of times it is called for each endpoint.  |

ES6 (ECMAScript 2015) Data Manipulation refers to the techniques and methods used to handle, transform, and manage data using the features introduced in ECMAScript 2015 (also known as ES6). ES6 introduced a variety of new features and improvements to JavaScript, which make working with data more efficient and expressive.

Key features and concepts in ES6 that are particularly useful for data manipulation include:

1. **Arrow Functions**: Provides a shorter syntax for writing functions and lexically binds the `this` value.
   ```js
   const add = (a, b) => a + b;
   ```

2. **Let and Const**: Introduces block-scoped variables (`let`) and constants (`const`), which help prevent errors related to variable scope.
   ```js
   let count = 10;
   const name = 'Alice';
   ```

3. **Template Literals**: Allows for easier string interpolation and multi-line strings.
   ```js
   const message = `Hello, ${name}!`;
   ```

4. **Destructuring Assignment**: Provides a way to extract values from arrays or properties from objects into distinct variables.
   ```js
   const [a, b] = [1, 2];
   const {name, age} = {name: 'Alice', age: 25};
   ```

5. **Spread and Rest Operators**: Facilitates copying and merging arrays and objects, and collecting remaining elements into an array.
   ```js
   const arr = [1, 2, 3];
   const arrCopy = [...arr];
   const {x, ...rest} = {x: 1, y: 2, z: 3};
   ```

6. **Modules**: Introduces a module system for better code organization and reuse.
   ```js
   // Exporting a module
   export const add = (a, b) => a + b;

   // Importing a module
   import { add } from './math';
   ```

7. **Classes**: Provides a more concise and clearer syntax for creating objects and dealing with inheritance.
   ```js
   class Person {
     constructor(name, age) {
       this.name = name;
       this.age = age;
     }
     greet() {
       return `Hello, my name is ${this.name}`;
     }
   }
   ```

8. **Promises**: Introduces a native way to handle asynchronous operations.
   ```js
   const fetchData = () => {
     return new Promise((resolve, reject) => {
       setTimeout(() => resolve('Data fetched'), 1000);
     });
   };
   ```

These features make it easier and more efficient to manipulate data structures such as arrays, objects, maps, and sets. For example, using methods like `map`, `filter`, and `reduce` to process arrays, or using the `Set` and `Map` data structures for unique collections and key-value pairs, respectively.

In the context of the above tasks, `ES6 data manipulation` involves using these features to create, transform, and manage data in various forms (arrays, objects, sets, maps, etc.) in a more modern and efficient way.
