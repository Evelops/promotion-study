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


