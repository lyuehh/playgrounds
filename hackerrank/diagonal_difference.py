# coding: utf-8

case = int(raw_input())

line = []

for i in range(0, case):
    line.append(raw_input().split(' '))

a = 0
b = 0
for i in range(0, case):
    a += int(line[i][i])
    b += int(line[i][case-i-1])

c = a - b
if c < 0:
    print -c
else:
    print c



