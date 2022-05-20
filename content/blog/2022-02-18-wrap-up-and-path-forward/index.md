---
title: "Wrap Up The Odin Project Foundations"
date: "2022-02-19"
description: "Back-end, frameworks, wrap-up and path forward"
--- 

Hello my dear friends! It's been a while since my last post, about 20 days or so. There's quite a lot to wrap up, but first of all, I want to announce that I've completed [The Odin Project Foundations](https://www.theodinproject.com/paths/foundations/courses/foundations) course. Hooray! (Well ... Am I already saying that out loud in the title? 🤓)

In this post, I want to first discuss the last two subjects in the course, which are [back-end](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/introduction-to-the-back-end) and [frameworks](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/introduction-to-frameworks-web-development-101). Then, I will wrap up what I've learned in this course, and talk about the path forward.

#### The Front-end and Back-end

I've talked a lot about HTML, CSS, and JavaScript in my previous posts. They are the three essential front-end technologies. 

The [*front-end*](https://en.wikipedia.org/wiki/Front-end_web_development) in web development, as opposed to the *back-end*, is the part of a website that a user sees and interacts with directly. The text, the forms, the buttons ... everything we see in the browser is a mix of HTML, CSS, and JavaScript. Each of the languages has its own responsibility and they fit well together: [*HTML*](https://developer.mozilla.org/en-US/docs/Web/HTML) describes the page structure, [*CSS*](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) describes the styles, and [*JavaScript*](https://developer.mozilla.org/en-US/docs/Web/JavaScript) adds interactivity. These front-end languages are understood by [*modern browsers*](https://developer.mozilla.org/en-US/docs/Glossary/Browser) with no extra installations required. 

The [*back-end*](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction) refers to all that happens behind the scenes to make a website work. It [typically consists of](https://www.codecademy.com/article/back-end-architecture) a *server*, an *app*, and a [*database*](https://developer.mozilla.org/en-US/docs/Glossary/Database). When a user visits a website, the files needed—HTML, CSS, JavaScript, fonts, images, etc.—are [requested](https://en.wikipedia.org/wiki/Request%E2%80%93response) by the user's browser (known as the [client](https://en.wikipedia.org/wiki/Client_(computing))) from the [web server](https://developer.mozilla.org/en-US/docs/Glossary/Server) hosting those files. After processing the incoming requests, the server will send the files back. Because the back-end doesn’t rely on a user’s browser, there's more freedom of choice on development languages. [Ruby](https://www.ruby-lang.org/en/), [Python](https://www.python.org/),  [Java](https://www.java.com/en/), and [PHP](https://www.php.net/) are among the [popular ones](https://www.geeksforgeeks.org/top-7-programming-languages-for-backend-web-development/). And guess what, our beloved [JavaScript](https://en.wikipedia.org/wiki/JavaScript) is also a popular language for back-end web development (because of the creation of [Node.js](https://nodejs.org/en/)). Isn't it fantastic?

<div class="notecard info">

In web development, the terms `front-end` and `client-side` are often used interchangeably, and so it is for the terms `back-end` and `server-side`. [This Q&A on StackExchange](https://softwareengineering.stackexchange.com/questions/188521/is-the-term-front-end-synonymous-with-client-side-if-so-is-this-always-the) discusses the nuances among the terms. 

</div>

In modern web development, functionalities shift between the back-end and the front-end from time to time. Although the front-end's core technologies have not changed for decades, nowadays there are many great front-end libraries and frameworks for handling complex things.
For example, [site rendering](https://developers.google.com/web/updates/2019/02/rendering-on-the-web) can be done at either the server-side or the client-side. There are [a bunch of discussions](https://www.google.com/search?q=client-side+versus+server-side+site+rendering) around what are we supposed to do. However, there also exists some consensus about what the back-end should do. For instance, the back-end should control what data is sent to a user. Because everything in the front-end is exposed to the users, sensitive data should be kept in the back-end to guard against malicious parties.


<div class="notecard link"> 

[This podcast from *HTML All The Things*](https://www.htmlallthethings.com/podcasts/where-frontend-ends-and-backend-begins-part-1) has provided some insights about front-end versus back-end, and [this MDN doc](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction#what_can_you_do_on_the_server-side) provides an overview of the things we can do on the server-side.

</div>

#### The Frameworks

> Web frameworks provide a standard way to build and deploy web applications on the World Wide Web. Web frameworks aim to automate the overhead associated with common activities performed in web development. For example, many web frameworks provide libraries for database access, templating frameworks, and session management, and they often promote code reuse.  — [Wikipedia](https://en.wikipedia.org/wiki/Web_framework)

Both [front-end](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction) and [back-end](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Web_frameworks) have  frameworks that simplify the work of developers. Many popular web frameworks (or [libraries](https://en.wikipedia.org/wiki/JavaScript_library)) are JavaScript-based. The [front-end ones](https://en.wikipedia.org/wiki/Comparison_of_JavaScript-based_web_frameworks) include [React](https://reactjs.org/), [Vue.js](https://vuejs.org/), [Angular](https://angular.io/), [Svelte](https://svelte.dev/), etc. And the [back-end ones](https://en.wikipedia.org/wiki/Comparison_of_server-side_web_frameworks#JavaScript) include [Express](https://expressjs.com/) (unopinionated framework), [Next.js](https://nextjs.org/) (the React framework), [Nuxt](https://nuxtjs.org//) (the Vue framework), etc.


<div class="notecard link">

Information from [State of JavaScript](https://2021.stateofjs.com/en-US/libraries) and [stackshare.io](https://stackshare.io/stacks) can provide a sense of a framework's popularity. The former is an annual survey of the trends in the JavaScript ecosystem, and the latter is a platform where developers share what technologies they use. 

</div>

Adopting a web framework may help developers to organize data and code, build complex functionalities, optimize application performance, and more. However, there is no obvious answer regarding whether or not to use a framework or which framework to use. And the answer may vary for different projects.

According to [MDN Docs](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks), questions we should probably consider before using a framework for a particular project include:

<div class='indent-list'>

- Why should I use a framework? What problems do they solve for me?
- What questions should I ask when trying to choose a framework? Do I even need to use a framework?
- What features do frameworks have? How do they work in general, and how do frameworks' implementations of these features differ?
- How do they relate to "vanilla" JavaScript or HTML?

</div>

There are also [some more specific questions](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction#how_to_choose_a_framework) that we can ask, such as:

<div class='indent-list'>

- What browsers does the framework support?
- What domain-specific languages does the framework utilize?
- Does the framework have a strong community and good docs (and other support) available?

</div>

<div class="notecard info">

[Domain-specific languages (DSLs)](https://www.jetbrains.com/mps/concepts/domain-specific-languages/) used in front-end frameworks are typically variations on *JavaScript* or *HTML*. For instance, *React* supports [JSX](https://reactjs.org/docs/introducing-jsx.html) (a syntax extension to JavaScript) and *Vue* supports [HTML-based template syntax](https://vuejs.org/guide/essentials/template-syntax.html). These languages help developers improve productivity by writing more concise code.

</div>

I personally think community and documentation are significant factors. As a beginner in web development, I very much appreciate the rich resources brought by fellow developers. Well-written documentation provides a good starting point to learn a new framework. And a vibrate community is a place where we can find help on problems.

Also, an important point to note about frameworks is that we should have a strong programming foundation no matter which framework we use. New frameworks appear all the time. If we rush ourselves through one framework to another without an understanding of the fundamentals, we will not be good at any. Therefore, to excel in JavaScript frameworks like Vue and React, we have to be proficient at JavaScript.

#### Wrap Up and Path Forward

Now that you've come with me to the end of [The Odin Project Foundations](https://www.theodinproject.com/paths/foundations/courses/foundations)! 🙌 Like it's been said in the [last lesson of TOP](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/choose-your-path-forward), that was quite a journey.

The course mainly teaches the fundamentals of core front-end technologies. Most lessons walk through key concepts of [HTML](https://www.theodinproject.com/paths/foundations/courses/foundations#html-foundations), [CSS](https://www.theodinproject.com/paths/foundations/courses/foundations#css-foundations), and [JavaScript](https://www.theodinproject.com/paths/foundations/courses/foundations#javascript-basics), including exercises and projects that help to practice. Besides, the course helps build a developer mindset and teaches engineering practices. These topics include [problem-solving](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/problem-solving), [web developer tools](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/javascript-developer-tools), [Git (version control)](https://www.theodinproject.com/paths/foundations/courses/foundations#git-basics), [code quality](https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/clean-code), etc. Last but not least, the course gently introduces [back-end and frameworks](https://www.theodinproject.com/paths/foundations/courses/foundations#the-back-end), which are also essential parts of real-world web development.

By completing this course, I've had a solid understanding of the basics of core front-end technologies, and perhaps more importantly, I've gained a picture of the realm of web development. So I would say it's really great for beginners in web development like me. 

The Odin Project has offered two paths to continue, one is [Full Stack Ruby on Rails](https://www.theodinproject.com/paths/full-stack-ruby-on-rails), and the other is [Full Stack JavaScript](https://www.theodinproject.com/paths/full-stack-javascript) (full stack means front-end plus back-end). But at this point, I would like to customize my path forward a little bit, so that TOP is still an important source of learning, but I'm gonna sort of diverge from the path.

That being said, I'm still on my way figuring out the "customized" path. After finishing The Odin Project Foundations, I've speed-watched a [Udemy course](https://www.udemy.com/course/the-complete-javascript-course/) on JavaScript to  enhance my knowledge of modern JavaScript. Moving on, I want to keep advancing my knowledge and skills in front-end web development by:

<div class='indent-list'>

- **Familiarizing myself with Vue and React:** I want to first get a feeling of key framework features by watching video tutorials for beginners. Currently, I'm watching [Vue.js 3 Tutorial from The Net Ninja](https://www.youtube.com/playlist?list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1) on YouTube. And then, I will go through the official docs of [Vue](https://vuejs.org/guide/introduction.html) and [React](https://reactjs.org/docs/getting-started.html) to learn the essentials of the frameworks.

- **Improving my knowledge of essential JavaScript concepts:** I will go through the [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) on JavaScript. It offers a guide through all topics, from basic to  advance. Besides, I will use [javascript.info](https://javascript.info/), [Eloquent Javascript](https://eloquentjavascript.net/) as supplementary materials.

- **Brushing up on my HTML, CSS, and JavaScript coding skills:** I will code with [Brad Traversy's 50 Projects In 50 Days](https://www.udemy.com/course/50-projects-50-days/) on Udemy. Each project is a mini project built with HTML, CSS, and JavaScript.

- **Learning intermediate and advanced HTML and CSS:** I will go through The Odin Project's [Intermediate](https://www.theodinproject.com/paths/full-stack-javascript/courses/intermediate-html-and-css) and [Advanced](https://www.theodinproject.com/paths/full-stack-javascript/courses/advanced-html-and-css) lessons on HTML and CSS.

- **Leveling up development/engineering skills:** I will start by cloning web apps. Ideally, I will be able to practice all sorts of development skills in the process. I may pick some projects from GitHub, such as the ones listed in the [awesome-vue](https://github.com/vuejs/awesome-vue#projects-using-vuejs) repository, and I may code with some advanced video tutorials.
 
- **Keeping up with modern web development topics:** I love listening to programming-related podcasts. My favorite ones include [JavaScript Jabber](https://javascriptjabber.com/), [HTML All The Things](https://www.htmlallthethings.com/), [JS Party](https://changelog.com/jsparty), [Syntax](https://syntax.fm/), and [The Stack Overflow Podcast](https://stackoverflow.blog/podcast/). Their episodes are typically fun conversations among several professional developers. By listening to these podcasts, I can get valuable insights into a variety of topics related to real-world web development.
 
</div>

<div class='notecard link'>

There are many resources for web developers to stay current. [The State of JS report](https://2021.stateofjs.com/en-US/resources) has listed the popular ones.

</div>

Well, although my list definitely does not end there, I'll focus on those things for now. And actually, isn't that already a lengthy list? You know, becoming a professional front-end developer is by no means easy (but I love it). I list the above things separately, but the actual process will be a mix of learning concepts and practicing.

I hope that by continuous learning, I will become more and more proficient in web development. So, are you with me to the next level? 💖
