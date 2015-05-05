a = int(raw_input())

for i in range(0, a):
    b = raw_input()
    arr = list(b)
    b = int(b)
    arr = [i for i in arr if i is not '0']
    res = [i for i in arr if b % int(i) is 0]
    print len(res)

