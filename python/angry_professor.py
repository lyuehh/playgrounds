
n = int(raw_input())   #faster than n = input() , since input() executes the line as python command

for i in range(0, n):
    n, k = raw_input().split()
    n = int(n)
    k = int(k)
    l = raw_input().split()
    l = [int(i) for i in l]
    la = [i for i in l if i <= 0]
    if (k > len(la)):
        print "YES"
    else:
        print "NO"
