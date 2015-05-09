
def compress(s):
    arr = list(s)
    last = arr[0]
    n = 1
    ret = ''
    for i in arr[1:]:
        if i == last:
            n += 1
        else:
            ret = ret + last + str(n)
            last = i
            n = 1

    final = ret + last + str(n)
    if (len(final) > len(s)):
        return s
    else:
        return final

s1 = 'aabcccccaaa'
s2 = 'abcd'

print compress(s1)
print compress(s2)
