## callback 

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

> 콜백 내부 콜백 

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

> 콜백지옥

- 



## promise










## async & sync

<br>

> async vs sync
 
- sync 
    - 동기적으로 코드가 위에서 부터 아래로 실행되는 일반적인 경우.

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



