*ngFor
*ngIf
Interpolation {{ }}
Property binding [ ]
Event binding ( )

INTERPOLATION : More generally, the text between the braces is a template expression that Angular first evaluates and then converts to a string. The following interpolation illustrates the point by adding two numbers:
<p>The sum of 1 + 1 is {{1 + 1}}.</p>
or
<p>The sum of 1 + 1 is not {{1 + 1 + getVal()}}.</p>

in PROPERTY BINDING :
PARAMETERS ARE EVALUATED AS JAVASCRIPT ... BUT
You can't use JavaScript expressions that have or promote side effects, including:
-Assignments (=, +=, -=, ...)
-Operators such as new, typeof, instanceof, etc.
-Chaining expressions with ; or ,
-The increment and decrement operators ++ and --
-Some of the ES2015+ operators
-No support for the bitwise operators such as | and &
-New template expression operators, such as |, ?. and !


The expression context is typically the component instance. In the following snippets, the recommended within double curly braces and the itemImageUrl2 in quotes refer to properties of the AppComponent.

<h4>{{recommended}}</h4>
<img [src]="itemImageUrl2">


A COMPONENT CONSISTS OF THREE THINGS : 
- A COMPONENT CLASS - that handles data and functionality. In the previous section, the product data and the share() method in the component class handle data and functionality, respectively.
- An HTML TEMPLATE - that determines the UI. In the previous section, the product list's HTML template displays the name, description, and a "Share" button for each product.
- Component-specific STYLES -  that define the look and feel. Though product list does not define any styles, this is where component CSS resides.

EVENT BINDING
(event)="statement"
<button (click)="deleteHero()">Delete hero</button>
A template statement has a side effect. That's the whole point of an event. It's how you update application state from user action.

Responding to events is the other side of Angular's "unidirectional data flow". You're free to change anything, anywhere, during this turn of the event loop.

Like template expressions, template statements use a language that looks like JavaScript. 
The template statement parser differs from the template expression parser and specifically supports both basic assignment (=) and chaining expressions (with ; or ,).

However, certain JavaScript syntax is not allowed:

-new
-increment and decrement operators, ++ and --
-operator assignment, such as += and -=
-the bitwise operators | and &
-the template expression operators
________________________________________________________


Angular provides many kinds of data-binding. Binding types can be grouped into three categories distinguished by the direction of data flow:

1. - From the source-to-view... 1 WAY - Interpolation, Property, Attribute, Class, Style.. 
1. {{expression}}
[target]="expression"
bind-target="expression"

2. - From view-to-source... 1 WAY -event
(target)="statement"
on-target="statement"

3. - Two-way sequence:  view-to-source-to-view
[(target)]="expression"
bindon-target="expression"


*****
Binding types other than interpolation have a target name to the left of the equal sign, either surrounded by punctuation, [] or (), or preceded by a prefix: bind-, on-, bindon-.

The target of a binding is the property or event inside the binding punctuation: [], () or [()].

Every public member of a source directive is automatically available for binding. You don't have to do anything special to access a directive member in a template expression or statement.

*****
 Data-binding && Property Binding work with properties of DOM elements, components, and directives, not HTML attributes.!!! i e 
 <button [disabled]="isUnchanged">Save</button>
 disabled is a dom element...