---
title: "CSS Flexbox"
date: "2021-12-24"
description: "Web layout"
---

Hello my dear friends! I’ve been delaying this post due to some activities last week (musicals and trips 👯‍♀️). About my learning progress this week, I'm still on The Odin Project and have finished with [the Flexbox section](https://www.theodinproject.com/paths/foundations/courses/foundations#flexbox). 

Flexbox is an important Web layout method. In this section, I've read some articles for key concepts of Flexbox, and also practiced with [Flex exercises](https://github.com/sharonytlau/odin-css-exercises/tree/main/flex) and a simple [Landing Page project](https://github.com/sharonytlau/odin-landing-page). 

Today's post will be about my thinking and notes while learning Flexbox, and as usual, there will be links to some learning materials that have helped me to understand the subject.


#### Web Layout

While learning Web layout, I was puzzled by the many available layout methods, such as [float](https://developer.mozilla.org/en-US/docs/Web/CSS/float), [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout), and [Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout). Are all of the methods still relevant or are some of them becoming obsolete? Which should I use and when? 

[This article on Web Layout History](http://grid-layout.com/history.html) has provided a thorough introduction to the evolution of Web layout methods, as well as typical use cases of the different methods. 

Among the layout methods, Flexbox and Grid have become the most popular and powerful ones in recent years. Though I have not dived into Grid yet, I've checked [these](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Relationship_of_Flexbox_to_Other_Layout_Methods#flexbox_and_other_layout_methods) [two](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout) MDN articles for a comparison between Flexbox and Grid. Despite a lot of similarities, there is a fundamental difference between the two methods that Flexbox is designed for layout in *one dimension* while Grid is for *two-dimensional* layout. 

#### Basic Concepts of Flexbox

Flexbox arranges items into rows or columns and distributes available space between items. For learning basic concepts of Flexbox, the articles from [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container) and [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) are classic. Both provide clear descriptions and straightforward images and examples. 

The Flexbox concepts include `flex-direction` and `flex-wrap`, `flex-start` and `flex-end`, main axis and cross axis, flex container and items, `flex-grow`, `flex-shrink`, and `flex-basis`, `justify-content` and `align-items`, `gap`, etc. 

From my own experience, don't expect to grasp all the concepts *at once* by glancing through the materials. About one year ago, I have had a [LinkedIn Learning course](https://www.linkedin.com/learning/css-layouts-from-float-to-flexbox-and-grid) on Web layouts methods to do my [Web Application projects](https://github.com/sharonytlau/dash-moodquote), but not much knowledge was retained. Therefore, this time I've paced myself, spending 1 to 2 hours each day to learn or review the concepts. This makes me a lot more adept at using Flexbox in exercises and project.

#### Notes on Flexbox properties

In practice, I sometimes made the error of mixing up properties for flex *containers* and flex *items*, and at times I got confused about the *default values* of different properties. So, a little summary here for using Flexbox more efficiently in the future:

* Properties for *containers*: `display`, `flex-direction`, `flex-wrap`, `flex-flow` (shorthand), `justify-content`, `align-items`, `align-content`, `gap`, `row-gap`, `column-gap`

* Properties for *items*: `flex-grow`, `flex-shrink`, `flex-basis`, `flex` (shorthand), `align-self`, `order`.

Their *default values*:
  
| Properties for Containers | Properties for Items |
|---|-------------|
| `display: block/inline` | `flex-grow: 0` |
| `flex-direction: row` | `flex-shrink: 1` |
| `flex-wrap: nowrap` | `flex-basis: auto` |
| `flex-flow: row nowrap` | `flex: 0 1 auto` |
| `justify-content: flex-start` | `align-self: auto` | 
| `align-items: stretch` | `order: 0` |
| `align-content: normal` | |

<div class="notecard info"> 

Note that although the `flex` shorthand is default to `0 1 auto`, if we set it with a single number value, like `flex: 1`, the default value of flex-basis changes to `0%`, so that declaring `flex: 1` is equivalent to declaring `flex: 1 1 0%`. 

</div>

For all of these properties, descriptions and examples can be found in the above-mentioned [CSS Tricks article](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

#### Making a Webpage from Scratch
Besides Flexbox, I'd also like to mention a practical suggestion from TOP on making a webpage from scratch. As a webpage consists of multiple sections, it's a good practice to take *one section* at a time, going from the *top* to the *bottom*. While making each section, it might be tempting to go back and forth to deal with both the *content* and the *styling* at the same time, but a more efficient way is to first do the *HTML* (content) and then do the *CSS* (styling).

---

<p class="final-paragraph"> Up till now, I've finished the HTML and CSS part of the curriculum. Starting this week I will study JavaScript. See you in my next posts, and merry Christmas! 🤶<p>
