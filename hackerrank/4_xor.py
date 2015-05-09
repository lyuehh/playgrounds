#!/bin/python

# Complete the function below.
import operator


def  maxXor(l,  r):
    max = 1
    if l > r:
        l, r = r, l

    for i in range(l, r+1):
        for j in range(l, r+1):
            # print("%d %d" % (i, j))
            x = operator.xor(i, j)
            # print("x1: %s" % x)
            if x > max:
                max = x

    return max


_l = int(raw_input());
_r = int(raw_input());

res = maxXor(_l, _r);
print(res)

# l = range(1, 10)
# for i, e in enumerate(l):
#     print i, e


