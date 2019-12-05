// bind polyfill ----------------------------------------

let name = {
    fName: 'sachin',
    lName: 'vashist'
}

let printName = function (house, street, area, state, country) {
    console.log(this.fName + ' ' + this.lName + ' ' + house + ' ' + street + ' ' + area + ' ' + state + ' ' + country)
}
Function.prototype.myBind = function (...args) {
    let that = this,
        params = args.slice(1)
    return function (...args2) {
        that.apply(args[0], [...params, ...args2])
    }
}
function fun1(firstName,lastName){
    return console.log(this.message+' '+firstName+' '+lastName)
}
x=fun1.mybind({message:'Hello'})
x('sachin','vashist')

let myName = printName.myBind(name, 'hno 2', 'street 1', 'khera khurd')
myName('delhi', 'india')


// DEBOUNCE ----------------------------------------

const fetchData = function (args) {
    console.log('FETCH Data >>>>>>>', args.target.value)
}

const debounce = function (fun, time) {
    let timeOut;
    return function (e) {
        let currentContext = this, args = arguments
        clearTimeout(timeOut)
        timeOut = setTimeout(function () {
            fun.apply(currentContext, args)
        }, time)
    }
}

const throttle = function (fun, time) {
    let flag=true;
    return function (e) {
        if(flag){
            fun(e);
            flag=false;
            setInterval(function () {
                flag=true
            },5000)
        }
    }
}
const throttleFun=throttle(fetchData,1000)

const debouncefun=debounce(fetchData,2000)

// OR---------------

// const debfun=debounce()
// function debounce (event) {
//     let timeOut;
//     return function () {
//         clearInterval(timeOut)
//         timeOut = setTimeout(function () {
//             console.log('>>>>>>>>>>>>>>',event.target.value)
//         }, 2000)
//     }
// }

// document.getElementById('sachin').addEventListener('keyup',function (e) {
// console.log(e.target.value)
// })

// let timeout;
// function debfun(event) {
//     clearTimeout(timeout)
//     timeout=setTimeout(function () {
//         console.log('HERE>>>',event.target.value)
//     },2000)
// }


// const debounce=function () {
//     let timeout;
//     return function () {
//         clearTimeout(timeout)
//         timeout=setTimeout(function () {
//             console.log('HERE>>>')
//         },2000)
//     }
// }

// Throttle ----------------------------------------

const throttle = function (fun, time) {
    let flag=true;
    return function (e) {
        if(flag){
            fun(e);
            flag=false;
            setInterval(function () {
                flag=true
            },5000)
        }
    }
}
const throttleFun=throttle(fetchData,1000)

function fun1(firstName,lastName){
    return console.log(this.message+' '+firstName+' '+lastName)
}
x=fun1.mybind({message:'Hello'})
x('sachin','vashist')
Function.prototype.mybind=function (...args1) {
    let that=this
    let thisRefInArgs=args1.splice(1)
    return function (...args2) {
        that.apply(thisRefInArgs,[...args1,...args2])
    }
}

//----- promise.all polyfill
function all(promises) {
    return new Promise(function(resolve,reject) {
        var count = promises.length
        var result = []
        var checkDone = function() { if (--count === 0) resolve(result) }
        promises.forEach(function(p, i) {
            p.then(function(x) { result[i] = x }, reject).then(checkDone)
        })
    })
}
// mysql --user=root --password=tRn9Hy7q8KmXVN6p# dbname --host=147.102.160.1 --batch --skip-column-names --execute="SELECT stuff from stuff_table"
