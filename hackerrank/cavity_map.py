a = int(raw_input())
b = {}

for i in range(0, a):
    c = raw_input()
    b[i] = list(c)
    # b[i] = [int(b[i][j]) for j in b[i]]

print b

