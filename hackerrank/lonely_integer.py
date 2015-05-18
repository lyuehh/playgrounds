n = int(raw_input())   #faster than n = input() , since input() executes the line as python command

a = raw_input().split()
a = [int(i) for i in a]

x = 0
for i in a:
    x = x ^ i
    # print x
print x
