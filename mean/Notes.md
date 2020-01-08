<script>
In the pre-ES6 era, there was only one way of declaring variables in JavaScript — being the usage of var.

var has always had this special aura of misconception — this probably because of how the behaviour of variables declared with var distinguishes from most other programming languages. With that said, the whole thing has a pretty natural explanation — the scope.

The thing is, var is function scoped. This type of scope acts a bit different from the more heavily used block scope.

Let’s look at what this means.

var — function scope
As mentioned, a variable being declared using var will be function scoped, meaning it will exist within the scope of the function it’s declared inside of.
function myFunc() {  
  var name = 'Luke'
  console.log(name); // 'Luke'
}

myFunc();

console.log(name); // name is not defined  
As you can see, the variable declared with var inside the function, is not reachable from outside the function.

With that said, other types of blocks — like if-statements, loops etc — will not be considered as a scope.

if(true) {  
  var name = 'Luke'
}

console.log(name); // 'Luke'  
Using var, the variable name is available outside the if-statement it was declared inside of. This is because they're in the same scope.

However, with the introduction of ES6, two new ways of declaring variables were introduced.

let and const — the introduction of block scope
In ES6, let and const were introduced as alternative ways of declaring variables — both being blocked scoped.

This will probably resonate way better with you if you’re used to any other language than JavaScript.

In block scope, any block will be a scope. This will give a more consistent behaviour.

This means that a function still is a valid scope just like with var.

function myFunc() {  
  let name = 'Luke'
  console.log(name); // 'Luke'
}

myFunc();

console.log(name); // name is not defined  
But in this case also other type of blocks qualifies as a scope — like if-statements.

if(true) {  
  let name = 'Luke'
}

console.log(name); // name is not defined  
When function scope gets confusing
Now that we got the difference between function scope and block scope covered — let’s see why this quickly can get confusing.

Having a local variable inside a scope with the same name as a variable in the outer scope is perfectly fine.

var name = 'Luke';

const func = () => {  
  var name = 'Phil';
  console.log(name); // 'Phil'
}

func();

console.log(name); // 'Luke'  
As expected, name in the outer scope keeps the initial declaration value ‘Luke’ even after func — containing an equally named local variable — has been executed.

The problem however is that since function scope only covers functions and not other types of blocks, we would get a quite different behavior with other blocks.

var name = 'Luke';

if (true) {  
  var name = 'Phil';
  console.log(name); // 'Phil'
}

console.log(name); // 'Phil'  
In this scenario ‘Phil’ will be printed in both places. This is because both variables are in the same scope, resulting in ‘Phil’ overriding the first variable declaration.

As you can imagine, with increasing complexity, this could quickly become a real headach.

Bringing consistency with blocked scope
If we look at let — which is block scoped — this would stay consistent for all blocks.

let name = 'Luke';

const func = () => {  
  let name = 'Phil';
  console.log(name); // 'Phil'
}

func();

console.log(name); // 'Luke'  
let name = 'Luke';

if (true) {  
  let name = 'Phil';
  console.log(name); // 'Phil'
}

console.log(name); // 'Luke'  
What about loops?
Let's take a look at another example to really understand the different behaviours.

Say we want to make a loop that pushes lazy functions to an array. Each of these function will print the current index.

Let's start by looking at what would happen if we used var.

var printsToBeExecuted = [];

for (var i = 0; i < 3; i++) {  
  printsToBeExecuted.push(() => console.log(i));
}

printsToBeExecuted.forEach(f => f());  
// Output: 3, 3, 3
Again, if you're used to block scope, this would feel a bit odd. You would expect 0, 1, 2 right?

The explanation is simply that a loop is not a scope when using var. So instead of creating a local variable i for each increment, it'll end up printing the final value for the variable for all the functions.

One solution that would work would be to wrap the function within another function, then execute it directly. This way we would get a proper scope for each element.

var printsToBeExecuted = [];

for (var i = 0; i < 3; i++) {  
  printsToBeExecuted.push(
    ((ii) => () => console.log(ii))(i));
}

printsToBeExecuted.forEach(f => f());  
// Output: 0, 1, 2
Great, we got the output we expected, but it was a bit verbose right?

If we now look at a solution using the block scoped let for the iteration variable, we would get the simplicity of the first example as well as the expected result.

var printsToBeExecuted = [];

for (let i = 0; i < 3; i++) {  
  printsToBeExecuted.push(() => console.log(i));
}

printsToBeExecuted.forEach(f => f());  
// Output: 0, 1, 2

</script>

source = https://www.deadcoderising.com/2017-04-11-es6-var-let-and-const-the-battle-between-function-scope-and-block-scope/
