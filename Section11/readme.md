1. make sure to install npm i @types/node

2. CSV Data >> Load(Node std lib) >>  Parse >> Analyze >> Report(code we write)

3. Issues 
-- Magic string comparision
-- Source of data is hardcoded
-- Data array is all strings , even through it might have numbers in it 


4. enum 
-- Follow near-identical syntax rules as normal objects
-- Creates an objects with the same keys and values when converted from TS to JS
-- Primary goal is to singl to other engineers that these are all closely related values
-- Use whenever we have a small fixed set of values that are all closely related and know at compile time



<!-- ps3u103_ -->

1.

Current program relies on hardcoded logic to read data from a CSV file.
If the data source changes , significant code restructuring would be needed
Goal is to extract reuseable CSV reading logic into a class , making the program more flexible and maintanable.

2.
Purpose : Open a CSV file , parse its content and store the data for reuse. 
Structure :
• Fields : filename  , data 
• Methods : read() 

3. Further process are continue

<!-- ps3u113_ -->

• Steps to create and use a dateStringToDate

Objectives : Develop a utility function that converts a data string into a Date object. This function will handle parsing the string , converting components into numbers and constructing the Date objects
 i.e : [ '11/08/2018', 'Bournemouth', 'Cardiff', '2', '0', 'H', 'K Friend' ]

• Steps to create  the function
1. create a new utility file utils.ts and add a function names dateStringToDate to this file as it is unrealted to the rest of the application logic

2. Define the function signature
3. Split the Date string
4. Convert Strings to numbers
5. Construct the date object
(
Year: dateParts[2]
Month: dateParts[1] - 1 (IMP : subtract 1 for zero-based indexing).
Day: dateParts[0].
)
6. Export the Function

next procedure will be in code format

<!-- ps3u115_ -->

Steps to Handle the MatchResult Enum and Improve Type Safety in the CSV File Reader

<!-- ps3u119_ -->
<!-- ps3u120 -->

Now the goal is to refactor the CSVFileReader class by using generics it reuseable and remove hardcded refrence to MatchData. Generics allow us to define types dynamically while maintaing strong typing making our class more flexible and adaptable to various data structure.

• Currently the CSVFileReader class is tighly coupled with MatchData. Since MatchData is football-specific, this make the class less reuseable so our goal is to : 
1. Remove any direct refrence to MatchData
2. Introduce generics to allow the class to work with any type of data.

<!-- ps3u121_ -->

1. Generics allows us to customize type within a class or function dynamically.
<!-- ps3u129_ -->

Steps to compare inheritance vs composition for code reuse
Inheritance: Reuse through class hierarchy.
Composition: Reuse by combining behavior from other objects.

<!-- ps3u131_ -->
1. create a new type file for match Data
## Goal : Centralized the MatchData type defination for easier access across the project.