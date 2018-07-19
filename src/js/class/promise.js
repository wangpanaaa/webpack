{
    //es5传统回调
    let ajax=function (callback) {
        console.log('ajax调用1');
        setTimeout(function () {
            console.log('setTimeout');
            callback&&callback.call();
        },2000)
    };
    ajax(function () {
        console.log('callback调用');
    })
}
{
    //ES6 promise
    //resolve, reject(执行。中断)
    let ajax=function () {
        console.log('ajax2');
        return new Promise(function (resolve, reject) {
            console.log('promise1执行');
            setTimeout(function () {
                resolve();
            },2000)
        })
    };
    ajax().then(function () {
        console.log('promise2执行');
    })
}
{
    //ES6 promise多次调用
    let ajax=function () {
        console.log('ajax3');
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve();
            },3000)
        })
    };
    ajax().then(function () {
        console.log('promise3执行');
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve();
            },1000);
        })
    }).then(function () {
        console.log('promise4执行');
    })
}
{
    //ES6 promise异常捕获
    let ajax=function (num) {
        console.log('promise异常捕获');
        return new  Promise(function (resolve, reject) {
            if(num>5){
                console.log('正常继续');
                resolve();
            }else {
                console.log('报错终止');
                reject();
            }
        })
    };
    ajax(3).then(function () {
        console.log('promise之后执行');
    })
}
{
    //promiseAll(全加载完毕再执行下一步)
    var promise1 = Promise.resolve(3);
    var promise2 = 42;
    var promise3 = new Promise(function(resolve, reject) {
        setTimeout(resolve, 100, 'foo');
    });

    Promise.all([promise1, promise2, promise3]).then(function(values) {
        console.log(values);
    });
}
{
    var promise1 = new Promise(function(resolve, reject) {
        setTimeout(resolve, 500, 'one');
    });

    var promise2 = new Promise(function(resolve, reject) {
        setTimeout(resolve, 100, 'two');
    });

    Promise.race([promise1, promise2]).then(function(value) {
        console.log(value);
    });
}