# def countdown(x):
#     arr = []
#     for i in range (x, 0, -1):
#         arr.append(i)
#     return(arr)
# countdown(5)
# # another one that doesnt work
# # great
# def printreturn(x,y):
#     print(x)
#     return y
# printreturn(1,2)
# # num 3
# def fi(arr):
#     i = arr[0]+len(arr)
#     print(i)
#     return i
# fi([1,2,3])

# NUMBER 4
# def valuesgreaterthansecond(arr):
#     x = len(arr)
#     if len(arr) < 2:
#         return "false"
#     newarr = [] 
#     for i in range(x):
#         if arr[i] > arr[1]:
#             newarr.append(arr[i])
#     print(len(newarr))
#     return newarr
# valuesgreaterthansecond([1,2,3,4,5])
# print(valuesgreaterthansecond([1,2,3,4,5]))

# # NUMBER 5
def thislenthatval(size,val):
    li = []
    for i in range(size):
        li.append(val)
    return li
print(thislenthatval(3,1))