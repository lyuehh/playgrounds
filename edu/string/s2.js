/**
 *删除一个字符串所有的a，并且复制所有的b，字符数组足够大
 */

function run(s) {
    s = s.split('');
    console.log(s);
    var n = 0, numb = 0;
    for (var i = 0, l=s.length-1; i<l; i++) {
        // console.log(s[i]);
        if (s[i] !== 'a') {
            s[n++] = s[i];
        }
        // console.log(s);
        if (s[i] === 'b') {
            ++numb;
        }
    }
    s.length = n; // 截断数组，剩余的不需要了
    console.log(s);
    var newl = s.length + numb;
    for (var i=newl-1, j=n-1;j>=0;--j) {
        s[i--] = s[j];
        if (s[j] === 'b') {
            s[i--] = 'b';
        }
    }
    console.log(s);
    // s[n] = 0;
}

s = 'abcdabcd1'

run(s)
