# Enter your code here. Read input from STDIN. Print output to STDOUT

case = int(raw_input())
#print case

for i in range(0, case):
    r = int(raw_input())
    if r == 0:
        print 1

    else:
        sum = 1
        for j in range(0, r):
            if j % 2 == 0:
                sum *= 2
            else:
                sum += 1

        print sum
