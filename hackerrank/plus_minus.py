# coding: utf-8

case = int(raw_input())

all = raw_input().split(' ')
pos = 0 # 正
zero = 0 # 负
nega = 0 # 0

for i in range(0, case):
    if int(all[i]) > 0:
        pos += 1
    elif int(all[i]) < 0:
        nega += 1
    else:
        zero += 1

# print pos
print '%.3f' % (pos/float(case))
print '%.3f' % (nega/float(case))
print '%.3f' % (zero/float(case))
