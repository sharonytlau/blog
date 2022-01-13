---
title: "JavaScript Fundamentals II"
date: "2022-01-13"
description: "Basic data types, comparisons, errors, etc."
--- 

This past week, I've learned more JS fundamentals by going through [the JavaScript basics section](https://www.theodinproject.com/paths/foundations/courses/foundations#javascript-basics) of The Odin Project. Specifically, I have learned the concepts of JavaScript [functions](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/fundamentals-part-3), [arrays](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/fundamentals-part-4#arrays), [loops](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/fundamentals-part-4#loops), and [errors](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/understanding-errors). In addition to the JS concepts, I've gone through some materials on important developer skills such as [problem solving](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/problem-solving) and [clean code](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/clean-code).

In this post, I will continue with my notes on important JS concepts. As for the developer skills, I want to leave the topics to future posts, when I can discuss them with real projects.


#### Arrays

[Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) are list-like objects that can hold more than one value. 

* **Adding or removing elements**

There are many useful [methods](https://javascript.info/array-methods) for mutation operations on Arrays. For instance, we can use [`push()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push), [`pop()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop),  [`shift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift), and [`unshift()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) for adding or removing element(s) from the beginning or the end of an Array. 

While these methods allow us to do one kind of operation (add or remove), the [`splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) method enables us to do both at the same time. The syntax is as follows:

``` javascript
splice(start, deleteCount, item1, item2, itemN)
```

The following example replaces `1` element at index `2`:

``` javascript
const seasons = ['Spring', 'Summer', 'Winter', 'Winter'];
seasons.splice(2, 1, 'Autumn'); 
console.log(seasons); // ['Spring', 'Summer', 'Autumn', 'Winter']
```

<div class="notecard"> Note: <code class="language-text">splice()</code> modifies an array in place, meaning that the original Array will be <em>changed</em> after calling the method.</div>

`splice()` can also be used like the other methods. In the parameters, only `start` is *required*. So we can *omit* `deletecount` if we do not want to delete any existing element or *omit* `items` if not adding new ones.

* **Checking for Array instance**

To check whether a value is an Array, we can use the [isArray()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray) method. For instance:

``` javascript
Array.isArray([1, 2, 3]);  // true
Array.isArray('foobar');   // false
```
Alternatively, we can use the [`instanceof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof) operator in the following way:

``` javascript
const numbers = [1, 2, 3];

numbers instanceof Array; // true
```

<div class="notecard">Note: in <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray#instanceof_vs_isarray'>this doc from MDN</a> it's suggested that <code class="language-text">isArray()</code> is preferred over <code class="language-text">instanceof</code></div>


#### Loops

[Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration) is a useful feature in programming for executing a block of code repeatedly. The looping constructs in JavaScript are similar to those in other programming languages. 

* **`for`, `while`, and `do while`**

The most common loops are [`for`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for), `while`, and `do while` loops. They normally consist of four parts, *initialization* of a counter variable, a *condition* to be checked before each loop iteration, *statements* to be executed when the condition evaluates to true, and a *final-expression* to be evaluated after each iteration. For example, the `for` loop has the following syntax:

``` javascript
for ([initialization]; [condition]; [final-expression])
   statement
```

The other two, though having different syntax, can be used like the `for` loop. They are largely *interchangeable*.

* **Loop over collections**

The [`for...of`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of) statement provides a simpler way to loop over *collections* such as [`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), [`Map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map), and [`Set`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set):

``` javascript
for (variable of iterable) {
  statement
}
```

Using this statement, a property of the `iterable` object is assigned to the `variable` for every iteration.

Besides, the [`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach), [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) and [` filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) methods are also options for looping over collections. All of them can be used to execute the same block of code for each element in a collection.

Note the difference between the `forEach()` method and the other two: `map()` and `filter()` *creates and returns a new collection* while `forEach()` *returns `undefined`*. 

We use `forEach()` when we only want to execute the code but do not need a new collection. For example, the following code declares a simple function that logs a word's first character to the console (function declaration is [discussed later](#functions)). A use of the `forEach()` method calls this function on each element in the array `words`:

``` javascript
function showFirstCharacter(word) {
  console.log(word.charAt(0));
}

const words = ["Hide", "Earth", "Live", "Like", "Order"];

words.forEach(showFirstCharacter); // 'H', 'E', 'L', 'L', 'O'
```

In comparison, the `map()` method creates a new collection with the changed items. For example, using `map()` to call a function that converts the passed string to uppercase, we get a new array consists of the above words in uppercase:

``` javascript
function toUpper(string) {
  return string.toUpperCase();
}

const upperWords = words.map(toUpper);

console.log(upperWords); // Array ['HIDE', 'EARTH', 'LIVE', 'LIKE', 'ORDER']
```

Similarly, we can get a new collection from `filter()`. But as the method name suggested, it's used for creating a collection with only elements that *pass a test*. The following code returns a new array with our words that start with the letter `L`:

``` javascript
function checkStartsWithL(word) {
  return word.startsWith('L');
}

const filteredWords = words.filter(checkStartsWithL);

console.log(filteredWords); // ['Live', 'Like']
```

* **`continue` and `break` nested loops**

The [`continue`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue) and [`break`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break) statements are for terminating an iteration (`continue`) or a loop (`break`).

When used with [label Statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label), they can break from nested loops. Labels act as identifiers of which loop our `continue` or `break` statements apply to. 

For example, the following code outputs prime numbers from `2` to `10`. Using `continue` with a label here lets us stop iterations in the inner loop and jump to the next iteration of the outer loop  immediately after we find a `j` that is a factor of `i`:

``` javascript
outerLoop:  // label the outer loop as outerLoop
for ( let i = 2; i <= 10 ; i++ ) {
	for ( let j = 2; j < i ; j++ ) {
		if ( i % j === 0 ) continue outerLoop;
	} 
	console.log(i);
} 
```

Similarly, we can use `break` to exit a labeled outer loop, jumping to the code right after that loop. Without the use of a labeled statement, we could only break out of the current loop.



#### Functions

[Function](https://www.w3schools.com/js/js_functions.asp) is another essential concept in programming. When writing programs, we often group statements into functions. This helps us to work more efficiently and keep our codebase clean and readable. 

* **Function declaration and function expression**

[Function declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function) and [function expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function) are two forms of creating a function in JavaScript:

``` javascript
// function declaration
function name(param1, param2, ..., paramN) {
  statements
}
```

``` javascript
// function expression
function [name]([param1[, param2[, ..., paramN]]]) {
  statements
}
```

<div class="notecard"> Note: <code class="language-text">name</code> is <em>optional</em> in function expressions while <em>required</em> in function declarations. The kind of functions without a name is called  <a href="https://www.geeksforgeeks.org/javascript-anonymous-functions/">anonymous functions</a>. </div>

A key difference between the two is that a *function declaration* is [*hoisted*](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting#function_hoisting), meaning that the function can be *called above* its definition. In contrast, functions created in the form of *function expression* can only be *called after* the execution reaches the expression.

[The Modern JavaScript Tutorial](https://javascript.info/function-expressions#summary) suggests that normally we should use *function declaration*, as it gives more freedom in organizing our code and is more readable. 

However, in some cases such as [*conditional function creation*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function#conditionally_created_functions), we need to use *function expression*. In the following code, we test a condition that whether the `age` is above `18`. A function is only created if the condition evaluates to `true`:

``` javascript
let age = prompt("What is your age?", 18);

let welcome;

if ( age >= 18 )​ {
    welcome = function () {
        alert("Welcome!");
    }
}
```

* **Arrow Functions**

[Arrow function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) expression is an alternative syntax to the above regular function expression. 

This concise syntax is often used for simple *one-line actions*. For example, the following code creates an arrow function to double a number:

``` javascript
number => number * 2
```

It's convenient to pass an arrow function as an argument to another function. This usage is called a [callback](https://www.w3schools.com/js/js_callback.asp). For example: 

``` javascript
const numbers = [1, 2, 3];

const doubled = numbers.map(number => number * 2);

console.log(doubled); // [1, 4, 6]
```

* **Default Values**

Functions' parameters have default values. When an argument is not provided in a call of the function, a parameter will be initialized to that default value.

Default values can be set in the function definition:

``` javascript
function add(a, b = 1) { //  set 1 as the default value for the second parameter
  return a + b;
}

add(5); // 5 + 1 -> 6
```

Here we define a function that takes two parameters. As we can see, the second parameter is initialized to `1` when we call the function with only one argument.

When default values are not provided, parameters default to [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined): 

``` javascript
function add(a, b) {
  return a + b;
}

add(5); // 5 + undefined -> NaN
```

The function here is similar to the above one, but we do not set any default value, and the added value turns out to be [`NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN).

`undefined` is also the default return value for functions. When we use `return` without a value or do not include an explicit return statement in the function definition, it returns `undefined`.

Since we already know that `undefined` is a troubling value (in the [previous post](http://localhost:8000/2022-01-03-js-fundamental-week-one/)), pay special attention when using functions.

* **Good Practices**

Good practices help us become better programmers. Here are two that I've learned related to functions:

**Use local variables**: It's recommended to use mainly [local variables](https://developer.mozilla.org/en-US/docs/Glossary/Local_variable) in functions. In other words, minimize the use of outer variables. This makes the code clean and easier to understand. The rationale lies in a more advanced concept—[variable scope]((https://javascript.info/closure)).

**One function one action**: Short functions are easier to test and more understandable. A function should do exactly *one* thing and we should name it as to what it does and returns. Function names are usually *verbal*, prefixed by verbs such as `create…`, `show…`, `get…`, `check…` and so on. When we feel it hard to give a function an obvious name, the function may be too complex and we should consider *splitting* it into a few smaller functions.

#### Errors

When an error occurs in our program, JavaScript's built-in [`Error`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) object provides helpful information for debugging our code.

* **Common Types of Errors**

There are several standard error types, among which [`SyntaxError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError), [`ReferenceError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError), and [`TypeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError) are the most common ones we will encounter.

MDN gives their definitions as follows:

`SyntaxError` represents an error when trying to interpret *syntactically invalid* code. 

`ReferenceError` represents an error when a *variable* that *doesn't exist* (or hasn't yet been initialized) in the *current scope* is referenced.

`TypeError` represents an error when an *operation could not be performed*, typically (but not exclusively) when a value is not of the expected type.


* **Error messages in consoles**

 When running JS scripts in our browser, error messages in the console are the main source of evidence to locate the code that causes the problem. 

Standard properties of the Error objects include [`name`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/name) (type) and [`message`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/message). In the consoles of modern web browsers, such as [Chrome](https://developer.chrome.com/docs/devtools/console/) and [Firefox](https://developer.mozilla.org/en-US/docs/Tools/Web_Console/Console_messages), we often get more information about the errors.

For example, an error message in [Firefox](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong) includes the name of the JS file where we can find the error, the line number of the error in that file, the character number in that line, and the stack trace. 

Chrome and Firefox also provide powerful [JavaScript](https://developer.mozilla.org/en-US/docs/Tools/Debugger) [debuggers](https://developer.chrome.com/docs/devtools/javascript/). We can try to set different *breakpoints* and trace the code step by step while monitoring the console.

---

<p class="final-paragraph"> That's it for now! In this post, I write about JavaScript arrays, loops, functions, and errors. <a href="#arrays">Array</a> is a useful data structure for dealing with a collection of values. <a href="#loops">Loops</a> help with rapidly completing repetitive tasks. <a href="#functions">Functions</a> enable us to avoid code repetition. <a href="#errors">Errors</a> help us debug our programs. Cheers! 🍻</p>