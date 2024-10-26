<!-- 46 -->

• Intro to classes in TS
• Class : A class is a blueprint or model used to create an object
•Objects created from classes have fields(values ) and methods(functions).
• Classes represent various objects within an application

• Key Components of class

1. Fields : Values attached to an object.
2. Methods : Functions attached to an object.

<!-- 47 Inheritance in TS classes  -->

• Creating a new class(Car) extending another class(Vehicle)
• Conclusion : Successfully demonstrated basic inheritance and methods overridding .

<!-- 48 Difference Between ES6 and TS classes -->

• TS focus on modifiers in classes
• Modifiers include : public private and protected

• Purpose of modifiers:

1. modifiers restrict access to class properties and methods

• Type of modifiers

1. Public : Public is a default modifier which is accessible from anywhere , anytime(even if not explicitly specified)
2. Private : Private modifiers are only accessible within the same class and its not called from outside or by child class
3. Protected : Accessible within the class and child classes but not outside

• Declaring properties in a class :

• Initializing properties :
: Property can be initialized directly on the same line as their declaration
: Every instance of the class will have the initialized value for the property

• Passing configuration to initialize property
: Its common to initialize property using arguments passed when creating an instance
: To pass arguments use a constructor functions indide the class

• Constructor functions :

: constructor is a special methods automatically executed when creating an instance
: we can use this.color = color to initialize the class property
: There is no need to initialize the property at the class declaration if its handled inside the constructor

• Handling multiple initilizations :

: We can initilize the property either directly or int the constructor , but not both
: If you initialize property in the constructor , remove any directly initialization from the declaration

• Shortend syntax with public modifiers :
: Instead of manually defining and assigning property we use the public modifiers in the constructor arguments.
: Which automatically assigns the arguments to the property , eliminating repetitive code

• Access modifiers(Public , private , protected ):

• Public : Makes the property accessible from outside the class
• private : Restricts access to the property outside the class
• Protected : Restricts access outside the class but allows access in extends(child class)
