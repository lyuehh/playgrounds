
def check(str1, str2):
    if len(str1) != len(str2):
        return False
    obj1 = {}
    obj2 = {}
    
    arr1 = list(str1)
    arr2 = list(str2)

    for i in arr1:
        if not obj1.get(i):
            obj1[i] = 1
        else:
            obj1[i] = obj1[i] + 1

    for i in arr2:
        if not obj2.get(i):
            obj2[i] = 1
        else:
            obj2[i] = obj2[i] + 1

    if obj1 == obj2:
        return True
    else:
        return False

def check2(str1, str2):
    if len(str1) != len(str2):
        return False
    s1 = ''.join(sorted(str1))
    s2 = ''.join(sorted(str2))

    if s1 == s2:
        return True
    else:
        return False

str1 = "asdf"
str2 = "sdfa"

str3 = "asdfgh"
str4 = "nbvcva"

print check(str1, str2)
print check(str3, str4)

print check2(str1, str2)
print check2(str3, str4)
