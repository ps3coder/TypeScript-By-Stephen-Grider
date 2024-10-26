<!-- Lec39 -->

• Interface define new types in an application , simillar to built in type like string , boolean or number.
• The goal of an interface is to describe the property names and types of an object.
• Interface are custome types created by developers to define the structure of objects

<!-- Lec40 -->

1. Create a object oldCivic
2. Craete a function that printVehical
3. Initilization of a printVehical Function

<!-- lec45 -->

In this video, I want to show you a couple of different diagrams to help you really understand what

is going on inside this file and really understand what the goal of the interface is right here.

So let's get to it.

All right.

On the left hand side, at the very bottom, we've got that print summary function that we just put

together.

We can kind of think of that interface that we are using to annotate the argument to that function as

being like a gatekeeper of sorts.

In other words, if we ever have any value inside of our application like say, old Civic or drink over

here, and we want to use these values with the print summary function, we have to make sure that those

values implement the reportable interface.

In other words, these two values have to have a summary function that returns a string.

If they don't, then they cannot be used with print summary.

This mechanic right here of using an interface for gatekeeping is going to be one of the prime ways

that we get some amount of code re-use inside of TypeScript.

And you're going to see this strategy used over and over in every application we put together in this

course.

So the general strategy that we're going to use for code re-use in TypeScript is to create functions

that accept arguments that are typed with interfaces.

So all the different functions we're going to create are going to accept interfaces as much as possible.

Obviously, not every last function we ever put together is always going to require an interface type

argument.

Sometimes we're going to have something that takes a string or a boolean, or maybe a plain object in

some far off cases.

But in general, we're going to try to create functions that accept arguments that are typed with interfaces.

And then in order to call those functions, we're going to make sure that we have objects or classes

that can decide to implement that interface.

So it's essentially this same scenario right over here.

We created a function that takes an interface type as an argument, so other values inside of our application

can opt into satisfying or implementing that interface to work with that function.

This diagram that you're seeing right here, we can kind of generalize into something like this.

So we can imagine some like arbitrary interface over here that's going to govern access to some function.

And if we want to work with this function, any other object must implement that interface.

So we're going to see this exact diagram right here in many other applications we work on.

And every single time it's going to have the exact same meaning.

We're going to talk about how we've got some function and in order to call it we might, we must have

some values that implement the given interface that's acting as the gatekeeper.

All right.

So at this point, I'm sure this is still a little bit confusing.

But like I said earlier, the good news is that the entire course, like every application we put together,

is going to be focusing 100% on this mechanic.

We're going to be focusing on how to define different interfaces, to restrict access to different functions,

and then decide how to implement those different interfaces in different objects that we're going to

create.

So the real code reuse we're going to get here is making essentially this function right here really

reusable.

As long as a value implements that interface, it can work with this function.

All right.

So let's take a quick pause right here.

We're going to move on to our next topic in the next video.
