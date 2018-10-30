# Contribution Guide


## Contributions

- All contributions must be made via [pull requests](https://help.github.com/articles/about-pull-requests/).
- Commits must be written in past tense, and in sentence format:

Good examples:

    Added list component
    Removed superfluous style declaration
    Fixed typo in label


Bad examples:

    update
    New Thing
    remove the style declaration

---


## Technical requirements

### Dependencies

Ensure you install these modules globally on your development machine:

- [Node](https://nodejs.org/): This runs a JavaScript server locally which fetches the libraries necessary to build this project.

### Installation

- Open a [Terminal](https://en.wikipedia.org/wiki/Terminal_(macOS))/[cmd.exe](https://en.wikipedia.org/wiki/Cmd.exe) window
- Go to the root of this project's directory
- Run `npm install`, which will install the necessary dependencies

### Start the server

- Open a [Terminal](https://en.wikipedia.org/wiki/Terminal_(macOS))/[cmd.exe](https://en.wikipedia.org/wiki/Cmd.exe) window
- Go to the root of this project's directory
- Run `npm start`, which will start the local server
- Open a web browser and go to `http://localhost:3000/` to confirm the server is running.

### Stop the server

- Go to the [Terminal](https://en.wikipedia.org/wiki/Terminal_(macOS))/[cmd.exe](https://en.wikipedia.org/wiki/Cmd.exe) window in which the server is running
- Type the following command: `CTRL+C`

---


## Coding conventions

In order to ensure standardization of the coding style, please ensure that you follow these rules as you develop.

### General

- Use spaces for indenting
- An indent is represented by 2 spaces

Many IDEs implement linting functionalities, take a look at [EditorConfig](http://editorconfig.org) for more details.

### Variables

- Use `camelCase` for variables
- Use `PascalCase` for class names and singletons
- Use `UPPER_CASE_SNAKE_CASE` for constant names
- __Do not__ use `lower_case_snake_case`
- __Do not__ prefix variables with an underscore or a dollar sign
- Booleans must be prefixed with `is-`/`are-` so that they ask a question when read out loud:  

  ```
  var isArrayEmpty = someArray.length() > 0;
  
  // used in an if-statement
  if (isArrayEmpty) {
    // code here
  }
  
  var areUsersAsleep = true;
  
  // used in an if-statement
  if (areUsersAsleep) {
    // code here
  }
  ```

### Methods

- Method names must be an active verb and use lower camel case:  

  ```
  doSomething()  
  doSomeOtherThing()
  ```

- Event handlers and callbacks must use the `on-` prefix, and use the past tense. Read [Miller Medeiros's on his js-signals library](https://millermedeiros.github.io/js-signals/) or [Robert Penner's critique of AS3 events](http://flashblog.robertpenner.com/2009/08/my-critique-of-as3-events-part-1.html) to know more about this naming convention.  

  ```
  function onButtonClicked() { // ... }
  function onDataObtained() { // ... }
  ```

- In the case where a method must be used to compute a condition, use the same logic as booleans (i.e. `is-`/`are-` prefix):  

 ```
 function areValuesEqual(value1, value2) { // ... }
 ```
