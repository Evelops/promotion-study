## 1.js 파일 위치
    **head**
    : head에 넣으면 js 파일이 큰 경우 
    js파일을 다운로드 하기 전에는 html 파일을 확인할 수 없다.

    **body**
    : body 끝에 넣으면 js 파일의 경우
    사용자와 상호작용이 이뤄지는 js코드가 있는 경우 html이 전부
    받아진 다음 실행이 되기 때문에 사용자에게 늦게 제공될 수 있다.
    
    **head asyn 사용**
    : 브라우저가 html을 다운받아 파싱하다가 js파일 불러오는 코드에 asyn를 만나면
    병렬처리하여 html 파싱과 js 파일로드를 같이 진행하다가 js파일이 로드되면
    js 파일을 실행시킨다.
    
    - body 끝에 넣는 것 보다 시간이 단축된다.
    
    - js 파일이 html 파싱이 끝나기 전에 js파일이 다운로드 되면 js파일이 실행되기 때문에
    js파일에서 html 문서에 접근해야 하는 경우 문제가 발생할 수 있다.
    
    - js 파일 여러개가 있는 경우 작성 순서가 아닌 다운로드 된 순서대로 js 파일이 실행된다.
    
    **head에 defer 사용**
    : html 파싱을 먼저 시작하고 js 파일 로드하는 코드를 확인할 경우 병렬로 다운로드를 받고 html 파싱이 끝나게 되면 js파일을 실행시킨다.
    
## 2.변수(const, let, var)
    
    @ const
    - 상수
    
    @ let
    - 변수
    
    @ var변수
    - var변수는 {} 중괄호 안에 선언해도 밖에서 사용이 가능하다.
    ex)
    if(true){
    var a = 10;
    
    }
    console.log(a);
    
    결과: 10
    
    - 만약 var이 아닌 const나 let의 경우는 에러 발생


// 1. string concatenation
    console.log(`my` + ` cat`);
    console.log('1'  + 2);
    console.log(`string literals
    ..

    1 + 2 = ${1+2}`);


// 2.numeric operators
console.log(1+1);
console.log(1-1);
console.log(1/1);
console.log(1*1);
console.log(5%2);
console.log(2 ** 3);

// 3. = operators
let x =3;
let y = 6;
x += y; //  x = x + y
x -= y; // x = x - y
x *= y; // x = x * y
x /= y; // x = x / y



// 4. comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 5. logical operators
// ||(or), &&(and) !(not)
// ||는 앞에서 true가 나오면 다음은 진행하지 않는다.
// &&는 앞에서 false가 나오면 다음은 진행하지 않는다.

console.log("\n\n");
// 6.equality
const stringFive = "5";
const numberFive = 5;

// 타입을 고려하지 않음
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// 타입을 고려하여 확인
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

console.log("\n\n");

const ellie1 = { name: "ellie"};
const ellie2 = { name: "ellie"};
const ellie3 = ellie1;

console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);


console.log("\n\n");
const name = 'ellie'

// 7. ? operator
console.log(name === 'ellie' ? 'yes' : 'no');



// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@




/*
1. function

@ 사용법
functioin 함수명(para1, para2)
{
    수행할 로직
}

@ 특징
- 수행할 로직은
1가지 기능만 하도록
지향하고, 결과를 return한다.

- 함수명은 동사, 명령
  으로 작성하도록 지향해라

- js에서 function은 
  object이다.변수에 할당
  함수를 리턴 할 수 있다.

*/

/*
@ Typescript
- js에서 변수, 파라미터, 리턴값이
어떤 타입인지 알 수 없는 점에
문제가 있어 나오게 되었다.


*/



/*
2. parameters
- 기본형은 메모리에 값이 그대로
저장되어 있기 때문에 해당 값이 
전달된다.

- object형은 메모리에 reference가
전달된다.

ex)
function changedName(obj){
    obj.name = "coder";
}

const ellie = { name: "ellie"};
changedName(ellie);
console.log(ellie);

결과: { name: "coder"}

*/




