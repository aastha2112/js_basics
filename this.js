// // **Methods in Objects:**

// 1. What is a method in the context of a JavaScript object?
//     - A) A data type
//     - B) A function associated with an object
//     - C) A property that cannot be changed
//     - D) A built-in JavaScript keyword

// answer: B

// 2. How do you define a method inside a JavaScript object?
//     - A) `methodName = function() {...}`
//     - B) `function methodName() {...}`
//     - C) `methodName: function() {...}`
//     - D) `method: methodName() {...}`

// answer: C

// 3. Given the object `let car = {brand: "Toyota", drive: function() { console.log("Vroom!"); }}`, how do you call the `drive` method?
//     - A) `car.drive`
//     - B) `car.drive();`
//     - C) `drive.car();`
//     - D) `drive();`

// answer: B

// // **"this" in JavaScript:**

// 4. In JavaScript, what does the `this` keyword generally refer to?
//     - A) The global window object
//     - B) The current function
//     - C) The object the function/method is a part of
//     - D) Any object in the script

// answer: C

// 5. Inside a method, the `this` keyword refers to __________.
//     - A) The global object
//     - B) The method itself
//     - C) The object the method belongs to
//     - D) The function's parameters

// answer: C

// 6. If you're using the `this` keyword outside of any function in a browser, to what does it refer?
//     - A) `document`
//     - B) `console`
//     - C) `window`
//     - D) `navigator`

// answer: C

// 7. Consider the following code:
//     ```javascript
//   function introduce() {
//        console.log("Hello, my name is " + this.name);
//      }
//      let person = {
//        name: "Alice",
//        greet: introduce
//      };
//      let name = "Bob";
//     introduce();
// //     ```
//     What will be printed to the console?
//     - A) "Hello, my name is "
//     - B) "Hello, my name is Alice"
//     - C) "Hello, my name is Bob"
//     - D) An error

// answer: A

// ### Exercise 1: The Dog Object
// **Task:** Create an object named `dog` with properties `name` set to "Buddy" and `age` set to 5. Add a method `bark` to this object which logs "`name` barks! Woof!" when called.

// Your code here

let dog = {
    name: "Buddy",
    age: 5,
    bark: function () {
      console.log(this.name + " barks! Woof");
    }
  };
  
  // Test
  dog.bark(); // Expected: "Buddy barks! Woof!"
  
  // ### Exercise 2: Using `this` in Methods
  // **Task:** Create a `person` object with properties `firstName` and `lastName`. Add a method `fullName` to this object which returns the concatenated first and last name using the `this` keyword.
  
  // Your code here
  
  let person = {
    firstName: "Aastha",
    lastName: "Lakhanpal",
    fullName: function () {
      console.log(this.firstName + " " + this.lastName);
    }
  };
  
  // Test
  console.log(person.fullName()); // Expected: "[firstName] [lastName]"
  
  // ### Exercise 3: Counter Object
  // **Task:** Create a `counter` object that has a property `count` initialized to 0. Add two methods to this object: `increment` which increases the count by 1 and `display` which logs the current count.
  
  // Your code here
  
  let counter = {
    count: 0,
    increment: function () {
      this.count++;
    },
    display: function () {
      console.log(this.count);
    }
  };
  
  // Test
  counter.increment();
  counter.increment();
  counter.display(); // Expected: 2
  
  // ### Exercise 4: Dynamic Context of `this`
  // **Task:** You are provided with a `car` object and a function `describe`. Bind the `describe` function to the `car` object so that it correctly uses the `this` keyword to access the car's properties.
  
  let car = {
    brand: "Toyota",
    model: "Corolla"
  };
  
  let describe = function () {
    console.log(`This is a ${this.brand} ${this.model}.`);
  };
  
  // Your code to bind the function here
  
  describe = describe.bind(car);
  // Test
  describe(); // Expected: "This is a Toyota Corolla."
  
  // ### Exercise 5: Navigating Inside the Object
  // **Task:** Create an object named `navigator`. It has two properties: `x` and `y`, both initialized to 0. Add the following methods: `goLeft` which decrements `x` by 1, `goRight` which increments `x` by 1, `goUp` which increments `y` by 1, and `goDown` which decrements `y` by 1.
  
  // Your code here
  
  let navigator = {
    x: 0,
    y: 0,
    goLeft: function () {
      this.x--;
    },
    goRight: function () {
      this.x++;
    },
    goUp: function () {
      this.y++;
    },
    goDown: function () {
      this.y--;
    }
  };
  
  // Test
  navigator.goUp();
  navigator.goRight();
  navigator.goDown();
  navigator.goLeft();
  console.log(navigator.x, navigator.y); // Expected: 1 1
  
  // Exercise 1: Basic Preservation of Context
  // Task: Given a user object with a name property and a sayHi method, modify the sayHi method so that the nested function can access the name property using the that pattern.
  
  let user = {
    name: "John",
    sayHi: function () {
      // Implement 'that' pattern here
      let that = this;
      function greet() {
        console.log("Hi, " + that.name);
      }
      greet();
    }
  };
  
  // Test
  user.sayHi(); // Expected: "Hi, John"
  
  // Exercise 2: Timer with Context
  // Task: Use the that pattern to make the timer object log "Timer done!" after 2 seconds.
  
  let timer = {
    message: "Timer done!",
    start: function () {
      // Implement 'that' pattern and use setTimeout here
      let that = this;
      setTimeout(function () {
        console.log(that.message);
      }, 2000);
    }
  };
  
  // Test
  timer.start(); // After 2 seconds, expect: "Timer done!"