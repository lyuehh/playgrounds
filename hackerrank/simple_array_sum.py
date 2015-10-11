case = int(raw_input())
sum = 0

numbers = raw_input()
arr = numbers.split(' ')

for i in range(0, case):
    sum += int(arr[i])

print sum
