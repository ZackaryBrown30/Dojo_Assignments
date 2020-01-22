*ngFor
*ngIf
Interpolation {{ }}
Property binding [ ]
Event binding ( )

IMNTERPOLATION : More generally, the text between the braces is a template expression that Angular first evaluates and then converts to a string. The following interpolation illustrates the point by adding two numbers:
<p>The sum of 1 + 1 is {{1 + 1}}.</p>
or
<p>The sum of 1 + 1 is not {{1 + 1 + getVal()}}.</p>

_____________ SERVICES _____________

Angular distinguishes components from services to increase modularity and reusability. By separating a component's view-related functionality from other kinds of processing, you can make your component classes lean and efficient.

COMPONENT;
Ideally, a component's job is to enable the user experience and nothing more. 
A component should present properties and methods for data binding, 
in order to mediate between;
the view, (rendered by the template) 
&&
the application logic (which often includes some notion of a model).

SERVICE 
Service is a broad category encompassing any value, function, or feature that an app needs. A service is typically a class with a narrow, well-defined purpose. 
    It should do something specific and do it well.

BLENDING THE TWO 
A component can delegate certain tasks to services, such as fetching data from the server, validating user input, or logging directly to the console. 
    By defining such processing tasks in an injectable service class, you make those tasks available to any component. 
        You can also make your app more adaptable by injecting different providers of the same kind of service, as appropriate in different circumstances.

SERVICE EXAMPLE 
- loggs to the console. 

<script>

export class Logger {
  log(msg: any)   { console.log(msg); }
  error(msg: any) { console.error(msg); }
  warn(msg: any)  { console.warn(msg); }
};
</script>

Services can depend on other services. 
    For example, here's a HeroService that depends on the Logger service, and also uses BackendService to get heroes. That service in turn might depend on the HttpClient service to fetch heroes asynchronously from a server.


CODEPENDENCY MAN... SERVICES THAT USE OTHER SERVICES...
<script>


export class HeroService {
  private heroes: Hero[] = [];

  constructor(
    private backend: BackendService,
    private logger: Logger) { }

  getHeroes() {
    this.backend.getAll(Hero).then( (heroes: Hero[]) => {
      this.logger.log(`Fetched ${heroes.length} heroes.`);
      this.heroes.push(...heroes); // fill cache
    });
    return this.heroes;
  }
}
</script>

    ** To define a class as a service in Angular, use the @Injectable() decorator to provide the metadata that allows Angular to inject it into a component as a dependency. 
    
    Similarly, use the @Injectable() decorator to indicate that a component or other class (such as another service, a pipe, or an NgModule) has a dependency.

The injector is the main mechanism. Angular creates an application-wide injector for you during the bootstrap process, and additional injectors as needed. You don't have to create injectors.

An injector creates dependencies, and maintains a container of dependency instances that it reuses if possible.

A provider is an object that tells an injector how to obtain or create a dependency.