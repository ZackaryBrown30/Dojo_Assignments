Javascript Block scoping

as of es6 Js offers Block scoping

Block Scoping - is a limitation on the visibility of variables set based on their location within either a function in relation to its surroundings or by the declaration type { const, let & var}

EXAMPLE
LET CANNOT BE CALLED WITHIN THE SECOND CONSOLE.LOG ON THE TOP FUNCITON BUT CAN BE ON THE LATER.

<script>
function letLoop(){
    for (let i=0; i<3; i++) { // notice we use let to define i
        console.log(i); // this will log 0, 1, 2
    }
    console.log(i); // this will give us a ReferenceError because i is not defined -- // -- outside the loop
}
</script>

EXAMPLE 2

<script>


function varLoop(){
    for (var i=0; i<3; i++) { // notice we use var to define i
        console.log(i); // this will log 0, 1, 2
    }
    console.log(i); // this will log 3
}
</script>

LET is wisely used to define loop iterables because it is only visible within the scope of that singular loop. if "i" is used, then "j" is used, eventually one will exhaust variables and the compiuter will have an exteraneous amount of memory tied to these utility variables.
LET is cleaner, however it dissapates immediately after the loop or block it was called within.

---

GENERAL SCOPING

## Js variables called with a Var on the root level of the document are accessible within other functions and all of their lower levels unless overwritten within another funciton.

Key Takeaways

1. Each function has access to all the variables in its parent function.
2. No function has access to the variables in its child functions.
3. Your entire .js file can be thought of as the outermost function or 'global' scope.
4. With ES6, we can also take advantage of block-scoping.

---

<script href="https://alligator.io/js/for-of-for-in-loops/"> THESE EXAMPLES AND TEXT WERE TAKEN FROM

HOISTING

IN && OF LOOPS;

Use for…in to iterate over the properties of an object (the object keys):
IN is used to establish a Key or iterable

<script>

let oldCar = {
  make: 'Toyota',
  model: 'Tercel',
  year: '1996'
};

for (let key in oldCar) {
  console.log(`${key} --> ${oldCar[key]}`);
}

// make --> Toyota
// model --> Tercel
</script>

You can also use for…in to iterate over the index values of an iterable like an array or a string:

<script>
let str = 'Turn the page';

for (let index in str) {
  console.log(`Index of ${str[index]}: ${index}`);
}

// Index of T: 0
// Index of u: 1

</script>

Of is used to refer to a value inside of the loop itself.
