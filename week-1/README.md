# Object

> JS-Object란?

- 자바스크립트에서 데이터를 나타내는 방식. 

- 자바스크립트의 자료형은 총 8가지, 그 중 7가지(문자, 숫자, 문자열, Boolean..)은 원시형(Primitive Type)인 반면, Object는 이와 반대로 여러 자료형을 하나의 Object에 저장할 수 있음.

<br>

### **Type_1** 

- 객체 리터럴 형식으로 Object를 사용하면 아래와 같은 형식으로 작성 할 수 있음.

-  객체 내부는 Key,Value 쌍으로 이루어진 객체 프로퍼티가 들어가며, 아래와 같이 여러 자료형으로 표현 할 수 있음.


```js
//객체 리터럴 형식으로 Object를 선언한 방식. 
const person = {
    name:"esy",
    age:26,
    job:"student",
    rich:false,
    "plural type":"test",
};

// 다음과 같은 형식으로 프로퍼티가 가지는 Value 값을 추출 할 수 있음.
console.log(`name: ${person.name}, age: ${person.age}, age: ${person.age}, plural type:${person.["plural type"]}`); 

// 객체는 다음과 같이 삭제할 수 있음. 
delete person.rich; 

// 객체 값 변경은 다음과 같이 진행한다. 
person.rich = true;


```
****
<br>



### **Type_2**

- New 연산자를 사용하여 Object를 선언할 수 있음.

```js
const person = new Object();
person.name="esy";
person.age=26;
person.job="student";
person.rich=false;
person.["plural type"]=false;
```
****
<br>



### **Type_3** 

- Class를 사용해서 Object를 생성하고 사용할 수 있음. 


```js

class Person {
    constructor(name,age,job,rich,plural_type){
        this.name=name;
        this.age=age;
        this.job=job;
        this.rich=rich;
        this.plural_type=plural_type;
    }
}

const nPerson = new Person();

console.log(`name: ${nPerson.name}, age: ${nPerson.age}, age: ${nPerson.age}, plural type:${nPerson.plural_type}`); 

```

****
<br>

***Object는 위와 같이 3가지 형식으로 작성할 수 있다.***


> 다양한 타입의 프로퍼티 연산

1. computed property(계산된 프로퍼티)
    ```js
    let calculate = prompt("나이를 입력해주세요","age");
     
     // 변수 calculate 에서 프로퍼티 이름을 동적으로 받아옴.
     let mInput = {
        [calculate]:26,
     }; 

    // 26 출력.
     alert(mInput.age);

    // 위의 방식 보다 더 깔끔하게 정리된 computed property 
     let nCalculate = prompt("나이를 입력해주세요","age");
     let nInput = {};

     nInput[nCalculate] = 26; 
      
    ``` 
    <br>

2. shorten property(단축 프로퍼티)
    ```js
    // setUser 함수가 반환하는 Objectd 프로퍼티의 key, value 값이 동일함. 
    function setUser(name,job){
        return{
            name:name,
            job:job,
        };  
    }
    
    // 위와 같이 함수의 매개변수가 프로퍼티의 값과 동일한 경우, 단축구문을 사용하여 아래와 같이 로드를 단축 할 수 있음. 
    function nSetUser(name,job){
        return{
            name,
            job,
        };
    }
    ```
****
<br>

> in 연산자 

- Object 내부의 프로퍼티 여부를 확인하기 위해 사용되는 연산자

- 조건식을 사용해서 undefined가 들어있는지를 비교해주는 방식보다 훨씬 간결하고 가독성 높음. 

- example 
    ```js
    let esy = {name:'esy',age:26,rich:false};

   // in 연산자 왼쪽에 프로퍼티의 Key 값이 들어와야 하며, 따옴표 생략시 undefined or 엉뚱한 값이 리턴됨.
    alert("name" in esy); // true
    alert("job" in esy); // false  

    ```
    **** 

    <br>

> for in roop

- 객체에서 for in 반복문을 사용하면 객체 내부의 모든 키를 조회 할 수 있다. 

- example 
     ``` js
    let esy = {name:'esy',age:26,rich:false};
     
     for (key in esy){

        //key에 해당하는 값들이 출력된다.-> name, age, rich
        console.log(key); 
        // value에 해당하는 값들이 출력된다. -> esy, 26, false
        console.log(esy[key]);

     }
     ```

