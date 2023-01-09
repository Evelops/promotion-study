"use strict";
/* 

*/


/* 
    @@@ Array @@@

    - array는 index로 접근이 가능하다. 
      index는 0부터 시작한다.

    @ object와 array의 차이
    - object는 연관된 특징과 행동의 모음
    - 자료구조는 비슷한 object의 모음 

    1. 배열의 선언
    const arr1 = new Array();
    const arr2 = [1, 2];

    2. 배열.foreach()
    - foreach()문 첫번째 parameter로 callback함수를
    넣을 수 있고 callback 함수의 매개변수로는 
    value, index, array 객체를 return 받는다.

    ex)
    array1.foreach((value, index, array1) =>{
        console.log(value);
    })



    3. 배열의 add, delete
    - 제일 뒤에 추가
    array1.push("value1", "value2" ...);

    - 제일 뒤의 값 삭제
    array1.pop();

    * shift()와 unshift()는 push(), pop()에 비해 매우 느리다.
    shift 계열은 값을 앞에 추가/삭제하기 때문에 
    index를 밀거나, 당겨줘야 하기 때문이다.
    - 제일 앞에 추가
    array1.unshift("value1", "value2" ...);

    - 제일 뒤에 추가
    array1.shift();


    4. 지정된 index의 값을 삭제
    array1.splice(시작할 index, 삭제할 개수);

    let array = [1, 2, 3, 4, 5];
    ex) array1.splice(1, 3);
    : index 1 부터 3개 삭제
    [1, 5]

    ex) array1.splice(1);
    : 해당 inext 번호 부터 전부 삭제
    [1];
    
    
    5.배열 병합
    let newArray = array1.concat(array2);

    ex) 
    let array1 = [1, 2, 3];
    let array2 = [4, 5];
    let newArray = array1.concat(array2);
    console.log(newArray);
    
    결과: [1, 2, 3, 4, 5]



    6.배열의 값 검색
    indexOf(value1);
    : value1이 몇번째 index에 있는지 리턴
    값이 없는 경우 -1 리턴

    6-2. includes(value1);
    : value1이 배열에 있는지 확인(true/false);

*/

//1. 배열의 선언
const arr1 = new Array();
const arr2 = [5, 2];


// 배열과 반복문
// for(let index of arr2){
//     console.log(index);
// }

// 2. 배열.foreach()
// arr2.forEach( (value, index) => {
//     console.log(array[index]);
// });

// 3. 배열 add, delete

// - 뒤에 추가
arr2.push(6, 9);

console.log("push: "+arr2);

console.log("-----------------------------------------");
// 뒤에 삭제
arr2.pop();

console.log("pop: "+arr2);

// - 앞에 추가
arr2.unshift("value1", "value2");

console.log("unshift: "+arr2);

// - 앞에 삭제
arr2.shift();

console.log("shift: "+arr2);

arr2.splice(2, 1);

console.log("splice: "+arr2);


console.log("-----------------------------------------");
let array1 = [1, 2, 3];
let array2 = [4, 5];
let newArray = array2.concat(array1);
console.clear();
console.log(newArray);
console.log(newArray.indexOf(2));
console.log(newArray.indexOf(8));
console.log(newArray.includes(3));
console.log(newArray.includes(8));


console.clear();
console.log(newArray);