# ES6 Promises

This project contains tasks for learning to use Promises in ECMAScript 2015 (ES6).

| Task | Description |
|------|-------------|
| 1. **Keep every promise you make and only make promises you can keep** | Exports `getResponseFromAPI()` which returns a Promise. |
| 2. **Don't make a promise...if you know you can't keep it** | Exports `getFullResponseFromAPI(success)` which returns a Promise based on the `success` parameter. |
| 3. **Catch me if you can!** | Exports `handleResponseFromAPI(promise)` which handles resolving and rejecting a Promise and logs messages accordingly. |
| 4. **Handle multiple successful promises** | Imports `uploadPhoto` and `createUser` from [utils.js](utils.js) and resolves all promises together using `handleProfileSignup()`. |
| 5. **Simple promise** | Exports `signUpUser(firstName, lastName)` which returns a resolved promise with firstName and lastName. |
| 6. **Reject the promises** | Exports `uploadPhoto(filename)` which returns a rejecting Promise with an error message. |
| 7. **Handle multiple promises** | Imports `signUpUser` and `uploadPhoto`, exports `handleProfileSignup(firstName, lastName, fileName)` which resolves an array of promises. |
| 8. **Load balancer** | Exports `loadBalancer(chinaDownload, USDownload)` which returns the first resolved promise between chinaDownload and USDownload. |
| 9. **Throw error / try catch** | Exports `divideFunction(numerator, denominator)` which throws an error for division by zero and returns the division result otherwise. |
| 10. **Throw an error** | Exports `guardrail(mathFunction)` which processes `mathFunction` and captures both its return value and any thrown errors. |
| 11. **Await / Async** | Imports `uploadPhoto` and `createUser`, exports `asyncUploadUser()` which awaits both functions and handles failures gracefully. |
Understanding ES6 Promises is crucial for modern JavaScript development due to several important reasons:

1. **Asynchronous Operations Handling**: Promises provide a clean and structured way to manage asynchronous operations in JavaScript, replacing callback-based approaches which can lead to callback hell.

2. **Sequential and Parallel Execution**: Promises allow for easy chaining of asynchronous operations using `.then()` and `.catch()`, enabling sequential execution of tasks or parallel execution when combined with `Promise.all()`.

3. **Error Handling**: Promises provide robust error handling mechanisms through `.catch()` which makes it easier to manage errors across asynchronous operations compared to traditional try-catch blocks with callbacks.

4. **Promise API**: The Promise API (`.then()`, `.catch()`, `Promise.all()`, `Promise.race()`) offers powerful tools for managing complex asynchronous workflows, improving code readability and maintainability.

5. **ES7 Async/Await**: Understanding Promises is foundational to mastering Async/Await syntax introduced in ES7, which provides even more concise and readable syntax for handling asynchronous code.

6. **Compatibility and Adoption**: Promises are now widely supported across modern browsers and Node.js versions, making them a standard choice for handling asynchronous operations in both frontend and backend JavaScript development.

7. **Future of JavaScript**: Promises are a fundamental feature in ECMAScript and understanding them lays a strong foundation for learning other advanced features and concepts in JavaScript.

In summary, ES6 Promises are not just a feature but a fundamental building block for managing asynchronous programming in JavaScript, offering clarity, reliability, and scalability to your codebase.
