// main.js
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

render(<Greeter />, document.getElementById('root'));

function Timer() {
    this.s1 = 0;
    this.s2 = 0;
    // 箭头函数
    setInterval(() => this.s1++, 1000);
    // 普通函数
    setInterval(function () {
        this.s2++;
    }, 1000);
}

// var timer = new Timer();
//
// setTimeout(() => console.log('s1: ', timer.s1), 3100);
// setTimeout(() => console.log('s2: ', timer.s2), 3100);
// // s1: 3
// // s2: 0
//
// };

// const pipeline = (...funcs) =>
//     val => funcs.reduce((a, b) => b(a), val);
//
// const plus1 = a => a + 1;
// const mult2 = a => a * 2;
// const addThenMult = pipeline(plus1, mult2);
//
// console.log(addThenMult(5));
//
// const test = [plus1,mult2]
// function a (a,b){
//     return b(a);
// }
// console.log(test.reduce(a, 5));

function currying(fn, n) {
    return function (m) {
        return fn.call(this,m, n);
    };
}

function tco(f) {
    var value;
    var active = false;
    var accumulated = [];

    return function accumulator() {
        accumulated.push(arguments);
        if (!active) {
            active = true;
            while (accumulated.length) {
                if(accumulated[0][1] < 2950){
                    value = f.apply(this, accumulated.shift());

                }else{
                    value = f.apply(this, accumulated.shift());

                }

            }
            // active = false;
            return value;
        }
    };
}

var sum = tco(function(x, y) {
    if (y > 0) {
        return sum(x + 1, y - 1)
    }
    else {
        return x
    }
});

console.log(sum(1, 10000));