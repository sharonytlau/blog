---
title: "A Few CSS Topics"
date: "2022-03-04"
description: "Cascading and defaulting, pseudo-classes, CSS transitions, and media queries"
--- 

CSS is hard. Isn't it? 

This post will first talk about [cascading and defaulting](#cascading-and-defaulting), kind of the fundamentals of CSS. And then [pseudo-classes](#pseudo-classes), [transitions](#css-transitions), and [media queries](#media-queries), some useful CSS features for styling our webpages.

I explored these concepts recently while coding with [Brad Traversy's 50 Projects In 50 Days](https://www.udemy.comourse/50-projects-50-days/). Hopefully, we can all understand CSS better by learning and practicing. 😀

#### Cascading and defaulting

While doing the styling for my projects, my head was full of questions. Why is this element taking this style? Where does this style come from? Isn't that style declaration that should be applied?

Instead of keeping muddling through it, I decided to settle down to read the docs and specs about CSS cascade and inheritance, to have a deeper understanding of the underlying mechanisms.

In an [early post](../2021-12-12-css-foundations/), I've briefly talked about the [CSS cascade](https://drafts.csswg.org/css-cascade/#cascading). The cascade algorithm looks at multiple factors—[origin and importance](https://drafts.csswg.org/css-cascade/#cascade-origin), [specificity](https://drafts.csswg.org/css-cascade/#cascade-specificity), [order of appearance](https://drafts.csswg.org/css-cascade/#cascade-order), etc.—and decides how conflicts of style declarations can be resolved.

<div class="notecard link">

Another [good article](https://css-tricks.com/specifics-on-css-specificity/) that explains specificity calculation.

</div>

However, cascading is only one piece of the puzzle. We’ve known that the cascade algorithm can determine a single value to apply when there are multiple declared values for an element/property combination. But the cascade may result in no value as it’s barely feasible to have declarations for every combination. In this case, the [defaulting](https://www.w3.org/TR/css-cascade-4/#defaulting) mechanism helps to determine the value.

- **Defaulting: initial value and inherited value**

A default value is either determined by inheritance or by the property’s initial value. Both a property’s initial value and whether a property is inherited or not are specified by the W3C. 

<div class="notecard info">

If, say, we want to look up the formal definition of the `color` property, we can refer to the [W3C Specs](https://www.w3.org/TR/css-color-4/#the-color-property) or [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/color#formal_definition).

</div>

When the cascade does not result in a value, an inherited property will take the value from the current element’s *parent element*. If the property is not inherited, then the value will default to its *initial value*.

<div class="notecard info">

To be more precise, an inherited property takes the [computed value](https://www.w3.org/TR/css-cascade-4/#computed-value) of the property on the parent element. And for the `root` element, which does not have a parent, the inherited value is equivalent to the initial value.

</div>

Common [*inherited* properties](https://web.dev/learn/css/inheritance/#which-properties-are-inheritable) include `font-size`, `font-family`, `color`, and `line-height`. And properties such as `height`, `width`, `margin`, `padding`, and `border` are *not* inherited. 

- **Control defaulting: `inherit`, `initial`, `unset`, and `revert`**

Besides relying on the above defaulting rules, we are able to control the defaulting behavior via a few *keywords*, i.e. `inherit`, `initial`, `unset`, and `revert`.

The `inherit` keyword can enable inheritance of *non-inherited* properties. For instance, we can make an element inherit the `width` of its parent element in the following way:

``` css
#parent {
  width: 100px;
}

#child {
  width: inherit;
}
```

Besides, the keyword can be used to *override* rules for an inherited property on an element. For instance, the following code sets the text color for `<h4>` elements to blue, except those inside the element with `class="sidebar"`:

``` css
h4 { color: blue; }

/* use the parent's color */
.sidebar h4 { color: inherit; }
```

<div class="notecard info">

All of the four keywords can be used on any CSS property similarly. Each of them explicitly specifies a particular defaulting behavior. See the [W3C Specs](https://www.w3.org/TR/css-cascade-4/#defaulting-keywords) or [MDN Docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#controlling_inheritance) for details.

</div>

#### Pseudo-classes

You must be familiar with changes in button styles when hovering over or clicking a button. A very common usage of [pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) is to add button effects.

> Pseudo-classes are selectors that permit selection based on information that lies outside of the DOM or that can be awkward or impossible to express using the other simple selectors. — [W3C](https://www.w3.org/TR/selectors-4/#pseudo-classes)

In the [W3C Specs](https://www.w3.org/TR/selectors-4/#linguistic-pseudos), they are categorized as [linguistic](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#linguistic_pseudo-classes), [location](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#location_pseudo-classes), [user action](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#user_action_pseudo-classes), [time-dimensional](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#time-dimensional_pseudo-classes), [resource state](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#resource_state_pseudo-classes), [input](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#the_input_pseudo-classes), or [tree-structural](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#tree-structural_pseudo-classes).

- **User action pseudo-classes**

Pseudo-classes used for the above-mentioned button effects belong to this category.

[`:hover`](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover), [`:active`](https://developer.mozilla.org/en-US/docs/Web/CSS/:active), and [`:focus`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus) are the most common user action pseudo-classes. They are used to provide feedback to user interaction like hovering, clicking, or navigating via a [keyboard](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Keyboard) (using the `TAB` key). Besides, in modern browsers, the pseudo-class [`:focus-visible`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible) is also often used. It enables to apply different styles based on a user's [input method](https://www.w3.org/WAI/WCAG21/Understanding/input-modalities).

<div class="notecard link">

[This article](https://bitsofco.de/when-do-the-hover-focus-and-active-pseudo-classes-apply/) illustrates when `:hover`, `:active`, and `:focus` will take effect. And for `:focus-visible`, [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible) and [W3C Specs](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo) have well-explained its implementation.

</div>

- **Tree-structural pseudo-classes**

Tree-structural pseudo-classes are useful for selection based on an element's position in the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) (the Document Object Model is introduced in [this post](../2022-01-27-dom-and-events/#the-document-object-model)).


For instance, the [:root](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) pseudo-class matches the root element of the DOM tree, which is the [`<html>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html) element in an HTML document. It is commonly used for declaring global [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) that can be used throughout the stylesheet.

Besides, this category include a variety of `*-child` and `*-of-type` selectors, such as [`:first-child`](https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child), [`:last-child`](https://developer.mozilla.org/en-US/docs/Web/CSS/:last-child), [`:nth-child`](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child), [`:nth-last-child`](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-child), [`:first-of-type`](https://developer.mozilla.org/en-US/docs/Web/CSS:first-of-type), [`:last-of-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/:last-of-type), [`:nth-of-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type), [`:nth-last-of-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-of-type), etc. They make it easy to select among a list of sibling elements (node relationship is also explained in [the same previous post](../2022-01-27-dom-and-events/#the-dom-node-interface)).

<div class="notecard link">

[This article](https://www.freecodecamp.org/news/explained-css-pseudo-classes-cef3c3177361/) has provided nice visuals to illustrate the `*-child` and `*-of-type` selectors.

</div>

<div class="notecard info">

Pseudo-classes are different from [pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements). Common pseudo-elements include [`::before`](https://developer.mozilla.org/en-US/docs/Web/CSS/::before), [`::after`](https://developer.mozilla.org/en-US/docs/Web/CSS/::after), [`::first-letter`](https://developer.mozilla.org/en-US/docs/Web/CSS/::first-letter), [`::selection`](https://developer.mozilla.org/en-US/docs/Web/CSS/::selection), etc. They let us select a specific part of an element and style it like styling a real element in the DOM tree. Note that double colons (`::`) are used for pseudo-elements instead of a single colon (`:`). This convention distinguishes the two.

</div>

#### CSS transitions

Normally, changes in CSS property values take effect immediately. However, CSS transition properties offer ways to make style changes occur smoothly over time.

- **Transition properties**

The transition properties include [`transition-property`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property) for specifying to which property the transition is applied, [`transition-duration`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration) for defining how long the transition will last, [`transition-timing-function`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function) for controlling how the transition speed changes over its duration, and [`transition-delay`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay) for defining when the transition will start.

There's also a shorthand [`transition`](https://developer.mozilla.org/en-US/docs/Web/CSS/transition) property that enables to set values for all four properties at once. Using this shorthand property is [recommended](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions#defining_transitions) in the MDN Docs to avoid out-of-sync parameters.

<div class="notecard info">

Note that not every property can have a transition effect when its value changes. The MDN Docs has kept a list of [*animatable* properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties).

</div>

- **The easing functions**

Among the four properties, [`transition-timing-function`](https://www.w3.org/TR/css-transitions-1/#transition-timing-function-property) might be the least straightforward one. This property takes an [*easing function*](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function) (aka timing function), which [by definition](https://www.w3.org/TR/css-easing-1/#easing-functions) takes an input value and produces an output value.
 
The function value can be specified using [*keywords*](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function#values) such as `linear`, `ease`, `ease-in`, `ease-out`, and `ease-in-out`, which denote predefined functions, or be specified using a [*custom* value](https://developers.google.com/web/fundamentals/design-and-ux/animations/custom-easing). 

The [`linear`](https://www.w3.org/TR/css-easing-1/#the-linear-easing-function) keyword denotes a function that [interpolates](https://en.wikipedia.org/wiki/Interpolation) the property value in equal amounts as time moves along. But this value is generally *avoided* for it creates an unnatural feeling (think of motion in the real world, things seldom move at a constant rate).

In comparison, [`ease`](https://www.w3.org/TR/css-easing-1/#valdef-cubic-bezier-easing-function-ease), [`ease-in`](https://www.w3.org/TR/css-easing-1/#valdef-cubic-bezier-easing-function-ease-in), [`ease-out`](https://www.w3.org/TR/css-easing-1/#valdef-cubic-bezier-easing-function-ease-out), and [`ease-in-out`](https://www.w3.org/TR/css-easing-1/#valdef-cubic-bezier-easing-function-ease-in-out) produce *non-linear* motion that feels more natural. Choosing among them depends on whether we want the transition rate to be higher at the *start* (`ease-out`), the *middle* (`ease`, `ease-in-out`), or the *end* (`ease-in`).

<div class="notecard link">

[This article](https://developers.google.com/web/fundamentals/design-and-ux/animations/the-basics-of-easing) from web.dev introduces basic easing functions and provides live demos of [`linear`](https://googlesamples.github.io/web-fundamentals/fundamentals/design-and-ux/animations/box-move-linear.html), [`ease-in`](https://googlesamples.github.io/web-fundamentals/fundamentals/design-and-ux/animations/box-move-ease-in.html), [`ease-out`](https://googlesamples.github.io/web-fundamentals/fundamentals/design-and-ux/animations/box-move-ease-out.html), and [`ease-in-out`](https://developers.google.com/web/fundamentals/design-and-ux/animations/the-basics-of-easing). For a cheat sheet of custom easing functions, see [this nice resource](https://easings.net/).

</div>

#### Media Queries

[Media query](https://www.w3.org/TR/mediaqueries-5/) is a technique for *conditionally* applying CSS styles. It is the key for [responsive web design (RWD)](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design), which refers to designs that respond to the needs and capabilities of a user's device.

A common usage of media queries is to target a viewport width range to apply a specific style. 

In [this Expanding Cards project](https://sharonytlau.github.io/50-projects-50-days/1-expanding-cards/index.html), I've used a media query to control the number of displayed cards. Specifically, when the user's viewport width is less than 480px, the last two cards are hidden by applying `display:none`:

``` css
@media screen and (max-width: 480px) {
  div.cards-container div:nth-last-of-type(2) {
    display: none;
  }
}
```

Besides viewport width, conditions can be set on [other things](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#media_features) about the user’s viewing environment, such as viewport orientation, device resolution, input mechanism, etc.

<div class="notecard link">

[This article](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Media_queries) from the MDN Docs teaches about using media queries, including how to *combine* multiple media features using [logical operators](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#logical_operators).

</div>

---

<p class="final-paragraph"> 

To sum up, this post talks about several useful CSS concepts. [Cascading and defaulting](#cascading-and-defaulting) together determine what value will be applied to an element/property combination. [Pseudo-classes](#pseudo-classes) enable us to select elements based on some specific characteristics such as states (user action pseudo-classes) or node position in the DOM tree (tree-structural pseudo-classes). The [transition properties](#css-transitions) help to make changes of element styles happen smoothly, and the media queries enable us to create layouts that suit different devices.

</p>

FYI, if you are interested in any of the projects I've done, they are all pushed to my GitHub repositories. A majority of them are deployed using GitHub pages. The most recent ones are [Expanding Cards](https://sharonytlau.github.io/50-projects-50-days/1-expanding-cards/index.html) and [Progress Steps](https://sharonytlau.github.io/50-projects-50-days/2-progress-steps/index.html). 😉


