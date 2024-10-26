54
58
In the last video we installed the fake module, but we very quickly saw a warning around it.

So if I hover over this right here, I see something that says could not find declaration file for module

faker.

So let's talk about what that's about.

First off, a quick diagram.

All right.

So just to make sure things are really clear, whenever you and I are writing TypeScript code, we are

free to make use of JavaScript or more precisely, JavaScript libraries as much as we want to.

So we can install common JavaScript libraries into any TypeScript project using NPM.

Or we could even reference JavaScript files that you and I write ourselves inside of our project from

TypeScript code.

But there's one little caveat here.

Remember, TypeScript wants to check your code and it checks your code by the use of types.

TypeScript wants to know all the different functions that you have, what different type of arguments

they take and what type of value they return.

And in general, it wants to know all the different types of data that are flowing around your application.

If TypeScript doesn't have this information, then it cannot completely check your code.

So when we start to think about using JavaScript code inside of our project, naturally all JavaScript

code we write or make use of is not going to have any type information attached to it.

And TypeScript can't really automatically figure out what different types of values are floating around

JavaScript code.

So to fix this problem.

TypeScript has the idea of type definition files.

You can think of a type definition file as kind of an adapter between TypeScript code that you and I

write and JavaScript libraries that we try to work with.

A type definition file is going to tell the TypeScript compiler all the different functions that are

available inside this JavaScript library, what type of argument they take and what type of value those

functions return.

So once again, you can think of these type definition files as like an adapter layer of sorts.

Sometimes type definition files will be installed automatically when you install a JavaScript library.

So for example, if you recall that Axios project we worked on at the very start of this course, we

never did anything related to type definition definition files.

That's because Axios by default includes a type definition file for us.

However, right now we are making use of the Faker module, which does not include a type definition

file.

So we have to install a type definition file manually if it is not included for us.

It might sound really challenging to know when a type definition is file is included or not included,

but basically it's going to be really straightforward if you ever try to make use of a module and you

see that warning we just saw right here, that means you need to install the type declaration file.

Once we understand that we need to install that file, it's a really simple process.

So here's what's going to happen.

All these type definition files are already publicly available for you.

I shouldn't say all of them, but the vast majority for popular libraries have already been created.

So there is already a type definition file out there that has been created by some random person to

work with the fake library to install that type definition file.

We're going to reach into a project called Definitely Typed.

That's the name of the project that includes all these pre created or pre generated type definition

files in general to get any of these type definition files from definitely typed.

We're always going to install an NPM module that generally is going to be named something like at types

slash and then the name of the library that we're trying to make use of.

So for us, it would be at types slash faker.

As a quick example, let's try looking up that module on NPM right now.

So back inside my browser over here at NPM, I can do a search for at types slash faker and I'll see

the TypeScript definition file appear for that library.

So we can scroll down a little bit.

And you'll see some details inside of here where it says very clearly that this file or this project

has been generated from the definitely typed project.

So again, definitely typed any time you see that term, they're talking about type definition files

for JavaScript libraries.

All right.

So once again, to fix up this whole big issue, all we have to do is install that type definition file

for faker.

So I'm going to flip back over to my terminal one more time.

I'm going to do an NPM install at types slash faker.

These files are always extremely small because there's just a little bit of code to describe the different

types inside that library.

So once it is installed, we can then start back up parcel once more with parcel index html.

All right, once that's all done, I can flip back over to my editor and you'll now notice that that

little warning is gone.

I still see a warning here saying that fakers declared Bud's values never read.

That's totally fine.

More importantly, we got rid of that other error or that other warning around a missing type definition

file.

Okay.

So that's it for type definition files.

Again, remember, vast majority of the time that you are using a JavaScript project inside of your

typescript code, you might have to install that type definition file.

Some JavaScript libraries include the type definition file by default.

Other ones, like less popular libraries in general, are not going to include it automatically, so

you will have to install it separately.

All right.

So let's take a pause right here and we'll continue in the next video.


