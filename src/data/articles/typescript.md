# My Relationship with Typescript

When a mentor and good friend of mine mentioned Typescript to me a couple of years back, I was very hesitant to even entertain the idea of adding another technology to my workflow, and ultimately to my overhead. Yes, there is some overhead involved here as with other technologies, and I'll discuss that in just a bit.

I won't go into detail about the ins and outs of JavaScript, but I'll just say that the reason I enjoyed writing JavaScript was that it is quick and lightweight. It is a loosely and dynamically typed scripting language by the way, and because its interpreted and not compiled, its super fast to get up and running with. Heck, all you need is a JavaScript runtime environment, which you can get in a number of places, the quickest being right there in your handy dandy browser, which you probably have open to read this article.

Ok, so JavaScript does have a stigma around it of being too unstructured and unpredictable. I will acknowledge that. Heck, the first version was built in just 10 days. And if you didn't know, it is ready and waiting to exact revenge on all developers by making you look like a fool in front of others. I would know, because its done it to me. On multiple occasions.

JavaScript is also sometimes referred to as the Wild West.

![](https://media1.giphy.com/media/UqdSupDxiAdXsmHiW5/giphy.gif?cid=ecf05e47f0jzeu2osdenh0yot3dpdoe6rxhx7qmsoyefsxny&rid=giphy.gif&ct=g)

This is because it is an anything goes kind of language. You want to initialize a variable with a string and then have it hold a number later, no problem, we'll just call it a feature. And then theres lexical and dynamic scope and _this_. Don't even get me started on _this_. Oh and that thing you thought was true, but comes back false, yeah nobody knows what thats supposed to be. There's also this thing called hoisting, which is actually just a term used to help explain the actual behavior of execution contexts, and is usually never really explained correctly leading people to believe that their functions are actually moved to the top of the file like a crane does with building materials. Thats a thing.

Those are just some of the "features" I came to enjoy about JavaScript when I learned how it worked as a language. See, when you don't really understand how something works, its hard to appreciate it, and it becomes evermore frustrating. But the more I learned, the more I came to appreciate the freedom JavaScript afforded me. There were no guardrails keeping me on the tracks and that was just how I liked it. I could choose my own way in getting from A to B, and it didn't have to be a straight line. And TypeScript, well, it was the opposite to me. It meant being told what to do, and exactly how to do it.

![](https://media1.giphy.com/media/gwfatPkyl6WnC/giphy.gif?cid=ecf05e47odmur2hob9wl7sks1u9iu8rgak3tbo3spk4qiwqt&rid=giphy.gif&ct=g)

## But What is TypeScript Anyway?

TypeScript is a superset of JavaScript, meaning it can do everything JavaScript can do and more. It ultimately converts or compiles down to JavaScript, but in development it provides structure, and safety, along with some other cool features like autosuggestion or intellisense in your editor. It helps catch errors in your code, like when you reference a variable you have not defined but thought you did, or actually mispelled. It will yell at you when you try to re-assign a variable a value of a different type. You get warned if you forget to pass arguments to a function that requires them. It catches these things and more before your code compiles and executes, which in total, is a huge time-saver. It will also tell you the expected shape of a variable due to it having been defined prior to use in a **type** or **interface** and allow you to tab complete the expected property. There are many more features to TypeScript, and yes, you can opt-in and out of the strict typing. In the very beginning I found it easy to simply set the type of many variables to **any**, **any[]**, etc. You get the point. Going back to my thought on JavaScript. When you learn how something works, and the value it is intended to provide, you not only appreciate it, but you stop looking for ways to avoid it.

## Overhead

Yes, there's overhead associated with TypeScript. There is the initial setup/configuration which really only needs to be done once. If you have a brand new application, I recommend simply creating the application from a CLI that allows you to set the template to TypeScript. Create-react-app has these steps listed on their site and is as simple as `npx create-react-app my-app --template typescript`. It is much easier and less confusing to do it this way. If you are enabling TypeScript for an existing JS application, then you can still add a couple of necessary deps, and the config to get you up and running along with a slight modifcation to the package.json.

There's also the overhead of learning TypeScript, which is the more the time-consuming of the two. Now, they do say that if you can write JavaScript, then you can write TypeScript. Yes thats mostly true, but there are still somethings you need to learn, and TypeScript has really advanced features, some of which I have yet to touch. For those that say you can learn TypeScript in 10 min, sure you can get up and running with TypeScript in 10 min just as you can with JavaScript. But, as mentioned earlier, in order to truly appreciate something, we need to learn how it works.

Today, me and TypeScript are on good terms. Heck, I'd even go as far to say that we are friends. I can say that because I now understand the value that TypeScript brings to the table, and I no longer feel like its out to take my freedom.

![best friends](https://media2.giphy.com/media/kFIfiwvzJjbUsNbIg5/giphy.gif?cid=ecf05e473q5dl7szn7hqnjhwgh5mt3szykse0bw5klbsx6d3&rid=giphy.gif&ct=g)
