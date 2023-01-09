'use strict';

console.log("1");
console.log("2");
setTimeout(()=>console.log("3"),1000);
console.log("4");

//호이스팅 되어 가장 윗단으로 선언.
const synchronousCall = (input) => {
    input();
}
// synchronousCall 함수의 파라미터가 함수 callback 
// 함수에 의해 리턴 되는 synchronousCall 함수.
synchronousCall(()=>console.log('synchronous call')); 

//호이스팅 되어 가장 윗단으로 선언.
const asychronousCall = (input, time) => {
    setTimeout(input,time);
}

asychronousCall(()=>console.log('asychronousCall'),3000);