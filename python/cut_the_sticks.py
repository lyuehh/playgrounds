n = int(raw_input())   #faster than n = input() , since input() executes the line as python command

a = raw_input().split()
a = [int(i) for i in a]

while len(a) > 0:
    m = min(a)
    print len(a)
    b = [(i - m) for i in a]
    aa = [i for i in b if (i != 0)]
    a = aa


# print min(a)
# print a
