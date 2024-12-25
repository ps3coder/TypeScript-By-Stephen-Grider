<!-- ps3u146 -->

1. Model classes : Handle Data user to represent Users , Blog posts , images and etc

2. View classes : Handle HTML and events caused by the user like clicks

probalbly need to create a class to represnt a User an all of its data like name and age

User class needs to have the ability to store some data retrieve it and change it

also needs to have the ability to notify the rest of the app when some data is changed 

user needs to be able to persist data to an outside server and then retrieve it at some future points 

<!-- Extraction Approach  -->

1. Build a class User a 'mega' class with the tons of methods
2. Refactor User to use composition
3. Refactor User to be a reuseable class that can represent any piece of data not just user

class User
1. private data : UserProps(Object to store information about a particular user(name ,age))
2. get(propName : string) : string | number(gets a single piece of info about this use r(name , age))
3. set(update : UserProps) : void (changes information about this user(name , age))
4. on(eventName : string , calllback : () => {})(register an event handler with this object so other parts of the app know when something changes )
5. trigger(eventName : string ) : void (Trigger an event to tell other parts of the app that something has changed)
6. fetch() : Promise(fetched some data from the server about a particular user)
7. save() : Promise(saves some data about this user to the server)

<!-- ps3u147 -->

<!-- ps3u153 -->
<!-- ps3u160_ -->
1. Define the save Method

Add a save method in the User class which determined whether to make a PUT request or a POST request

<!-- ps3u161_ -->
1. Identify responsibilities to refactor
- Event handling 
- Data management
- Persistance

2. Create the eventing class

<!-- ps3u162 -->

1. Create the Sync.ts class

<!-- ps3u165 -->

1. Understand the problem
2. Solution options
- passing data as arguments
- interface for serializtion and deserialization
- Generics in Sync