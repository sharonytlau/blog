---
title: "Prototype-based Inheritance in JavaScript"
date: "2022-04-04"
description: "Prototype, inheritance, constructor function, class, and so on..."
--- 

Hi friends! In this post, I hope to share what I have recently learned about JavaScript objects.

 I've learned about the basics of working with objects while learning JavaScript fundamentals (see [this post](http://localhost:8000/2022-01-24-js-fundamental-week-three/)). But a deeper knowledge of objects, especially about the prototype-based inheritance in JavaScript, can help me better understand JavaScript language features and write more efficient code.

So I’ve spent quite an amount of time reading blogs, books, and [specifications](https://tc39.es/ecma262/) about JavaScript objects. And here are my thoughts and notes! ✍️

<div class="notecard info">

To understand this blog post, you will need to have basic knowledge of JavaScript [objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics), [arrays](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays), and [functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions). My [three](/2022-01-03-js-fundamental-week-one/) [previous](/2022-01-12-js-fundamental-week-two) [posts](/2022-01-24-js-fundamental-week-three) have covered the fundamentals. And the learning resources linked throughout this post could be helpful. 

</div>
 
#### The internal slot `[[Prototype]]`

[*Internal slot*](https://v8.dev/blog/understanding-ecmascript-part-1#internal-slots-and-internal-methods) is a concept that exists in JavaScript purely for specification purposes. It represents an internal state (as opposed to *properties*) associated with *objects*. 

As per the [specification](https://tc39.es/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots), every object has an internal slot called `[[Prototype]]`. It's not directly accessible via JavaScript operators, but can be accessed indirectly via the [`Object.getPrototypeOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf) method:

``` javascript
const arr = [1, 2, 3];
Object.getPrototypeOf(arr) === Array.prototype; // true
```

The above code shows that a newly created array object's `[[Prototype]]` refers to the `Array.prototype` object. Oh okay... Wait! What is `Array.prototype`? And how was it "magically" linked to the `arr` object? Even the meaning of `Array` deserves closer examination. 

Let's hold on and regard `Array.prototype` as a regular object which holds a set of properties. We now know that every object has an internal slot named `[[Prototype]]`, and it can be accessed indirectly via `Object.getPrototypeOf()`. The following sections will introduce more concepts for understanding the example.

<div class="notecard info">

From now on, *`[[Prototype]]`* will be referred to as *prototype*, as it is in the name of the `getPrototypeOf()` method. *prototype* is commonly seen in technical writing, but *`[[Prototype]]`* appears in the specs and the Chrome DevTools Console, so it's good to know this notation and its meaning.

</div>

#### Object creation techniques

An object's prototype is initially determined during object creation. So, in this section, let's look at the three object creation techniques in JavaScript: *initializers* (object initializers and array initializers, *`Object.create()`*, and *constructors* (used with the `new` operator).

- **Initializers**

In the above example, we've created an array object using an *[array initializer](https://tc39.es/ecma262/#sec-array-initializer)* (aka *[array literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals)*), which describes a list of array elements enclosed in square brackets (`[]`). 

Arrays are special objects that have its own initializer (literal notation). For ordinary objects, they can be created in the form of *[object initializers](https://tc39.es/ecma262/#sec-object-initializer)* (aka *object literals*).

> An object initializer is an expression describing the initialization of an Object, written in a form resembling a literal. It is a list of zero or more pairs of property keys and associated values, enclosed in curly brackets. —The ECMAScript specification

As per the specification, the prototype of an array object created using an array initializer is set to [`Array.prototype`](https://tc39.es/ecma262/#sec-properties-of-the-array-prototype-object). That explains why `arr` is linked to `Array.prototype` in our example. Similarly, the prototype of an object created using an object initializer is [`Object.prototype`](https://tc39.es/ecma262/#sec-properties-of-the-object-prototype-object).

- **`Object.create()`**

Object creation via [`Object.create()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create) works under a [mechanism](https://tc39.es/ecma262/#sec-object.create) that's almost the same as for initializers. Except that we are able to specify which object to be used as the new object's prototype instead of relying on the "magic" of JavaScript. 

The following code creates a new object whose prototype is set to an existing object:

``` javascript
let protoObj = { sayHi() { console.log("Hi!"); }, };

// create a new object named `newObj`
// and use `protoObj` as the prototype of `newObj` 
const newObj = Object.create(protoObj);

console.log(Object.getPrototypeOf(newObj) === protoObj); // true
```

- **Constructors**

A third way of creating an object is to use [the `new` operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) and a [constructor function](https://tc39.es/ecma262/#constructor).

Getting back to our array example. [`Array`](https://tc39.es/ecma262/#sec-array-constructor) itself, as a JavaScript's standard built-in object, is a constructor function. Therefore, invoking `Array()` via the `new` operator also creates a new array object. And the newly created object's prototype is also `Array.prototype`:

``` javascript
const arr2 = new Array(1, 2, 3);
console.log(arr2); // [1, 2, 3]
Object.getPrototypeOf(arr2) === Array.prototype; // true
```

The mechanism behind this is that in JavaScript, every function has a property named `prototype`. And every object created by a constructor function references to the value of its constructor's `prototype` property via `[[Prototype]]`. 

In other words, each constructor function has a property named `prototype`, which is used as the prototype of new objects created from this constructor. 

#### Prototype-based inheritance

Now, we've explained how an object's prototype is set upon object creation, let's examine what this relationship between objects has brought us.

The ECMAScript specification states this about `[[Prototype]]`:

> The value of this internal slot is either null or an object and is used for implementing inheritance.

and this describing the constructor function:

> Each constructor is a function that has a property named "prototype" that is used to implement prototype-based inheritance and shared properties. 

Both have mentioned *inheritance*, and more specifically, a kind of *prototype-based* inheritance. This concept may sound unfamiliar, but inheritance is very common in JavaScript that many often-used properties on the special array objects are inherited. 

Remember the `Array.prototype` object in our example? The methods for performing various array operations, such as `push()`, `forEach()`, `includes()`, `indexOf`, `map()`, etc., are all inherited from this object.

This mechanism means that in JavaScript, properties accessible from an object include not only the properties owned by the object, but also a set of properties from another associated object via a prototype-based inheritance relationship:

``` javascript
const arr = [1, 2, 3];

arr.push(4);
console.log(arr); // [1, 2, 3, 4]
console.log(arr.includes(3)); // true
```

##### prototype versus the `prototype` property

Array is one of the built-in objects that have a `prototype` property, which we access via `Array.prototype`. The naming of this property makes it easy to confuse it with the prototype of an object. However, keep in mind that they are different concepts. 

From previous sections, we've known that each object has an internal slot `[[Prototype]]` that's either `null` or an object. This internal slot builds up a relationship between two objects where one object inherits properties from the other. Therefore, when we say an object `o`'s prototype is `p`, we mean that `o` inherits properties from `p`, and we can get that relationship via `Object.getPrototypeOf()`.

In comparison, the `prototype` property is a property owned by an object that can be defined just like any other regular object property. This is the property storing an object that's used as another object's prototype upon object creation.


Still confused? Let's get back to `Array` and `Array.prototype` objects.

`Array.prototype` is a property of the `Array` object that's named `prototype`. `Array.prototype` is a built-in object which holds a set of properties, and is used as every array object's prototype. Therefore, array objects can inherit properties contained in the `Array.prototype` object, such as `push` and `includes`.

Besides providing properties to array objects through its `prototype` property, the `Array` object has its own prototype, from which it inherits some properties from. `Array`'s prototype is `Function.prototype`. Because it's a constructor function and a function object's prototype is initialized to `Function.prototype`.

The following is a code example that shows the relationships:

``` javascript
// `Array` has an own property named "prototype"
console.log(Array.hasOwnProperty("prototype")); // true

// an array object's prototype is `Array.`prototype`
const arr = [1, 2, 3];
console.log(Object.getPrototypeOf(arr) === Array.prototype); // true
// `arr` can access a `forEach` property that's inherited from `Array.prototype`
console.log(arr.push === Array.prototype.push); // true

// `Array` is a function
console.log(typeof Array); // function
// `Array`'s prototype is `Function.`prototype`
console.log(Object.getPrototypeOf(Array) === Function.prototype); // true
// `Array` can access an `apply` property that's inherited from `Function.prototype`
console.log(Array.apply === Function.prototype.apply); // true
```

In JavaScript, almost all objects have a prototype, but only a small number of objects have a `prototype` property. A `prototype` property exists for sharing properties. Its properties are inherited by other objects via the prototype-based relationships.

##### Prototype chain and `Object.prototype`

Given that an object's prototype can have a prototype itself, we get a chain of objects via prototype-based relationships. This is called the prototype chain. 

When we try to access a named property from an object, the reference is made to the property of that name in the first object in the prototype chain that contains a property of that name. 

In other words, if we try to access `o.p`, `o` will first be examined for a property named `p`, if not found, the object's prototype will be examined, and if still not found, the prototype of the object's prototype will be examined, and so on.

A prototype chain always ends with an object which has no prototype, so the search down the chain will not be endless. If the last object in the prototype chain is searched on but the named property is not found, the expression will evaluate to `undefined`. 

In almost all cases, a prototype chain ends with the built-in object `Object.prototype`. It is the most basic prototype in JavaScript from which most objects directly or indirectly inherit a number of properties. 

Let's continue our array example and examine the prototype chain for `arr`:

``` javascript
const arr = [1, 2, 3];

// `arr`'s prototype is `Array.prototype`
console.log(Object.getPrototypeOf(arr) === Array.prototype); // true
// `Array.prototype`'s prototype is `Object.prototype`
console.log(Object.getPrototypeOf(Array.prototype) === Object.prototype); // true
// the prototype of `Object.prototype` is `null`, so the prototype chain ends
console.log(Object.getPrototypeOf(Object.prototype) === null); // true
```

The following is another example of an object created using an object initializer. We've mentioned that the newly created object's prototype will be `Object.prototype`: 

``` javascript
const obj = { name: "Sharon" };

// obj inherits the `hasOwnProperty()` method from `Object.prototype`
console.log(obj.hasOwnProperty("name")); // true
console.log(obj.hasOwnProperty("hasOwnProperty")); // false
console.log(obj.hasOwnProperty === Object.prototype.hasOwnProperty); // true

// and the `toString()` method
console.log(obj.toString()); // [object Object]
console.log(obj.hasOwnProperty("toString")); // false
console.log(obj.toString === Object.prototype.toString); // true
```

##### `instanceOf` and the `constructor` property

I hope that the above sections had solved the "mysteries" around prototype-based inheritance. In this subsection and the following one, let's address some concepts that are good to know for dealing with prototype-based inheritance in practice. 

- **the `instanceof` operator**

`instanceOf` is a built-in operator that's useful for inspecting prototype relationships. 

Usually, an object created from a constructor function `C` is said to be an instance of `C`. But the `instanceOf` operator works in a broader sense: it checks whether the `prototype` property of a constructor is in the prototype chain of an object. So if `x` is an instance of `y`, and `y.prototype` is an instance of `z`, then `x` is also regarded as an instance of `z`.

In the following code, we've verified that an instance of `C` is also an instance of `Object` by following the prototype chain:

``` javascript
const C = function (name) { this.name = name; };
const o = new C('test');

// `o`'s prototype is `C.prototype` 
console.log(Object.getPrototypeOf(o) === C.prototype); // true
// therefore, `o` is an instance of `C`
console.log(o instanceof C); // true

// `C.prototype`'s prototype is `Object.prototype`
console.log(Object.getPrototypeOf(C.prototype) === Object.prototype); // true
// therefore, `C.prototype` is an instance of `Object`
console.log(C.prototype instanceof Object); // true
// therefore, `o` is also an instance of `Object`
console.log(o instanceof Object); // true
```

Notice that the `instanceof` operator performs similar checking with the `Object.getPrototypeOf()` method, but it has the restriction that the right-hand side of the operator must be a function. Putting a prototype object on the right-hand side will cause an error. 

- **the `constructor` property**

A constructor function that's used to create an instance normally is accessible from the instance itself. 

When creating an instance using a constructor `C`, the new instance inherits a `constructor` property contained in `C.prototype` which stores a reference to `C`: 

``` javascript
const C = function (name) { this.name = name; };
console.log(C.prototype.constructor === C); // true

const o = new C('test');
console.log(o.constructor === C); // true
```

This `constructor` property can be useful in some cases. However, overriding it will not affect operations that check for an object's prototype, whose results are only determined by the prototype chain. 

In the following code, we've reset the `constructor` property's value to `null`, but the relationship between `o` and `C` is retained:

``` javascript 
const C = function (name) { this.name = name; };
const o = new C('test');
C.constructor = null;

console.log(Object.getPrototypeOf(o) === C.prototype); // true
console.log(o instanceof  C); // true
```

##### The `class` syntax

Beginning with ECMAScript 2015, the `class` syntax has been introduced in JavaScript for declaring a constructor. This syntax provides abstractions over constructor functions and prototype objects.

The following is a simple example:

``` javascript 
class C {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`Hi! I am ${this.name}.`);
  }
}

const o = new C('test');

console.log(o.name); // test
o.sayHi() // Hi! I am test.
```

Its functionality can be approximately achieved with the following, without the `class` syntax:

``` javascript
const C = function(name) {
    this.name = name;
}

C.prototype.sayHi = function() {
  console.log(`Hi! I am ${this.name}.`);
}

const o = new C('test');
```

In either example, we can verify the following relationships between `C` and `o`:
``` javascript
console.log(Object.getPrototypeOf(o) === C.prototype); // true
console.log(o.sayHi === C.prototype.sayHi); // true
console.log(o instanceof C); // true
```

If you are familiar with the concept of classes in some other object-oriented programming (OOP) languages. It's worth noting that JavaScript's prototype-based inheritance is different from class-based inheritance in languages such as Java.

The ECMAScript specification states: 

> In a class-based object-oriented language, in general, state is carried by instances, methods are carried by classes, and inheritance is only of structure and behaviour. In ECMAScript, the state and methods are carried by objects, while structure, behaviour, and state are all inherited.

#### Want to learn more? Read the books and specifications! 

The above are main concepts related to prototype-based inheritance in JavaScript. From an introduction to the internal slot `[[Prototype]]`, and how an object’s prototype is determined with different object creation techniques, to a dive into how prototype-based inheritance works, including concepts such as the `prototype` property and prototype chain. Also, some related things such as the `instanceof` operator, the `constructor` property, and the `class` syntax are introduced. 

Though I hope my explanations could be useful for both myself and others who are trying to learn about these concepts. I genuinely recommend reading books and specifications for a more thorough understanding.

Before writing this post, I've read the following book chapters:

<div class='indent-list'>

- [JavaScript: The Definitive Guide, 7th Edition](https://www.oreilly.com/library/view/javascript-the-definitive/9781491952016/) *Ch6. Objects*
- [Eloquent JavaScript](https://eloquentjavascript.net/) *Ch6. The Secret Life of Objects*
- [Speaking JavaScript](http://speakingjs.com/es5/) *Ch17. Objects and Inheritance*

</div>

These three books are all excellent resources for learning JavaScript, rigorous and thorough yet very readable.

Besides, I've found that [the ECMAScript specification](https://tc39.es/ecma262/) is also a good resource to dig into when I want to know about some specific language details.

---

<p class="final-paragraph"> 

That's it on the topic of prototype-based inheritance!

A little update on my learning progress: these days I'm primarily learning the JavaScript framework [Vue](https://vuejs.org/) and its related tools. Vue is a very popular framework that has good documentation and thriving community and ecosystem. But I do encounter some difficulty finding great resources for project-based learning with the newest syntax. 

The good news is that this week I've got my job role in my company switched from data engineering to frontend development. Our project is currently using the Vue framework, so I believe that I'll sooner or later pick up the framework.

</p>

P.S. You may have noticed that my blog is not updated as frequently as before. It's mainly because I'm currently not following a very systematic learning path as before, and the subjects to learn become more scattered and complicated.  But still, as I learn continuously, I'll share the important things that I've grasped. Stay tuned! 😜






