---
title: "JavaScript Fundamentals III"
date: "2022-01-25"
description: " Objects"
--- 

Hi friends! 🧚 I've just finished with the [JavaScript basics section](https://www.theodinproject.com/paths/foundations/courses/foundations#javascript-basics) of The Odin Project. In the past two weeks, I've gone through more concepts. And more than that, I've built three small projects: [Rock Paper Scissors](https://sharonytlau.github.io/odin-rock-paper-scissors/), [Etch-A-Sketch](https://sharonytlau.github.io/odin-etch-a-sketch/), and [Calculator](https://sharonytlau.github.io/odin-calculator/), using HTML, CSS, and JavaScript. 

The concepts I've newly learned—[objects](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/fundamentals-part-5) and [DOM and events](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/dom-manipulation-and-events)—are quite important for doing these projects (and web development in general). I had planned to write about them all in this post, but I found the content being too much to fit in. So, let's only focus on objects in this post. 🚀

#### OOP and Object

In JavaScript, most things are objects. In the [previous post](../2022-01-12-js-fundamental-week-two/), we have looked at [Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and [Errors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) in JavaScript. Both of them are special types of objects.

Object is the core of the programming diagram called [Object-oriented programming (OOP)](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming). The diagram is fundamental to JavaScript, and many other programming languages, such as [Python](https://en.wikipedia.org/wiki/Python), [Java](https://en.wikipedia.org/wiki/Java), [C++](https://en.wikipedia.org/wiki/C%2B%2B), etc.


An object allows us to group related data and functionalities and treat them as a whole rather than individually. In JavaScript, an object is a collection of properties.

#### Create new objects

We can create an object with [object literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#object_literals) or [object constructor](https://javascript.info/constructor-new). *Object literal* is handy for creating a single object, while *object constructor* enables us to create many similar objects conveniently.

* **Object literal**

An [object literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#object_literals), also known as [object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer), is a group of zero or more properties enclosed in curly braces (`{}`). For example, the following code creates an object with two properties:

``` javascript
let person = {     // an object: person
  name: "Sharon",  // property name: "name", value: "Sharon"
  age: 18          // property name: "age", value: 18
};
```

As we can see, a *property* is a `name: value` pair, and we separate properties by a comma.

A *property name* can be any string, while the commonly-used value would be a [valid identifier](https://developer.mozilla.org/en-US/docs/Glossary/Identifier) or a [numeric literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#numeric_literals). In this case, when writing the string in the object literal, we can omit quotation marks around them. If the value is not a string, such as a number or a boolean value, it is automatically converted to string.

* **Object constructor**

To use an [object constructor](https://javascript.info/constructor-new), we define a *constructor function* and call the function with the *`new` operator*. A constructor function is like a regular function, except that the function name starts with a capital letter (a convention). 

For example, We can create the `person` object in the following way:

``` javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

let person = new Person('Sharon','18');
```

<div class="notecard"> Note: When we call the constructor with <code class="language-text">new</code>, the <code class="language-text">this</code> keyword refers to our newly created object. The properties are initialized with data that comes from constructor arguments. </div>


With this constructor, we can easily create many other similar objects. For example:

``` javascript
let secondPerson = new Person('Tom','19');
let thirdPerson = new Person('Jerry','20');
```

#### Object methods

A property's value can be a *function* (introduced in [this post](../2022-01-12-js-fundamental-week-two/#functions)). In this case, we refer to the property as an [object method](https://www.w3schools.com/js/js_object_methods.asp). It represents an *action* that the object can make. 

For example, in the following code, the function `greet()` is a method of the `person` object. When we call this method, the logging action is performed:

``` javascript
let person = {
  name: 'Sharon',
  greet: function() {
    console.log(`Hello!`);
  }
};

person.introduceSelf(); // Hello!
```

There's a simpler syntax for defining object methods. We can write `greet()` instead of `greet: function()`: 

```javascript
let person = {
  name: 'Sharon',
  greet() {
    console.log(`Hello!`);
  }
};
```

The `this` keyword is also commonly used in a function method to access other object properties. For instance, in the following code, we use `this.name` to access the `name` property inside the `greet()` method:

``` javascript
let person = {
  name: "Sharon",
  greet() {
    console.log(`Hello! I'm ${this.name}.`);
  }
};

person.greet(); // Hello! I'm Sharon.
```

<div class="notecard"> Note: The <code class="language-text">this</code> keyword here refers to the object that owns the method, so in this case <code class="language-text">this</code> is equivalent to <code class="language-text">person</code>.</div>

#### The bracket notation

In previous examples, we have used the [dot (`.`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors#dot_notation) to access object properties. There is another notation using the [bracket (`[]`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation), which overcomes some *limitations* of the dot notation. 

The bracket notation syntax is as follows:

``` javascript
obj['prop']
```

* **Access array elements**
Remember that [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) is a special type of object. The elements of an array object are also properties under the hood, stored using integers as their names. 

Because dot notation can only access properties whose names are [valid identifiers](https://developer.mozilla.org/en-US/docs/Glossary/Identifier), to access an element of an array, we must use bracket notation (see also [this doc from MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#accessing_array_elements)). For instance:

``` javascript
let colors = ['green', 'yellow', 'blue', 'red', 'white', 'black'];

console.log(colors[0]); // 'green'
```

* **Get properties dynamically**
Furthermore, the *dot notation* only accepts a [string literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#string_literals), while using the *bracket notation* we can pass a variable or an expression. This enables us to get properties dynamically. For example, we can do the following:

``` javascript
let prop = 'age';

user[prop] = 18; // equivalent to user['age'] = 18
```

* **Computed names in object literal**

The bracket notation can also be used within an object literal for computed property names. The following is a trivial example:

``` javascript
let prop = 'age';

let person = {
  [prop]: 18 // equivalent to age: 18
};
```

#### Add, update, or remove properties

After creating an object, we can alter its properties by *adding* new ones, or *updating* or *removing* existing ones. For example:

``` javascript
let person = { name: 'Sharon', age: '18' };

// add 
person.vocation = 'developer'; 

// update
person.name = 'Mario';

// delete
delete person.age;
```

In this example, because the property names are *known* and *simple*, we use the more-concise dot notation.

#### Check for property existence

In JavaScript, we can access an object property that doesn’t exist, seeing no error. For instance, if we try to access a property named `vocation`, which does not exist in the `person` object, we will get a return value [`undefined`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined):

``` javascript
let person = { name: 'Sharon' };

person.vocation; // undefined 
```

* **Compare with the `undefined` value**
  
Because of this feature, in most cases we can check for property existence by comparing it with `undefined`:

``` javascript
let person = { name: 'Sharon' };

// false: property exists
alert( person.name === undefined );

// true: property does not exist 
alert( person.age === undefined );
```

This method can *lie* in one situation, where a property does exist but has `undefined` as its value. This is, however, a very rare case. In general, the `undefined` value should be reserved for unassigned things. Instead of `undefined`, we assign `null` to things that are unknown or empty (mentioned in [this post](../2022-01-03-js-fundamental-week-one/)). 

* **The operator `in`**

If we want a property existence test that never lies, there is an operator [`in`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in) for this specific purpose. 

To use the operator, we put the property name on the *left* side and the object on the *right* side. The name can be a string literal or a variable pointing to the name. See the examples below:

``` javascript
let person = { name: 'Sharon' };

//string literal
alert( "name" in person ); // true (person.name exist)

// variable
let prop = "age";
alert( prop in person ); // false (person.age does not exist)
```

* **Check for emptiness**

In some cases, we may want to check whether an object is empty. This can be achieved with the following code:

``` javascript
function isEmpty(obj) {
  for (let prop in obj) {
    return false;
  }
  return true;
}
```

<div class="notecard"> Note: <code class="language-text"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in">for...in</a></code> is a loop that iterates over all properties of an object. The above code works because the loop will not start if the object is empty. Other looping techniques <a href="../2022-01-12-js-fundamental-week-two/">we have seen</a>, such as <code class="language-text"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach">forEach</a></code> and <code class="language-text"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of">for...of</a></code>, are not applicable here. Because <code class="language-text">forEach</code> is an Array method and <code class="language-text">for..of</code> can only be used on <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol">iterables</a>.
</div>

---

<p class="final-paragraph"> In summary, this post has gone through some basics of JavaScipt objects, including creating new objects with properties and methods, accessing or altering object properties, and checking for property existence. <p>

In case you were wondering, my age is not 18 (of course). And, feel free to have some fun with my projects! I personally think they're not bad 😀. The next post will be on DOM and events, which are essential for building interactive web sites or applications. Cheers! 