# 0x00. ES6 Basics
![08806026ef621f900121](https://github.com/Zed-bard/alx-backend-javascript/assets/132649828/0c027fca-adb5-4876-95a9-8c94df48ff4a)

```markdown
# 0x00. ES6 Basics

## Concepts

For this project, we expect you to look at these concepts:

- JavaScript programming
- Software Linter

## Requirements

### General

- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All your files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `.js` extension
- Your code will be tested using the Jest Testing Framework
- Your code will be analyzed using the linter ESLint along with specific rules that we’ll provide
- All of your functions must be exported

## Setup

### Install NodeJS 12.11.x

In your home directory, run the following commands:

```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

Verify the installation:

```bash
nodejs -v
# v12.11.1

npm -v
# 6.11.3
```

### Install Jest, Babel, and ESLint

In your project directory, install Jest, Babel, and ESLint by using the supplied `package.json` and run `npm install`.

### Configuration Files

Add the following files to your project directory:

#### `package.json`

```json
{
  "name": "es6_basics",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "jest"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.8.4",
    "@babel/preset-env": "^7.8.4",
    "babel-jest": "^25.1.0",
    "eslint": "^6.8.0",
    "jest": "^25.1.0"
  }
}
```

#### `babel.config.js`

```javascript
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
  ],
};
```

#### `.eslintrc.js`

```javascript
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'no-console': 'off'
  }
};
```

### Finally

Don’t forget to run `npm install` from the terminal of your project folder to install all necessary project dependencies.

## Usage

To run your tests, use the command:

```bash
npm test
```
