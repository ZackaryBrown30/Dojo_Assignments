Typescript Observables.

1.  an Oberservalbe is a wrapper around a stream of values.
    2 . Used to create asynchronous functionality for information that changes and or has yet to take in data.
2.  Requires a .subcribe() to run
3.  Observer has error() , next(), and complete() methods.
    can implement none of these if you wish
    4.1 Next() is called when a new value is passed -
    4.2 Error() is called when error is thrown
    - errors end an observable !
      4.3 Complete() activated when the observable is done.

- observable knows it will invoke these three methods depending on information it reciveves.

* Some observalbes are never given the complete() method, and listen indefinitely
  5 . observer is an event listner.
