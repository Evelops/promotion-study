## callback 

<br>

> callback

<br>


- js에서 함수는 object라고 할 수 있다. 그렇기에 함수의 인자값으로 서로 다른 함수를 포함 시킬 수 있으며, 다른 함수에 의해서 리턴 될 수 있다. 
- 위의 내용을 풀어서 설명하면 JS에서 특정 이벤트에 의해서 호출되어 지는 함수를 callback 함수라고 하며, 이러한 과정을 callback 이라고 한다. 

- Example
```js

/**
 * mainFunc 함수가 실행되면, callFunc 함수가 실행 됌.
 * 이때, callBack 함수가 callFunc의 매개값인 callBackFunction으로 전달 됌.
 * 그렇기 때문에, 작성된 callBack 이라는 이름의 함수는 callback 함수라고 부를 수 있음.
*/

// callback function 
function callBack(){
    console.log(`This function is callback`);

}
//calle function
function callFunc(num, function callBackFunction()){
    console.log(`get Num: ${num}`);
}

// main funciton 
function mainFunc(){
    callFunc(5,callBack);
}

mainFunc();
```
<br>

> callback-in-callback 

- 특정 함수가 두개 있는 경우, 순차적으로 함수를 호출하기 위해서는 콜백 함수 내부에서 추가적으로 콜백함수를 부르는 경우가 있다. 

- Example

```js

function callFunc( num, callbackFunc()){
    console.log(`get Num: ${num}`);
}

// 중첩 콜백을 사용한 예시.
callFunc(5,()=>{
    console.log(`get Num : ${num}`);
    callFunc(6,()=>{
        console.log(`get 2 Num : ${num}`);
    });
});

// 다음과 같이 3중, 4중으로 콜백을 사용 할 수 있음.

callFunc(4,()=>{
    console.log(`get Num : ${num}`);
    callFunc(5,()=>{
        console.log(`get Num : ${num}`);
        callFunc(6,()=>{
            console.log(`get Num : ${num}`);
            // ....
        });
    });
});
```
<br>

## async & sync

<br>

> async vs sync
 
- sync 
    - 동기적으로 코드가 위에서 부터 아래로 실행되는 일반적인 경우.
    - 자바스크립트의 경우 기본적으로 Synchronous. 
    - hoisting 된 이후,JS 코드가 작성된 순서에 맞게 동기적으로 실행됨.  

<br>

- async 
    - sync와 다르게 비동기적으로 코드가 언제 실행되는지 예측되지 않은 경우를 말함.

<br>

- callback 
    - 다른 코드의 인수로서 넘겨주는 실행 가능한 코드를 말함. 
    - callback 함수는 즉각적으로 실행 될 수도 있으며, 즉각 실행되지 않고 일정한 텀을 둔 이후 실행 될 수 있다.  

<br>

- synchronous callback
    - 동기적으로 실행되는 callback. 
    - 코드 가독성을 높이거나, 재사용을 줄이기 위해서 주로 사용됨. 
    <br>

    - Example

    ```js
    console.log("1");
    console.log("2");
    setTimeout(()=>console.log("3"),1000);
    console.log("4");
    
    // sync 함수 input callback 함수를 실행시킨다. 
    const synchronousCall = (input) => {
        input();
    }
    // synchronousCall 함수의 파라미터가 함수 callback 
    // 함수에 의해 리턴 되는 synchronousCall 함수.
    synchronousCall(()=>console.log('synchronous call')); 

    ```
<br>

- asynchronous callback
    - 비동기적으로 실행되는 callback
    <br>
    
    - Example 
    
    ```js
    const asychronousCall = (input, time) => {
        setTimeout(input,time);
    }

    asychronousCall(()=>console.log('asychronousCall'),3000);
    ```

<br>

> 콜백지옥

- example

```js

/**
 * callback hell example sudo code
 * 걍 저렇게 작성하면 가독성도 down 되고, 함수 내부에서 계속해서 콜백 함수를 호출 & 전달 하고 있기 때문에 비생산적.
 * 에러 및 디버깅 어려움.
 * 쓰레기 코드. 
 * 간단한 코드 설명은 스터디 당일 요약 -> 발표.
 * 
*/
class UserStorage {
    // 유저의 정보와  
    loginUser(id, pwd, onSuccess, onError){
        setTimeout(()=>{
            if(
                (id == 'esy' && pwd =='1234') || 
                (id == 'coder' && pwd =='12345')
            ){
                onSuccess(id); // 위 조건과 일치 할 경우, id 값을 호출하는 콜백 함수
            }else {
                onError(new Error('not found User'));
            }
        },2000)

    }

    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
            if(user == 'esy'){
                onSuccess({name:'esy', role:'admin'});
            }else{
                onError(new Error('can not access'));
            }
        },1000);
    }
}

 
const userStorage = new UserStorage();

const id = prompt('enter your id');
const pwd = prompt('enter your pwd');

userStorage.loginUser(
    id,
    pwd,
    (user)=>{
        userStorage.getRoles(
            user,
            userWithRole => {
                console.log(`Name: ${userWithRole.name}, Role: ${userWithRole.role}`);
            },
            error => {
                console.log(error);
            }
            );
    },
    (error)=>{
        console.log(error)
    });

```


## promise

- JS object 
- 비동기적으로 실행될 때, 콜백 함수를 대신해서 사용.
- 

```js 
// promise의 기본 layer.
let promise = new Promise((resolve,reject)=>{
/**
 * executor => promise 객체에 전달되는 함수를 부를 때 말함(실행자, 실행함수라고 명칭.)
 * excutor는 promise가 만들어질 때 마다 자동으로 실행됨.
 * excutor의 매개변수인 resolve, reject 자바스크립트에서 제공되는 콜백함수.
 * 개발시 해당 콜백함수(resolve,reject)를 신경쓰지 않고, executor 내부 코드만 작성. 
 * executor에서 상황에 따라, 인자 값으로 넘기는 resolve, reject 콜백 중 반드시 하나를 호출해야함. 
 * resolve(value) -> executor가 성공적으로 동작했을 때, 해당 결과값을 value 값과 함께 호출.
 * reject(error) -> executor 에서 에러 발생 시 에러 객체를 나타내는 error 와 함께 호출. 
*/
});
```

- 위 주석에서 설명하듯이, promise에서 executor는 자동으로 실행되고, 개발자 본인이 원하는 코드를 작성하고 해당 코드가 수행됨. 
- executor 내부의 처리가 끝날시, 성공여부에 따라 resolve, reject 콜백을 호출함. 



```js
// executor가 에러와 함께 작업을 거부하는 case
    let promise = new Promise((resolve,reject)=>{
        // 1초 뒤 reject 호출시, promise의 상태가 reject 로 변경. 
        setTimeout(()=>reject(new Error("ERR!")),1000);
    });
```

###  Summary

<br> 

- executor 시간이 걸리는 일을 수행. 
- executor의 실행이 종료되면 resolve & reject 함수를 호출함과 동시에 프라미스 객체의 상태가 변화함.
- resolve & reject 상태의 프라미스는 settled promise라고 불림. 






> async 함수 

- async 함수는 fucntion 키워드 앞에 위치함. 
- 함수 앞에 async 키워드를 붙이면 해당 함수는 항상 Promise를 반환함. 

<br>

- Example 
 
 ```js
async function test() {
    return 1; 
} 
 ```



