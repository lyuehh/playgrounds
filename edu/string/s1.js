/*
排序0-1串，只包含0，1，可以交换任意2个位置，把0放左边，1放右边，问至少交换多少次
*/

function run(a) {
    console.log(a);
    var answer = 0;
    a = a.split('');
    for (var i = 0, j = a.length-1; i < j; ++i, --j) {
        for (; (i < j) && (a[i] === '0'); ++i);
        for (; (j > i) && (a[j] === '1'); --j);
        if (i < j) {
            // console.log("i: %s, j: %s, a[i]: %s, a[j]: %s", i, j, a[i], a[j]);
            ++answer;
            var t = a[i];
            a[i] = a[j];
            a[j] = t;
            console.log("i: %s, j: %s, a[i]: %s, a[j]: %s", i, j, a[i], a[j]);
        }
    }
    console.log(a.join(''));
    return answer;
}


s = '0000100010001111000111'
// s1 = '000101'

// console.log(run(s))
// run(s1)
// run(s)
console.log(run(s))
