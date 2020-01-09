<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    es6 added explicity class distinctions
    <br />
    <script>
      class Dot {
        //must have a constructor founction
        constructor(x, y) {
          //this and new are still Co-Dependent
          this.x = x;
          this.y = y;
        }
      }
    </script>

    call a class with new, constructor activates.
    <br />
    .this and new are still active and necessary
    <br />
    Classes are !hoisted;

    <script>
      // ES5 way
      function Dot(x, y) {
        this.x = x;
        this.y = y;
      }
      Dot.prototype.showLocation = function() {
        console.log("This Dot is at x " + this.x + " and y " + this.y);
      };
      var dot1 = new Dot(55, 20);
      dot1.showLocation();
      // ES6 way
      class Dot {
        constructor(x, y) {
          this.x = x;
          this.y = y;
        }
        showLocation() {
          // ES6 String Interpolation! Note that the string is enclosed in backticks, not quotes.
          console.log(`This Dot is at x ${this.x} and y ${this.y}`);
        }
      }
      const dot2 = new Dot(5, 13);
      dot2.showLocation();
    </script>

    it appears that the 

      STRING INTERPOLATION VS CONCATENATION

      ` ${backticks.and.injectors[with].dot.notation}`
      &&
      "this + 'plus this stuff' + injected + 'with variables inplain text' + between + 'quotes'";

      creating subclasses from classes is easy with es6 
      use "EXTENDS"
       
      //example -------------------------------------------------------------
// parent Dot class
class Dot {
  constructor(x, y) {
      this.x = x;
      this.y = y;
  }
  showLocation() {
      console.log(`This ${this.constructor.name} is at x ${this.x} and y ${this.y}`);
  }
}
// child Circle class
class Circle extends Dot {
  constructor(x, y, radius) {
      super(x, y);
      //super allows you to use the parents constructor- unmodified
      this.radius = radius;
      
      }
}
// we can now create Circles
const circle1 = new Circle(33, 33, 33);
// same attributes as a Dot, plus a radius
console.log(circle1);
// and Circles can access Dot methods
circle1.showLocation();

//----------------------------------------------------------------------------


    </body>
</html>
