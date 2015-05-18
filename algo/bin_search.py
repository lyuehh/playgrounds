
def bin_search(a, key):
    lo = 0
    hi = len(a) - 1
    while lo <= hi:
        mid = lo + (hi - lo) / 2
        if key > a[mid]:
            lo = mid + 1
        elif key < a[mid]:
            hi = mid - 1
        else:
            return mid

    return -1

a = [1,2,3,4,5,6,7]

print bin_search(a, 5)
print bin_search(a, 0)