59

In the last video we installed the fake module, but we very quickly saw a warning around it.

So if I hover over this right here, I see something that says could not find declaration file for module

faker.

So let's talk about what that's about.

First off, a quick diagram.

All right.

So just to make sure things are really clear, whenever you and I are writing TypeScript code, we are

free to make use of JavaScript or more precisely, JavaScript libraries as much as we want to.

So we can install common JavaScript libraries into any TypeScript project using NPM.

Or we could even reference JavaScript files that you and I write ourselves inside of our project from

TypeScript code.

But there's one little caveat here.

Remember, TypeScript wants to check your code and it checks your code by the use of types.

TypeScript wants to know all the different functions that you have, what different type of arguments

they take and what type of value they return.

And in general, it wants to know all the different types of data that are flowing around your application.

If TypeScript doesn't have this information, then it cannot completely check your code.

So when we start to think about using JavaScript code inside of our project, naturally all JavaScript

code we write or make use of is not going to have any type information attached to it.

And TypeScript can't really automatically figure out what different types of values are floating around

JavaScript code.

So to fix this problem.

TypeScript has the idea of type definition files.

You can think of a type definition file as kind of an adapter between TypeScript code that you and I

write and JavaScript libraries that we try to work with.

A type definition file is going to tell the TypeScript compiler all the different functions that are

available inside this JavaScript library, what type of argument they take and what type of value those

functions return.

So once again, you can think of these type definition files as like an adapter layer of sorts.

Sometimes type definition files will be installed automatically when you install a JavaScript library.

So for example, if you recall that Axios project we worked on at the very start of this course, we

never did anything related to type definition definition files.

That's because Axios by default includes a type definition file for us.

However, right now we are making use of the Faker module, which does not include a type definition

file.

So we have to install a type definition file manually if it is not included for us.

It might sound really challenging to know when a type definition is file is included or not included,

but basically it's going to be really straightforward if you ever try to make use of a module and you

see that warning we just saw right here, that means you need to install the type declaration file.

Once we understand that we need to install that file, it's a really simple process.

So here's what's going to happen.

All these type definition files are already publicly available for you.

I shouldn't say all of them, but the vast majority for popular libraries have already been created.

So there is already a type definition file out there that has been created by some random person to

work with the fake library to install that type definition file.

We're going to reach into a project called Definitely Typed.

That's the name of the project that includes all these pre created or pre generated type definition

files in general to get any of these type definition files from definitely typed.

We're always going to install an NPM module that generally is going to be named something like at types

slash and then the name of the library that we're trying to make use of.

So for us, it would be at types slash faker.

As a quick example, let's try looking up that module on NPM right now.

So back inside my browser over here at NPM, I can do a search for at types slash faker and I'll see

the TypeScript definition file appear for that library.

So we can scroll down a little bit.

And you'll see some details inside of here where it says very clearly that this file or this project

has been generated from the definitely typed project.

So again, definitely typed any time you see that term, they're talking about type definition files

for JavaScript libraries.

All right.

So once again, to fix up this whole big issue, all we have to do is install that type definition file

for faker.

So I'm going to flip back over to my terminal one more time.

I'm going to do an NPM install at types slash faker.

These files are always extremely small because there's just a little bit of code to describe the different

types inside that library.

So once it is installed, we can then start back up parcel once more with parcel index html.

All right, once that's all done, I can flip back over to my editor and you'll now notice that that

little warning is gone.

I still see a warning here saying that fakers declared Bud's values never read.

That's totally fine.

More importantly, we got rid of that other error or that other warning around a missing type definition

file.

Okay.

So that's it for type definition files.

Again, remember, vast majority of the time that you are using a JavaScript project inside of your

typescript code, you might have to install that type definition file.

Some JavaScript libraries include the type definition file by default.

Other ones, like less popular libraries in general, are not going to include it automatically, so

you will have to install it separately.

All right.

So let's take a pause right here and we'll continue in the next video.