/*
3. default parameters
- ES6에 추가되었다.

- 기존에는 파라미터가 안들어 왔을
경우를 예외처리 했어야 했는데
es6 부터는 undifined로 출력된다.
또한 default값을 지정할 수 있다.

ex)1
function showMessage(message, from){
    console.log(`${message} by ${from}`);
}

showMessage("hi!");
결과: hi by undefined


ex)2
function showMessage(message, from="tom"){
    console.log(`${message} by ${from}`);
}

showMessage("hi!");
결과: hi by tom

*/






/*
4. rest parameters
- es6에서 추가되었다.
...으로 파라미터를 넘기면
배열 형태로 전달된다.

- 

function printAll(...args){
    
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }

    //@ 위의 코드를 이렇게도 축약 가능
    for(const val1 of args){
        console.log(val1);
    }

}
printAll("apple", "orange", "banana");


결과: 
apple
orange
banana
*/






/*
5. local scope
- block level scope
- global level scope
등이 있다.

@ 원칙
: "밖에서는 안이 보이지 않고
안에서만 밖을 볼 수 있다."
: 블록 안에 있는 지역 변수는
함수 밖에서 사용할 수 없고,
블록 밖의 global 변수는
함수 안에서 사용할 수 있다.

ex)
const val = "글로벌";

function print(){
    const val2 = "local variable";
    console.log("함수내에서 -"+val);
    console.log("함수내에서 -"+val2);
}
print();
console.log("함수 밖에서 -"+val);
console.log("함수 밖에서 -"+val2);

결과:
함수내에서 -글로벌
함수내에서 -local variable
함수 밖에서 -글로벌
에러!!!!!!
*/



/*
6. return
: 함수 결과를 출력 하는 기능
- return을 명시하지 않으면
return undifined;, rturn; 를 입력한
것과 동일하다.

- 코드 가독성을 위해 
return은 먼저 선언하는 것이 좋다.
ex)2번 처럼 조건에 맞지 않는 경우 return을
한다는 것을 먼저 선언하는 것이
코드 가독성에 유리하고,
현업에서 많이 요구한다.

ex) 1
if(x > 10){
  ...
} else{
    return;
}

ex) 2
if(x <= 10){
  return;
} else{
    ...
}

*/






/*
7. function expression과 function declaration

- function expression은
함수명이 없고, 
변수에 할당해서 사용하는 방식

- function declaration은
함수명이 있는 함수이다.
javascript엔진이 함수 정의를
먼저 실행하기 때문에
function declaration은
선언을 먼저하고 정의할 수 있다.


- anonymous function
: 함수명이 없는 함수
ex) 
const print = function() {
    ...
};
print(); 이렇게 사용이 가능

또한 다른 변수에서 참조해도
사용이 가능하다.
const print2 = print;
print2();



- named function
: 함수명이 있는 함수
ex) 
const print = function print() {
    ...
};



*/






/*
8. callback
: 함수의 매개변수로 입력하는
함수

ex)
function printYes(){
    console.log("정답");
}

function printNo(){
    console.log("oh답");
}


function randomQuiz(answer, printYes, printNo){
    if(answer === "love"){
        printYes();
    } else{
        printNo();
    }
}
randomQuiz("aaa", printYes, printNo);

*/









/*
9. arrow function
: 함수 정의를 축약한 함수 정의
방법

- 함수형 프로그래밍 배열, list
사용시 간편하게 사용이 가능하다.
(예시는 안알려줌)

ex)
기존 함수 정의 :
const simplePrint = function(){
    console.log("simple");
}

arrow 함수 정의:
const simplePrint = () => console.log("simple");

*/





/*
10. IIFE

(function hello(){
    console.log("hello");
})();
- 함수 정의와 동시에 실행
- 잘 쓰이지는 않는다.

*/





// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/*
express 선언 순서
1. 서버 선언
const app = express();

2. 서버 셋팅
app.set('port', process.env.PORT || 3000);

3. 공통 미들웨어

4. 라우터
- 라우터는 범위가 넓은 라우터일 수록
  하단에 선언한다.

5. 에러 미들웨어

