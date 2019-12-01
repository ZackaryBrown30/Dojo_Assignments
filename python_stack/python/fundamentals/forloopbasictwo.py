# #1 biggie size
# def biggie(arr):
#     for i in range(len(arr)):
#         if arr[i] >= 0:
#             arr.append("big")
#     return arr
# biggie([1,2,3,4,5])
# 2 count positives
# def countpositives(arr):
#     count = 0
#     for i in range(len(arr)-1):
#         if arr[i] > 0:
#             count +=1
#     arr[len(arr)-1] = count
#     return arr
# print(countpositives([1,1,0,1,1]))
# Works now
# def returnsum(li):
#     x = len(li)-1
#     sum = 0
#     for i in range(x):
#         sum = sum + li[i]
#     return sum
# print(returnsum([1,2,3,4]))
# THIS ONE SHOULD WORK BUT DOESNT< VERY STRANGE
# THIS IS ALSO NUMBER 3
# def returnsum(li):
#     sum = 0
#     for i in li:
#         sum += i
#     return sum
# print(returnsum([1,2,3,4]))
# THIS ONE ITERATES THROUGH THE ITEM THAT HAS BEEN PROVIDED WITHOUT redundant CONTEXT
# # 4
# def average(li):
#     sum = 0
#     for i in li:
#         sum += i
#     sum = sum//len(li)
#     return sum
# print(average([2,4,6]))
# YESSSSSSS!!!!
# 5
# def length(arr):
#     length = len(arr)
#     return length
# print(length([1,2,3,4,5]))
# SLAIN
# 6
# def min(arr):
#     x = arr[0]
#     if len(arr) == 0:
#         return False
#     for i in arr:
#         if arr[i] < x:
#             x = arr[i]
#     return x
# print(min([1,2,3,4,5,0]))
# initially forgot to add array brackets to inserted values and added range brackets to inserted loop arguement
# 7
# def max(arr):
#     x = arr[0]
#     if len(arr) == 0:
#         return False
#     for i in arr:
#         if arr[i] > x:
#             x = arr[i]
#     return x
# print(max([1,2,3,4,5,0]))
# 8 Denzel curry
# return dict with sumtot,avg,min,max,length
# def dictionary(li):
#     sumTot = 0
#     minVal = 0
#     maxVal = 0
#     for i in li:
#         sumTot += i
#         if i < minVal:
#             minVal = i
#         if i > maxVal:
#             maxVal = i
#     liLen = len(li)
#     avgVal = sumTot//liLen

#     return{"SumTotal" : sumTot, "Average" : avgVal, "Minimum" : minVal, "Maximum" : maxVal, "Length" : liLen}
# print(dictionary([1,2,3,4,5,6,8]))
# {'SumTotal': 29, 'Average': 4.142857142857143, 'Minimum': 0, 'Maximum': 8, 'Length': 7}
def reverselist(li):
    for i in range(0, len(li)//2, 1):
        i, len(li)-1-i = len(li)-1-i, i
    return li
print(reverselist([1,2,3,4,5,6]))
# THis last one does not work as is.
# it would require a temp to hold the value during swap. 
# attempted to refer to shorthand seen earlier in the ciriculum but haven't located the source. 
def reverselist(li):
    temp = 0
    for i in range(0, len(li)//2, 1):
        temp = i
        i = len(li)-1-i
        len(li)-1-i = temp
    return li
print(reverselist([1,2,3,4,5,6]))
