from __future__ import print_function
# print('.', end='')


case = int(raw_input())

for i in range(1, case+1):
    for j in range(0, case-i):
        print(' ', end='')

    for k in range(0, i):
        print('#', end='')
    print('\n',end='')



