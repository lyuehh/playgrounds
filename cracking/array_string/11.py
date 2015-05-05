
def check(str):
    arr = list(str)
    obj = {}
    for i in arr:
        if not obj.get(i):
            obj[i] = True
        else:
            return False
    return True

str1 = "asdfgkjkasd"
str2 = "asdfghjk"
str3 = "aa"
str4 = "ab"

print check(str1)
print check(str2)
print check(str3)
print check(str4)
