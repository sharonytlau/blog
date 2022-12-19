---
title: "Interact With the Page"
date: "2022-01-28"
description: "DOM manipulation and event handling in JavaScript"
--- 

In previous posts, we have gone through quite a bit of JavaScript concepts. But so far we have not been using JavaScript to interact with web pages, such as changing text content or applying new styles.

In this post, we will look at the [Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction), and get familiar with the [interfaces](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model#dom_interfaces) ([`Window`](https://developer.mozilla.org/en-US/docs/Web/API/Window), [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document), [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node), [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element), [`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event), etc.) that we will use to change our web pages dynamically in JavaScript. 🤘

#### The Document Object Model

The bridge between JavaScript code and the page document loaded in the browser is the [Document Object Model (DOM) API](https://www.w3.org/TR/REC-DOM-Level-1/introduction.html). The DOM is neither a programming language nor a part of the JavaScript language, but is essential for programming languages to access and manipulate web pages. 

When a browser parses an HTML document, it creates a structural representation of the document known as the [DOM tree](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Using_the_W3C_DOM_Level_1_Core#what_is_a_dom_tree). In the DOM tree, each branch ends in a [node](https://developer.mozilla.org/en-US/docs/Web/API/Node) that contains objects. 

In JavaScript, we can manipulate these objects with properties and methods available on them. The HTML file will not be changed, but the page that our browser renders will be changed dynamically when our script is running.

<div class="notecard info"> 

To link our JavaScript file in the HTML, we can put the script in the [`<head>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head) element and use the [`defer`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-defer) or [`async`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-async) attribute (see [this thread](https://stackoverflow.com/a/24070373) on Stack Overflow for details):

``` html
<head><script src="script.js" defer></script></head>
```

</div>

#### The `Window` and `Document` interfaces

In DOM manipulation, we most often use the `Window` and `Document` interfaces. A [`window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) object represents the open window in which our script is running, and a [`document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) object represents the web page loaded in the browser.

 When an HTML document is loaded into a web browser, it becomes a `document` object, which is a property of the `window` object. We can access it via `window.document`. Or alternatively, omit to refer to the `window` (see the [global object](https://developer.mozilla.org/en-US/docs/Glossary/Global_object) concept) and simply use `document`.

`document` is the *root* node of the HTML document. It can be used to get a reference to any node that we want to manipulate.

####  The DOM Node interface

As mentioned above, a DOM tree is made of node objects. Many DOM API objects, including `document` objects, are based on the [DOM Node interface](https://developer.mozilla.org/en-US/docs/Web/API/Node). The interface exposes node objects as long as many properties and methods to JavaScript code that we can manipulate just as dealing with regular objects.

There are different [*types*](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType) of nodes, such as [element node](https://developer.mozilla.org/en-US/docs/Web/API/Element), [text node](https://developer.mozilla.org/en-US/docs/Web/API/Text), [comment node](https://developer.mozilla.org/en-US/docs/Web/API/Comment), [document node](https://developer.mozilla.org/en-US/docs/Web/API/Document), etc. Besides, each DOM node contains *links* to nearby nodes that we can use to move in the tree. The node *relationships* are described using the terms `parent`, `child`, and `sibling`.

<div class="notecard info"> 

Sometimes we see node relationship described as `ancestor` and `descendant` (see [this glossary](https://www.w3.org/TR/DOM-Level-3-Core/glossary.html) from W3C), but in the DOM there are no direct links for this kind of relationship.

</div>

Consider:

``` html
<!DOCTYPE html>
<html>
  <head>
    <title>Node relationship</title>
  </head>
  <body>
    <h1>An element node</h1>
    <!-- a comment node -->
    A text node.
  </body>
</html>
```

In the above HTML snippet, the `html` node is the *parent* node of the `head` and the `body` nodes. Or put it another way, the `head` and the `body` nodes are *child* nodes of the `html` node and are *sibling* nodes. Similarly, we see that the `body` node contains three *child* nodes which are *sibling* nodes.

<div class="notecard info"> 

In the [DOM settings](https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-1590626202), an `element` node can have several types of nodes as its child node, including `element`, `comment`, `text`, and some others, while a `comment` node or a `text` node cannot have any child node. 

</div>

#### Select DOM nodes

The Node interface has provided us with properties to walk through adjacent nodes and methods to target specific `element` node(s).

*  **Navigation properties**

Accessing nodes in the DOM tree via node relationships is called [navigation](https://www.w3schools.com/js/js_htmldom_navigation.asp). For each kind of node relationship, there is a corresponding navigation property. 

The properties include [`parentNode`](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode), [`childNodes`](https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes), [`firstChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/firstChild), [`lastChild`](https://developer.mozilla.org/en-US/docs/Web/API/Node/lastChild), [`previousSibling`](https://developer.mozilla.org/en-US/docs/Web/API/Node/previousSibling), and [`nextSibling`](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling). Besides, [`parentElement`](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement), [`children`](https://developer.mozilla.org/en-US/docs/Web/API/Element/children),[ `firstElementChild`](https://developer.mozilla.org/en-US/docs/Web/API/Element/firstElementChild), [`lastElementChild`](https://developer.mozilla.org/en-US/docs/Web/API/Element/lastElementChild), [`previousElementSibling`](https://developer.mozilla.org/en-US/docs/Web/API/Element/previousElementSibling), and [`nextElementSibling`](https://developer.mozilla.org/en-US/docs/Web/API/Element/nextElementSibling) are useful if we are only interested in *element* nodes which represent [HTML tags](https://developer.mozilla.org/en-US/docs/Glossary/Tag).

 All these properties, except for `childNodes` and `children`, refer to a *single* node or element (if there is one). In comparison, `childNodes` and `children` return a [`NodeList`](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) that contains *all* the children of a node.

* **`querySelector()` and `getElementById()`**

[`querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) is a common method for getting a reference to a single `element` node. 

When we call [`Document.querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector), we will get a reference to the first element in the document that matches the given selector. If we call [`Element.querySelector()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector), we will search in the descendants of the element on which the method is called.

We pass in the selector as a parameter of the method in the form of the [CSS selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors) syntax. For instance, `document.querySelector('h1')` selects the first `<h1>` element in the document, and `document.body.querySelector('.alert')` selects the first element with the `alert` [`class`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-class) in the `<body>` element.

<div class="notecard info"> 

Basic CSS selectors include [universal selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors) (`*`), [type selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors) (`elementname`), [class selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors) (`.classname`), [id selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors) (`#idname`), and [attribute selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) (`[attr=value]`). In some cases, we may need [pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) and [pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements) selectors. And there are [combinators](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Combinators) for writing more complex rules.

 </div>

[`getElementById()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) is an alternative method to get a reference to a single `element` node by the [`id` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes#attr-id), which means we can use `getElementById('idname')` instead of `querySelector('#idname')`. However, note that it's only available for a [`document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) object, unlike the `querySelector()` method which can also be called on an [`element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) object ([this doc](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById#usage_notes) from MDN explains the reason).


* **`querySelectorAll()`**

The [`querySelectorAll()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) method uses the same selector syntax as `querySelector()`, and is also available for both [`document`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) and [`element`](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll) objects. Instead of selecting the first match of a selector, it returns a [`nodelist`](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) containing references to all matches.

We have mentioned above that some properties like `childNodes` and `children` also return a `nodelist`. A point to note is that a `nodelist` looks like an [`array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods) but does not have the same set of methods. To use array methods not available on nodelists, we can first convert the nodelist into an array using the [`Array.from()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from) method or the [spread syntax (`...`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).

#### Change the DOM

Modifying DOM nodes is the key to creating dynamic content and style. Common DOM changes include adding and removing elements, and altering existing elements' attributes.

* **Add or remove elements**
  
To add an element, we should follow two steps: *firstly* create a new element and *then* place the element into the DOM.

Elements are created with the [`document.createElement()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) method. The method requires to specify the *type* of the element to be created. For example, we can create a `<div>` element like so:

``` javascript
let newDiv = document.createElement('div');
```

This creates the element in memory but not on the page. To place an element into the DOM so that it's displayed on the page, use one of the element methods such as [`append()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/append), [`prepend()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend), [`before()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/before), and [`after()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/after) 

These methods insert into different places of the DOM. For instance, the `append()` method inserts node(s) after the last child of an element. We can append the `newDiv` element node we've just created to the `body` node like so:

``` javascript
document.body.append(newDiv);
```

<div class="notecard info"> 

The node methods [`appendChild()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild) and [`nseritBefore()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore) are also introduced in several tutorials. However, according to [the Modern JavaScript Tutorial](https://javascript.info/modifying-document), these methods are kind of [outdated](https://javascript.info/modifying-document#old-school-insert-remove-methods). The ones listed above are preferred.

</div>

There is also an [remove()](https://developer.mozilla.org/en-US/docs/Web/API/Element/remove) method for removing any existing element from the DOM. We usually first select the element to be removed, and then call the method on it. For example:

``` html
<!-- the html file -->
<button id="btn">Click Me</button>
```

``` javascript
// the javascript file
const btn = document.getElementById('btn'); // select the button element with the 'btn' id
btn.remove();
```

<div class="notecard info"> 

[`removeChild()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild) is an older method for this purpose. See also [the Modern JavaScript Tutorial](https://javascript.info/modifying-document#old-school-insert-remove-methods). 

</div>

* **Alter existing elements**

In a previous example, we create a new element and insert it into the DOM. We can alter it so as to display some new content on our web page, by assigning a new value to the [`textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) property:

``` javascript
newDiv.textContent = 'This is the new text content!';
```

Besides modifying text content, we can alter an existing element by changing or setting values of its [HTML attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes), such as [`style`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/style), [`class`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class), [`id`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id), [`src`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-src) (for an `<img>` element), [`href`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-href) (for an `<a>` element), etc. 

The [`style` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/style) of an element can be set using the [`style` property](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style). Similarly, the [`className`](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) and [`classList`](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) properties are for the [`class` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class), and the [`id` property](https://developer.mozilla.org/en-US/docs/Web/API/Element/id) is for the [`id` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).

The style property itself has a lot of properties, such as [`background`](https://www.w3schools.com/jsref/prop_style_background.asp), [`border`](https://www.w3schools.com/jsref/prop_style_border.asp), [`color`](https://www.w3schools.com/jsref/prop_style_color.asp), [`display`](https://www.w3schools.com/jsref/prop_style_display.asp), [`fontSize`](https://www.w3schools.com/jsref/prop_style_fontsize.asp), etc. See some examples of altering an element's style properties:

``` javascript
newDiv.style.border = '2px solid black';
newDiv.style.color = 'green';
newDiv.style.display = 'flex';
newDiv.style.fontSize = '10px';
```

As you may have noticed, the property name `fontSize` differs from the CSS standard name `font-size`. Basically, in JavaScript we use a camelCase name (like `fontSize`) instead of a kebab-cased one (like `font-size`). Or else, we can use the bracket notation without switching the cases (the notations are introduced in [this post](../2022-01-24-js-fundamental-week-three/#the-bracket-notation)). Either of the following works: `style.fontSize`, `style['font-size']`, and `style['fontSize']`. 

<div class="notecard link"> 

A list of common style properties and names in JavaScript can be found in [this reference](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference) from MDN. For a more complete list of CSS styles, see [this index](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#index) from MDN or [this](https://www.w3.org/TR/cssom-1/#index-defined-elsewhere) from w3.

</div>

#### The `Event` interface

We've seen how to control the content and style of our web pages using DOM. However, to make our web pages truly interactive, an important thing is to be notified about user actions such as button clicks and key presses. 

The [`Event` interface](https://developer.mozilla.org/en-US/docs/Web/API/Event) is part of the DOM API that provides this kind of information. Events notify of things that happened in the browser or system environment. Each event is represented by an object based on the interface.

* **Common types of events**

Mouse and keyboard events are among the most frequently used events.

Common [mouse events](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent) include [`click`](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event) (one click: mouse pressed and released), [`dblclick`](https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event) (double clicks), [`mousedown`](https://developer.mozilla.org/en-US/docs/Web/API/Element/mousedown_event) (mouse pressed), and [`mouseup`](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseup_event) (mouse released). 

There are also events for mouse moving: [`mouseover`](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event), [`mouseenter`](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event), [`mouseleave`](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event), [`mouseout`](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseout_event). The Modern JavaScript Tutorial has [a tutorial](https://javascript.info/mousemove-mouseover-mouseout-mouseenter-mouseleave) on these events.

Common [keyboard events](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent) include [`keydown`](https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event) (key pressed) and [keyup](https://developer.mozilla.org/en-US/docs/Web/API/Document/keyup_event) (key released). We can use their properties to get more information about a key press. For instance, the [`key`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key) property indicates which key is pressed, and the [`altKey`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/altKey), [`ctrlKey`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/ctrlKey), [`shiftKey`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/shiftKey), and [`metaKey`](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/metaKey) properties tell whether a specific [modifier key](https://en.wikipedia.org/wiki/Modifier_key) is pressed with the key.

<div class="notecard link"> 

For a reference of available events, see [this index](https://developer.mozilla.org/en-US/docs/Web/Events#event_index) from MDN or [this specification](https://html.spec.whatwg.org/multipage/webappapis.html#event-handlers-on-elements,-document-objects,-and-window-objects) from WHATWG. 

</div>

* **Register or remove event handlers**

To receive a notification when an event is fired and respond to it, we need to register an event handler using JavaScript. There are [several ways](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#other_event_listener_mechanisms) for doing this, among which the recommended one is to use the [`addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) method.

The method requires two arguments: the [event type](https://developer.mozilla.org/en-US/docs/Web/Events#event_index) to listen for, and an object containing the code to run  (usually a function) when the event is fired. 
 
<div class="notecard info">

As explained in [this post](../2022-01-12-js-fundamental-week-two/#functions), a function passed as an argument into another function is called a [callback function](https://www.w3schools.com/js/js_callback.asp). See [this](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#the_event_listener_callback) or [this](https://briggs.dev/blog/understanding-callbacks) to learn more about an  event listener callback.

</div> 

The object that we register an event handler on is called the "event target", represented by an object based on the [`EventTarget` interface](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget). Most often an event target is an `element` (such as `<div>`, `<button>`, `<a>`, etc.), `document`, or `window` object.
 
In the following code, we register an event handler on a [`button` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button). It listens for a `click` event and runs a function named `sayHi` (in which the [`alert()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/alert) method is called) whenever an event is fired on the targeted `btn` object:

``` html
<!-- the html file -->
<button id="btn">Click Me</button>
```

 ``` javascript
 // the JavaScript file
function sayHi() {
  alert("Hi there 👋");
}

const btn = document.querySelector('#btn');
btn.addEventListener('click', sayHi);
```

Passing the second parameter using a named function in the call of `addEventListener()` not only cleans the code and enhances reusability, but also allows us to unregister this handler later. The [`removeEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener) method is for removing a handler. We need to call this method with the same type and function parameters as the ones we register.

<div class="notecard link">

[This doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name) from MDN describes the `name` property of function objects.

</div>


 
In some cases, we will want to register event handlers on a group of nodes. We've learned above to use `querySelectorAll('selector')` to select all nodes that match a given selector contained in a nodelist. The `forEach` loop can be used to add a listener to each node in a nodelist:

``` javascript
const btns = document.querySelectorAll('button');

btns.forEach((btn) => btn.addEventListener('click', sayHi)
```

* **Access information about the event**

The example above doesn't make much sense that we just say hi no matter which button is pressed. Instead, we'd often like to get the specific button that's clicked and react correspondingly. 

An event listener callback can have a single parameter that represents the event that has occurred. We can get information from its properties. 

In the following code, the parameter `e`  references the event obejct itself. Whenever a button is clicked, we get a reference to the specific button element using the event object's [`target`](https://developer.mozilla.org/en-US/docs/Web/API/Event/target) property, and get its `id` property: 

``` javascript
const btns = document.querySelectorAll('button');
btns.forEach( (btn) => btn.addEventListener('click', showBtnId) );

function showBtnId(e) {
  console.log(e.target.id);
}
```

Similarly, to get information about any key press in the page, we can target the `document` object and get the `key` whenever an event of the specified `keydown` type occurs:

``` javascript
document.addEventListener('keydown', showKey);

function showKey(e) {
  console.log(e.key);
}
```

* **Trigger an event in JavaScript**

The examples above illustrate events happening in the browser that are triggered by user actions. In JavaScript, we can simulate actions programmatically to trigger an event. For instance, the [`HTMLElement.click()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click) method simulates a mouse click on an element. When we called the method, it fires the element's `click` event.

<div class="notecard link"> 

[This tutorial](https://www.javascripttutorial.net/dom/events/javascript-trigger-event/) has provided more examples.

</div>

---

<p class="final-paragraph"> 

In summary, this post talks about how to use the DOM API and JavaScript to develop dynamic and interactive web pages. [The DOM `Node` interface](#the-document-object-model) lets us manipulate the webpage content and style after the HTML file has been loaded, and the [DOM `Event` interface](#dom-events) enables us to do this on demand by registering event handlers on nodes (most often the element nodes). 

</p>

I'm currently near to completing the [foundation course of The Odin Project](https://www.theodinproject.com/paths/foundations/courses/foundations). The left sections will provide an introduction to the back end and the path forward for web development. Stay tuned for my next post! 🤠 