---
title: "JavaScript Fundamentals"
date: "2022-01-04"
description: "Basic data types, comparisons, logical operators, etc."
--- 

Happy new year!🎆 First post in 2022, yay!

This week I've started learning JavaScript (JS) from [The Odin Project](https://www.theodinproject.com/). Although I have some prior experience with several programming languages (Python, Java, and C++), I decided to take my time learning and practicing the JS basics—I absolutely don't want to spend tons of time debugging my own code in the future due to unfamiliarity with them.

The  [JavaScript basics section](https://www.theodinproject.com/paths/foundations/courses/foundations#javascript-basics) I'm currently studying is large, including JS Fundamentals (split into five parts), dev tools, coding skills, and three projects. This week I've finished the first two parts of JS fundamentals, learning the JS concepts including [variables](http://javascript.info/variables), [data types](https://javascript.info/types), [strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String), [numbers](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math), [comparisons](https://javascript.info/comparison), [logical operators](https://javascript.info/logical-operators), [conditionals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals), etc. Besides, I've learned how to [use Chrome DevTools to debug JS code](https://developer.chrome.com/docs/devtools/javascript/). 

In this post, I hope to share my notes of a few important JS concepts, such as [basic data types](#basic-data-types), [comparisons](#comparisons), and [logical operators](#logical-operators). Some of them are sort of tricky or counterintuitive, so I'd like to pay attention to them.

#### Basic Data Types

There are eight basic data types in JavaScript: [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type), [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type), [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#bigint_type), [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type), [Null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#null_type), [Undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type), [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#symbol_type), and [Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#objects). 

Some special values belong to these types.

* **`Infinity` and `NaN`**
  
 [`Infinity`](https://www.w3schools.com/jsref/jsref_infinity.asp), [`-Infinity`](https://www.w3schools.com/jsref/jsref_infinity.asp), and [`NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) are special values that belong to the Number type.

  JavaScript returns `Infinity` (or `-Infinity`) when we calculate a number outside the *largest* possible number. Also, division by *zero* generates `Infinity`:

  ``` javascript
  alert( x =  2 / 0 ); // Infinity
  alert( y = -2 / 0 ); // -Infinity
  ```
  
  `NaN` indicates that a number is not a legal number. For instance, doing arithmetic with a *non-numeric* string will result in `NaN`:

  ``` javascript
  alert( x = 100 / "Apple" ); // NaN
  ```

* **`null` and `undefined`**
  
  [`null`](https://javascript.info/types#the-null-value) and [`undefined`](https://javascript.info/types#the-undefined-value) are two special values that *individually* form a type, i.e. the Null type and the Undefined type, in the sense that each contains only its own value.

As introduced in the [Modern JavaScript Tutorial](https://javascript.info/types), normally, the `null` value is *assigned* to variables to represent "*empty*" or "*value unknown*", while  the `undefined` value is *reserved* as a default initial value for *unassigned* things.

There's an officially recognized error when checking the *type* of `null` using `typeof`, which should return `"null"` but returns `"object"`.

#### Comparisons

In real-world programming, we use [conditional statements](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals) for *decisions* and *actions* based on different inputs. Comparisons are what we use to *test* the conditions inside our conditional statements. 

* **Equality Comparisons**

[`===`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#strict_equality_using_) and [`==`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#loose_equality_using_) are equality comparison operators in JavaScript. They are also referred to as the *strict* equality operator and the *loose* equality operator, due to a key difference between them.

When using `==`, the operands (i.e. the objects that are operated on) may undergo data type conversions according to [a set of rules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness#loose_equality_using_). For instance, when evaluating whether a *string* equals a *number*, the string will be *converted* to the Number type before the comparison. 

While if we use `===`, the values being compared will not be converted to other data types. If the values have different types, the comparison will always return `false`.

Many professionals suggest always using the strict operator `===`, as the *implicit* data type conversion with `==` is error-prone. 


* **Comparison involving numeric strings**

There are situations where we deal with numeric strings and want to treat them as numbers. For instance, when a user enters a number into a form's text field. 

If we want to compare *a numeric string* with *a number*, JS does what we normally want: it implicitly converts the string to the corresponding number and makes a comparison between the two numbers. For example:

``` javascript
alert( '2' > 1 ); // true (string '2' becomes a number 2)
```

 However, be careful when comparing *two numeric strings*. Type conversion does not happen when we compare two strings, and the values will be compared *letter-by-letter* in [Unicode](http://www.unicode.org/charts/) order. For example:

``` javascript
alert( '2' > '12' ); // true ('2' > '1')
```

If we actually want to compare the two strings as numbers, we can pass the strings through Number():
``` javascript
alert( Number('2') > Number('12') ); // false (2 < 12)
```

As a side note, numeric strings containing *whitespace characters* such as space and `\n` at both ends of strings are just treated like regular numeric strings. The whitespace characters will be *trimmed* off. For example: 

``` javascript
alert( "  -9  " - 1 ) // -10 ("  -9  " -> -9)
alert( " \t \n" - 1 ) // -1 (" \t \n" -> 0)
```

* **Comparisons involving `null` and `undefined`**

Special care should also be taken when doing comparisons involving the values `null` and `undefined`. 

For *equality* comparisons, when using *the `==` operator* to compare the two values, they equal each other but not any other value. While with *the `===` operator*, the two values do not equal each other, because they belong to different types.
``` javascript
alert( null == undefined ); // true (equal each other under loose equality comparison)
alert( null == 0 ); // false (do not equal any other value)
alert( null === undefined ); // false (data types are different)
``` 
When doing *math* comparisons `< > <= >=`, both values will undergo type conversion to *numbers*, but the values are different: `null` becomes `0`, while `undefined` becomes `NaN`.

``` javascript
alert( null > 0 );  // false (null becomes 0, 0 > 0 -> true)
alert( null >= 0 ); // true (null becomes 0, 0 >= 0 -> true)
alert( undefined >= 0 ); // false (undefined becomes NaN, NaN >= 0 -> false)
```

Note that  `null == 0` is `false` but `null >= 0` is `true`. This is tricky but can be justified by the rules stated. 

Whenever we do comparisons with variables that can have these two special values, it's a good practice to check for them separately. 

#### Logical Operators

Besides comparisons, logical operators are also important for expressing conditionals. There are four logical operators in JavaScript: [`||` (OR)](https://javascript.info/logical-operators#or), [`&&` (AND)](https://javascript.info/logical-operators#and), [`!` (NOT)](https://javascript.info/logical-operators#not), and `??` (Nullish Coalescing). 

* **`||` (OR) and `&&` (AND)**
  
  In JavaScript, the two operators `||` (OR) and `&&` (AND) do not just return Boolean values like that in classical programming. Specifically, they have the following (similar) rules:
  
  `||` returns the first *truthy* value, or the last value if none were found. For example:

  ``` javascript
  alert( 1 || 0 ); // 1 (the first truthy value)
  alert( null || 1 ); // 1 (the first truthy value)
  alert( null || 0 ); // 0 (all falsy, returns the last value)
  ```

 `AND` returns the first *falsy* value, or the last value if none were found. For example:

  ``` javascript
  alert( null && 1 ); // null (the first falsy value)
  alert( 1 && 0 ); // 0 (the first falsy value)
  alert( 1 && 5 ); // null (all truthy, returns the last value)
  ```


* **Conversion to Boolean**

Although the operations return the *original* values, operands that aren't booleans are *converted* for the evaluation (truthy or falsy). 

Think about the expression below, what's the return value?

``` javascript
alert( -1 || 0 );
```
I had thought that `-1` (as a negative number) would evaluate as `false` and thus `0` would be returned. But `-1` is actually a truthy value so that the expression returns `-1`. 


There are specs that tell whether a value is truthy or falsy. A nice tutorial from the [Modern JavaScript Tutorial](https://javascript.info/type-conversions#boolean-conversion) summarizes the Boolean conversion rules as follows:

| Value | Becomes… |
|-------|----------|
| `0` , `null` , `undefined` , `NaN` , `""` | `false` |
| any other value | `true` |

As shown in the table, for Number type values, only `0` (including `+0` and `-0`) becomes `false` in Boolean conversion. 
The entire list of falsy values is quite short actually.

---

<p class="final-paragraph"> To sum up, in JavaScript, there are some basic data types and special values that we should take care of. Operations with values such as <code class="language-text">null</code> and <code class="language-text">undefined</code>, and even numeric strings could have unexpected results. If we want to write valid conditionals in our JS programs, we should understand rules of comparisons and logical operators and pay attention when they work with these values.

So the fundamentals are quite important. I'll go on learning them and hope that I could start building projects soon. Cheers!😉  <p>