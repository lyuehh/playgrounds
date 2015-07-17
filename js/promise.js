function doSomething() {
    console.log('doSomething(): start');
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log('doSomething(): end');
            resolve();
        }, 1000);
    });
}

function doSomethingElse() {
    console.log('doSomethingElse(): start');
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log('doSomethingElse(): end');
            resolve();
        }, 2000);
    });
}

function finalHandler() {
    console.log('finalHandler(): start');
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log('finalHandler(): end');
            resolve();
        }, 1000);
    });
}

/*
1
doSomething(): start
doSomething(): end
doSomethingElse(): start
doSomethingElse(): end
finalHandler(): start
finalHandler(): end
*/

function example1() {
    doSomething().then(function () {
        return doSomethingElse();
    }).then(finalHandler);
}

/*
2
doSomething(): start
doSomething(): end
doSomethingElse(): start
finalHandler(): start
doSomethingElse(): end
finalHandler(): end
*/
function example2() {
    doSomething().then(function () {
        doSomethingElse();
    }).then(finalHandler); 
}

/*
3
doSomething(): start
doSomethingElse(): start
doSomething(): end
doSomethingElse(): end
finalHandler(): start
finalHandler(): end
* */
function example3() {
    doSomething().then(doSomethingElse())
    .then(finalHandler);
}

/*
4
doSomething(): start
doSomething(): end
doSomethingElse(): start
doSomethingElse(): end
finalHandler(): start
finalHandler(): end
* */
function example4() {
    doSomething().then(doSomethingElse)
    .then(finalHandler);
}


example2();
