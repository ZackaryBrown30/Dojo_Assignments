notes 3

<script>

const variable_one = "permanent and global";
let var; // only within a limited scope, reassaignable and if within an isolated area is only visible in its box

var thing = "Stuff"; //considered outdated but usable. can be reassigned, and can be global, can also be used in a function call to set its value in a limited scope. PROBLEMATIC IN USE DUE TO HOISTING. - it is the highest priority item when hoisted and can throw code operations off greatly. 

console.log(typeof var);

TYPEOF is a method that will return a data type when used.

STRING INTERPOLATION AND CONCATENATION;

concatenation can be achieved "by adding" + variables  + "or defined objects" + & + "other data types" " ."

but! thats outdated and string interpolation is favored and faster. 
""TEMPLATE STRINGS""= ${ }

 `backticking 'and string interpolation ${often use} 'these odd injections here'`;

thing.length - gives length of given obj;

things.toUpperCase() - 
things.toLowerCase() - 
things.substring(0,5) starts at 0 index and pulls until the 5th index. converts to string

things.split('target') - splits an array by the target. 
example! 
const s = 'technology, computers, it, code';
console.log(s.split(' ,'))
//would take the item 's' and format it into a useable string with spaces and commas. useful somewhat.


/* multi
line comment
is held in 
these */

//Arrays 

const numbers = new Array(1,2,3,4,5);

const fruits = ['apples', 'oranges', 'pears']

these two above are both valid constructors for an array.

.push() - val to end
.unshift() - val to beginning! 
.pop() - val from end
.isarray(insertcheckableitemhere);
fruits.indexOf('oranges') - gives you the index of an item! 

// OBJECT LITERALS!!

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['this', 'that', 'the other']
}
console.log(person.hobbies[1] gives 'that')

const {firstName, lastName} = person;

//THATS NEW 

assigning variables got easier as well 

IE!

person.email = 'one@y.com' 
//now that value is held

object literals and JSON arent crazily different.

see freeformatter.com/json-formatter.html

cosnt todoJSON = JSON.stringify(todos);


.stringify is dope
JSON.stringify is interesting as well . 
// the above turns an object into json. 


for (let i = o)
using let allows us to drop the "i" after the loop.

for thing in thing - thing has to be in thing. 

for thing of thing - temp var assigned as needed. 

// HIGH ORDER ARRAY METHODS
todos.forEach(function(todo) {console.log(todo.text)
});
///FUNCTION TAKEN AS A PARAMETER, CALLBACK TAKES A VARIABLE OF EACH ITEM. 

const todoText = todo.map(function(todo) {
 return todo.text;
});

const todoText = todos.filter(function(todo) {
    return todo.isCompleted === true;
});
console.log(todoCompleted);

filter will only return the true- completed todos. 


.forEach
.map
.filter


&& - and
|| - or

turnary oprator 
shorthand for condition
const x = 10;
const color = x > 10 ? 'red' : 'blue';
// ABOVE if condition is met red if not blue. the ? makes it always valid and active with a boolean value. true is left false is right. 

<script>
//SWITCHES - evaluating 
switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default: 
        console.log('color is not red or blue');
       break;
};

        console.log('color is blue');

SETTING DEFAULT VALUES TO NUMS!!!!

<script>

function addNums(num1 = 1, num2 = 1) {
    return num1 + num2 
}
console.log(addNums(5,5));

ALTERNATIVE OF THE ?ABOVE WITH FAT ARROW;
<script>
const addnums = (num1 = 1, num2 = 2) => {
    num1 + num2;
}   */ this is effectively a function but the return statment is implicit. /*

todos.forEach((todo) => console.log(todo));
//simple loggin of 

    </script>

lexicle this?

say wha.

so the this keyword is dope but what is the lexicle this.

OBJECT ORIENTED JAVASCRIPT --

<script>

function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function() {
        return this.getFullyear();

    }
}

const person1 = new person1('Dude', 'Mcgee', 04/03/1980);
const person1 = new person2('other', 'dude', 04/03/1980);


WHATS A PROTOTYPE? ; 
__proto__

Person.prototype.getBirthyear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = funciton() {
    return `${this.firstName} ${this.lastName}`;
}

// Class

class Person {
    cosntructor(properties, ie, firstName, lastName, dob) {
        this.properties;
        this.ie;
        this.firstNAme;
        this.lastName;
        this.dob = new Date(dob);
    }
}
