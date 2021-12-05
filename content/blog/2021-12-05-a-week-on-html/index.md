---
title: "A week on HTML"
date: "2021-12-05"
description: "Finishing HTML foundations and a simple project"
---

Friends, how's your week going? I'd say mine is great! 🧚‍♀️ I've learned a few stuff and finished [a simple project](https://github.com/sharonytlau/odin-recipes), also caught up with some of my best friends and had some nice food. For this week—the second week of learning the [TOP curriculum](https://www.theodinproject.com/paths/foundations/courses/foundations)—I've finished the *HTML Foundations* section and built a [recipe website](https://sharonytlau.github.io/odin-recipes/) (a fairly primitive one using only HTML). Most concepts in this section aren't new to me, but I believe firmer HTML foundations would be helpful as I go deeper into the web development field. So this week I would like to write down something I've just learned and hope to keep in mind.

##### Naming Convention: Lowercase and No Spaces
As we are building projects, it's a good practice to adhere to a convention consistently when naming folders and files. Many docs and tutorials have suggested using lowercase and 
avoiding spaces, to make our projects less error-prone. It's mainly due to the way web servers and browsers handle casing and spacing, as explained in [a doc on MDN](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files#an_aside_on_casing_and_spacing). 

##### Accessibility: the `<strong>` tag and `<em>` tag

When formatting bold or italic texts, why are  `<strong>` and `<em>` tags more recommended than `<b>` and `<i>` tags? Although marking text with <strong>`<strong>`</strong> or <b>`<b>`</b> (both bold), and <em>`<em>`</em> or <i>`<i>`</i> (both italic) seem to have no differences, in most cases we should `strong` and `em` tags for marking important text, because they give our text semantic meanings and affect the ways accessibility tools address the text. For instance, when the text is within a strong element, the tone of voice on a screen reader will change to communicate the importance. Therefore, these tags bring accessibility to our webpages for the users with visual impairments.

##### Links: Absolute and Relative 
Usually when I want to access some website, I only need to type in a few characters in the address bar and voila, the browser knows where I am going. So I guess the protocols in urls are neglected most of the time. However, when building my own websites, I've learned that protocols must be included when linking to pages on other websites. The links for this purpose are called **absolute links**, which in general are in the format of `protocol://domain/path`.
But if we only want to link to pages within our own websites, **relative links** are usually the choice. This kind of links do not include protocol and domain name as they just assume the same as the page we created the link on. Using them also makes it more flexible to change the project directory structure.

##### Image Formats: JPG vs. PNG
Among the [four main image formats in use on the web](https://www.internetingishard.com/html-and-css/links-and-images/#image-formats), JPG and PNG are the two formats that I use most. I never tried to figure out the differences between these two formats in the past. Now, as I've learned from the just-linked tutorial, JPG and PNG formats are both good for colorful photos or images. However, **JPG**s usually have smaller sizes for photos of the same quality, while **PNG**s allow any degree of opacity in images, which is not a feature for JPGs. Understanding these formats will help me improve the quality of my webpages.

Well, that's pretty much it. Thanks for reading through, and if you're still with me after all these paragraphs of not-so-interesting technical stuff, you must be or soon will be one of my best friends! Next week I'll be exploring CSS. Cheers! 🍻