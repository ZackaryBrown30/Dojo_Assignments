zackary@Zackary-Ubuntu:~$ ls
Desktop    Dojo_assignments  Music     Public     Videos
Documents  Downloads         Pictures  Templates
zackary@Zackary-Ubuntu:~$ cd Desktop/
zackary@Zackary-Ubuntu:~/Desktop$ ls
destination  python_stack
zackary@Zackary-Ubuntu:~/Desktop$ cd python_stack/
zackary@Zackary-Ubuntu:~/Desktop/python_stack$ ls
django  flask  my_environments  python
zackary@Zackary-Ubuntu:~/Desktop/python_stack$ cd py
bash: cd: py: No such file or directory
zackary@Zackary-Ubuntu:~/Desktop/python_stack$ cd python/
zackary@Zackary-Ubuntu:~/Desktop/python_stack/python$ ls
fundamentals  OOP
zackary@Zackary-Ubuntu:~/Desktop/python_stack/python$ cd fundamentals/
zackary@Zackary-Ubuntu:~/Desktop/python_stack/python/fundamentals$ ls
file_tree_text_file  practicePipandVENV.js  print_strings
zackary@Zackary-Ubuntu:~/Desktop/python_stack/python/fundamentals$ python3
Python 3.7.4 (default, Oct 13 2019, 14:46:54) 
[GCC 5.4.0 20160609] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> print(hello world)
  File "<stdin>", line 1
    print(hello world)
                    ^
SyntaxError: invalid syntax
>>> print("hello world")
hello world
>>> name = "Noelle"
>>> print("Hello World", name)
Hello World Noelle
>>> print("Hello World" + name)
Hello WorldNoelle
>>> name = 42
>>> print(" Hello World " = 42
... 
[1]+  Stopped                 python3
zackary@Zackary-Ubuntu:~/Desktop/python_stack/python/fundamentals$ python3
Python 3.7.4 (default, Oct 13 2019, 14:46:54) 
[GCC 5.4.0 20160609] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> name = 42
>>> print("Hello World " + 42
... 
... )
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: can only concatenate str (not "int") to str
>>> print("Hello World " + str(42))
Hello World 42
>>> print(f"Hello World {name}")
Hello World 42
>>> fave_food1 = "Piizaaa"
>>> fave_food2 = "Suuushi"
>>> print(f{fave_food1}{fave_food2})
  File "<stdin>", line 1
    print(f{fave_food1}{fave_food2})
           ^
SyntaxError: invalid syntax
>>> print(f{fave_food1}+{fave_food2})
  File "<stdin>", line 1
    print(f{fave_food1}+{fave_food2})
           ^
SyntaxError: invalid syntax
>>> print(f{fave_food1}+{fave_food2})
  File "<stdin>", line 1
    print(f{fave_food1}+{fave_food2})
           ^
SyntaxError: invalid syntax
>>> print(f"{fave_food1}"+"{fave_food2}")
Piizaaa{fave_food2}
>>> print("Hello World {}.format(name))
  File "<stdin>", line 1
    print("Hello World {}.format(name))
                                      ^
SyntaxError: EOL while scanning string literal
>>> print("Hello World {}.format str(name))
  File "<stdin>", line 1
    print("Hello World {}.format str(name))
                                          ^
SyntaxError: EOL while scanning string literal
>>> print("Hello World" {}.format str(name))
  File "<stdin>", line 1
    print("Hello World" {}.format str(name))
                        ^
SyntaxError: invalid syntax
>>> print("Hello{}World".format str(name))
  File "<stdin>", line 1
    print("Hello{}World".format str(name))
                                  ^
SyntaxError: invalid syntax
>>> print("{}Hello{}World{}".format str(name,fave_food1,fave_food2))
  File "<stdin>", line 1
    print("{}Hello{}World{}".format str(name,fave_food1,fave_food2))
                                      ^
SyntaxError: invalid syntax
>>> print("{}Hello{}World{}".format str(name, fave_food1, fave_food2))
  File "<stdin>", line 1
    print("{}Hello{}World{}".format str(name, fave_food1, fave_food2))
                                      ^
SyntaxError: invalid syntax
>>> print("{} Hello {} World {} ".format str(name, fave_food1, fave_food2))
  File "<stdin>", line 1
    print("{} Hello {} World {} ".format str(name, fave_food1, fave_food2))
                                           ^
SyntaxError: invalid syntax
>>> print("{} Hello {} World {} ".format (srt(name), fave_food1, fave_food2))
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'srt' is not defined
>>> print("{} Hello {} World {} ".format (str(name), fave_food1, fave_food2))
42 Hello Piizaaa World Suuushi 
>>> first_name = "Zen"
>>> last_name = "Coder"
>>> age = 27
>>> print(" {} {} {} {} {} ".format str(age,name), first_name, last_name, fav_food)
  File "<stdin>", line 1
    print(" {} {} {} {} {} ".format str(age,name), first_name, last_name, fav_food)
                                      ^
SyntaxError: invalid syntax
>>> print(" {} {} {} {} {} ".format(str(name), first_name, last_name, fav_food))
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'fav_food' is not defined
>>> print(" {} {} {} {} {} ".format(str(name), first_name, last_name, fave_food))
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'fave_food' is not defined
>>> print(" {} {} {} {} {} ".format(str(name), first_name, last_name, fave_food1))
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
IndexError: tuple index out of range
>>> print(" {} {} {} {} {} ".format(str(name) ,fave_food1 , first_name, last_name, fave_food1))
 42 Piizaaa Zen Coder Piizaaa 
>>> 
