def a():
    return 5
print(a())
# prints 5
def a():
    return 5
print(a()+a())
# prints 10
def a():
    return 5
    return 10
print(a())
# prints 5 because return is effectively a break
def a():
    return 5
    print(10)
print(a())
# Doesnt print the 10.
def a():
    print(5)
x = a()
print(x)
#  prints 5, returns "a()"?? OK tested, 
# def a(b,c):
#     print(b+c)
# print(a(1,2) +a(2,3))
# predicting this prints 8
# this one doesn't work
def a(b,c):
    return str(b)+str(c)
print(a(2,5))
#  25
def a():
    b = 100
    print(b)
    if b < 10:
        return 5
    else:
        return 10
    return 7
print(a()) 
# prints 100,10
# tricked me again, ended at the first return call. 
def a(b,c):
    if b<c:
        return 7
    else:
        return 14
    return 3
print(a(2,3))
print(a(5,3))
print(a(2,3)+a(5,3))
# 7,14,21
#11
b = 500
print(b)
def a():
    b = 300
    print(b)
print(b)
a()
print(b)
# Holy smokes, youre a tricky one
# 500 500 300 500.
#12
print("oh, my dog")
b = 500
print(b)
def a():
    b = 300
    print(b)
    return b
print(b)
a()
print(b)
# 500 500 300 {NOT300< its not calling a()!}500
print("number"+str(13) )
#13
b = 500
print(b)
def a():
    b = 300
    print(b)
    return b
print(b)
b=a()
print(b)
# 500 500 300 300, expected to recieve only one 300 got two. assignment of the variable also called the extended function.
print("number",str(14))
def a():
    print(1)
    b()
    print(2)
def b():
    print(3)
a()
# Shplow 15
print("num" + str(15))
def a():
    print(1)
    x = b()
    print(x)
    return 10
def b():
    print(3)
    return 5
y = a()
print(y)
