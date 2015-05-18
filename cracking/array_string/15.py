
def check(s):
    flag = True
    arr = list(s)
    last = arr[0]
    n = 1
    ret = ""
    for i in arr[1:]:
        if i == last:
            n += 1
        else:
            ret = ret + last + str(n)
            last = i
            n = 1
    return ret + last + str(n)

str1 = "aabcccccaaa"
# str2 = "abcde"

print check(str1)
# print check(str2)