6. listen

*/

const express = require('express');
const app = express(); // 서버 선언
const path = require('path');



//port라는 속성을 3000으로 정의
app.set('port', process.env.PORT || 3000); // 서버에 속성 선언



/*
    1. 미들웨어
    use()가 미들웨어가 아니라
    use()안에있는 이 부분이 미들웨어이다.
    (req, res, next) => { }

    이건 use()에 미들웨어를 장착한 것이다.
    app.use((req, res, next) => { })

    get(), post() 등의 라우터나
    listen()에 있는 것도 미들웨어이다.

    ex) 
    app.use((req, res, next) => {
        console.log("미들웨어");
        next(); 
    })

*/


/*
    - 2. 미들웨어에 주소를 추가하여 해당 주소로 접근한 경우만
    실행되는 미들웨어를 선언할 수 있다.

    ex)
    이건 모든 요청이 아니라 /middle로
    접근한 경우 실행된다.

    app.use("/middle", (req, res, next) => {
        console.log("middle 실행");
        next(); 
    })
 */


  
/*
    3. 미들웨어를 여러개 선언할 수도 있다.
    app.use((req, res, next) => {
        console.log("1. 미들웨어");
        next(); 
    }, (req, res, next) => {
        console.log("2. 미들웨어");
        next(); 
    }, (req, res, next) => {
        console.log("3. 미들웨어");
        next(); 
    }, )

*/



/*
    4. 에러처리 미들웨어
    - node는 single thread이기 때문에
    에러처리가 중요하다.

    - 모든 에러가 발생하면 에러처리 미들웨어가 실행된다.

    - 에러 미들웨어는 매개변수 4개를 모두
    작성해야 한다.(err, req, res, next)

    - 미들웨어로 에러를 임의로 발생 시킬 수 있다.
    해당 코드를 use(), get() 등에 넣어서 사용
    (req, res, next) => {
        throw new Error("에러났네");
    }

    // 에러처리 미들웨어
    app.use((err, req, res, next) => {
        console.error(err);
        res.send("에러 났습니다. 문의하세요");
    })

*/






/*
    5. 404 에러 처리
    라우터와 에러 미들웨어 사이에 선언하여 준다.
    404 에러가 경로에서 제공되는게 없는 경우 발생하기 때문에
    라우터에서 전부 거르고 그래도 걸러지지 않은 경우 
    404에러 발생 대신 미들웨어 작성하여 처리한다.
    app.use((req, res, next) => {
        res.send("404 경로를 다시 입력해주세요~~~~!!!!");
    })
*/





/*
    6. 상태 제공
    res.send(), res.sendFile() 등의 res.뒤에는
    res.status(200)이 기본으로 선언된다.

*/


/*
    7.try / catch를 사용한 에러처리
    try{

    } catch (error){
        // next(error)를 하면 에러가 발생하여
        // 작성한 에러 미들웨어가 실행된다.
        next(error); 
    }

    app.use((req, res) =>{
    try{
        console.log(addValue);
    } catch (error){
        // next(error)를 하면 에러가 발생하여
        // 작성한 에러 미들웨어가 실행된다.
        next(error); 
    }
})

*/



/*
    8. next('route);
    - next('route);를 하게되면 다음 미들웨어가 아닌,
    다음 라우터로 넘어간다.

    - if문으로 분기처리하는데 사용할 수 있다.

    ex) 
    app.get("/", (req, res, next) => {
        console.log("router - 1");
        // next('route');
        next();
    }, (req, res) => {
        console.log("router - 2");
    })


    app.get("/", (req, res) => {
        console.log("router - 3");
    })
*/

app.get("/", (req, res, next) => {
    console.log("router - 1");
    // next('route');
    next();
}, (req, res) => {
    console.log("router - 2");
})


app.get("/", (req, res) => {
    console.log("router - 3");
})


app.use((err, req, res, next) => {
    console.error(err);
    res.send("에러 났습니다. 문의하세요");
})

// 포트 대기
app.listen(app.get('port'), () => {
    console.log('listening 3000 port');
})















